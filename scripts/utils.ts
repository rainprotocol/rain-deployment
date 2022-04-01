/* eslint-disable */
import hre, { ethers } from "hardhat";
import * as path from "path";
import fs from "fs";
import { Result } from "ethers/lib/utils";

import ConfigurableRightsPoolJson from "@beehiveinnovation/configurable-rights-pool/artifacts/ConfigurableRightsPool.json";
import BPoolJson from "@beehiveinnovation/configurable-rights-pool/artifacts/BPool.json";
import TrustJson from "../artifacts/contracts/trust/Trust.sol/Trust.json";

import type {
  Trust,
  TrustConfigStruct,
  TrustRedeemableERC20ConfigStruct,
  TrustSeedERC20ConfigStruct,
} from "../typechain/Trust";
import type { TrustFactory } from "../typechain/TrustFactory";
import type { ConfigurableRightsPool } from "../typechain/ConfigurableRightsPool";
import type { BPool } from "../typechain/BPool";
import { Artifact } from "hardhat/types";
import type { Contract, ContractTransaction } from "ethers";

import * as config from "../deployment-config.json";
import * as bookAddresses from "./Addresses.json";
const commit: string = process.env.COMMIT;

const BALANCER_NAMES = [
  "BFactory",
  "SmartPoolManager",
  "BalancerSafeMath",
  "RightsManager",
  "CRPFactory",
];
let newEntity: string;

export const zeroAddress = ethers.constants.AddressZero;
export const eighteenZeros = "000000000000000000";
export const sixZeros = "000000";

export const checkNetwork = async () => {
  let network: any;
  try {
    network = await ethers.provider.getNetwork();
  } catch (error) {
    try {
      network = await (await hre.reef.getProvider()).getNetwork();
    } catch (error) {
      console.error(error);
    }
  }
  return network;
};

export const getSigner = async (): Promise<any> => {
  const network = await checkNetwork();
  try {
    const signers =
      network.name !== "reef"
        ? await hre.ethers.getSigners()
        : await hre.reef.getSigners();
    return signers;
  } catch (error) {
    console.error(error);
  }
};

const checkContract = async (
  contractName: string,
  networkName: string
): Promise<string> => {
  // If deploy to localhost, it's deployed fast so, make it all again
  if (networkName === "localhost") {
    return "";
  }

  if (
    config.network[networkName] &&
    config.network[networkName][contractName]
  ) {
    return config.network[networkName][contractName];
  } else if (
    bookAddresses[commit] &&
    bookAddresses[commit][networkName] &&
    bookAddresses[commit][networkName][contractName]
  ) {
    if (config.new_entity) {
      return "";
    } else {
      return bookAddresses[commit][networkName][contractName];
    }
  } else {
    return "";
  }
};

const writeAddress = async (
  address: string,
  contractName: string,
  networkName: string
) => {
  if (networkName !== "localhost") {
    let pathTo, content;
    if (BALANCER_NAMES.includes(contractName)) {
      pathTo = path.resolve(__dirname, "../deployment-config.json");
      content = fs.existsSync(pathTo) ? fetchFile(pathTo) : {};
      if (!Object.prototype.hasOwnProperty.call(content.network, networkName)) {
        content.network[networkName] = {};
      }
      if (
        !Object.prototype.hasOwnProperty.call(
          content.network[networkName],
          networkName
        )
      ) {
        content.network[networkName][contractName] = {};
      }
      content.network[networkName][contractName] = address;
    } else {
      pathTo = path.join(__dirname, "Addresses.json");
      content = fs.existsSync(pathTo) ? fetchFile(pathTo) : {};
      if (!Object.prototype.hasOwnProperty.call(content, commit)) {
        content[commit] = {};
      }
      if (!Object.prototype.hasOwnProperty.call(content[commit], networkName)) {
        content[commit][networkName] = {};
      }
      if (
        !Object.prototype.hasOwnProperty.call(
          content[commit][networkName],
          contractName
        )
      ) {
        content[commit][networkName][contractName] = {};
      }
      content[commit][networkName][contractName] = address;
    }
    writeFile(pathTo, JSON.stringify(content, null, 4));
  }
};

export const deploy = async (
  artifact: any,
  signer: any,
  argmts: any[] | any
) => {
  const networkName = hre.network.name ? hre.network.name : "networkName";
  const address = await checkContract(artifact.contractName, networkName);
  if (address) {
    return address;
  } else {
    const iface = new hre.ethers.utils.Interface(artifact.abi);
    const factory = new hre.ethers.ContractFactory(
      iface,
      artifact.bytecode,
      signer
    );
    const overrides =
      (await checkNetwork()).name !== "reef" ? config.deploy_config : {};
    const contract = await factory.deploy(...argmts, overrides);
    if (config.show_tx) {
      const replacer = (key: string, value: any) => {
        return key === "data" ? undefined : value;
      };
      console.log(
        "Transaction: \n",
        JSON.stringify(contract.deployTransaction, replacer, 2)
      );
      console.log("Nonce:", contract.deployTransaction.nonce);
      console.log("Tx hash:", contract.deployTransaction.hash);
      console.log("GasLimit:", contract.deployTransaction.gasLimit);
      console.log("GasPrice:", contract.deployTransaction.gasPrice);
      console.log("MaxFeePerGas:", contract.deployTransaction.maxFeePerGas);
      console.log(
        "maxPriorityFeePerGas:",
        contract.deployTransaction.maxPriorityFeePerGas
      );
    }
    await contract.deployTransaction.wait();
    if (config.new_entity) {
      await writeAddress(contract.address, artifact.contractName, newEntity);
    } else {
      await writeAddress(contract.address, artifact.contractName, networkName);
    }
    return contract.address;
  }
};

export const linkBytecode = (bytecode: any, links: any) => {
  Object.keys(links).forEach((libraryName) => {
    const libraryAddress = links[libraryName];
    const regex = new RegExp(`__${libraryName}_+`, "g");

    bytecode = bytecode.replace(regex, libraryAddress.replace("0x", ""));
  });
  return bytecode;
};

export const exportArgs = (
  artifact: Artifact,
  args: (string | number)[],
  deployId: string
) => {
  if (!deployId.includes("localhost")) {
    let pathTo = path.join(__dirname, "verification", deployId);
    checkPath(pathTo);
    pathTo = path.join(pathTo, "arguments.json");
    const content = fs.existsSync(pathTo) ? fetchFile(pathTo) : {};
    const encodeABIArgs = args.reduce((prev, current) => {
      return (
        prev +
        (typeof current === "number"
          ? ethers.utils.hexZeroPad(ethers.utils.hexlify(current), 32)
          : ethers.utils.hexZeroPad(current, 32)
        ).replace("0x", "")
      );
    }, "");
    content[artifact.contractName] = encodeABIArgs;
    writeFile(pathTo, JSON.stringify(content, null, 4));
  }
};

export const getDeployID = async () => {
  const networkName = hre.network.name ? hre.network.name : "networkName";
  const addressesPath = path.join(__dirname, "Addresses.json");
  const content = fs.existsSync(addressesPath) ? fetchFile(addressesPath) : {};
  if (Object.prototype.hasOwnProperty.call(content, commit)) {
    let name = networkName;
    let num = 2;
    while (Object.prototype.hasOwnProperty.call(content[commit], name)) {
      name = `${networkName}-${num}`;
      num += 1;
    }
    newEntity = name;
  } else {
    newEntity = networkName;
  }
  const date = new Date(Date.now())
    .toLocaleString("en-GB", { timeStyle: "medium", dateStyle: "medium" })
    .replace(", ", "-")
    .replace(/ /g, "")
    .replace(/:/g, "");
  return `${networkName}-${date}`;
};

const fetchFile = (_path: string) => {
  try {
    return JSON.parse(fs.readFileSync(_path).toString());
  } catch (error) {
    console.log(error);
    return {};
  }
};

const writeFile = (_path: string, file: any) => {
  try {
    fs.writeFileSync(_path, file);
  } catch (error) {
    console.log(error);
  }
};

const checkPath = (_path: string) => {
  if (!fs.existsSync(_path)) {
    try {
      fs.mkdirSync(_path);
    } catch (error) {
      console.log(error);
    }
  }
};

export const trustDeploy = async (
  trustFactory: TrustFactory & Contract,
  creator: any,
  trustConfig: TrustConfigStruct,
  trustRedeemableERC20Config: TrustRedeemableERC20ConfigStruct,
  trustSeedERC20Config: TrustSeedERC20ConfigStruct,
  ...args: any
): Promise<Trust & Contract> => {
  const txDeploy = await trustFactory.createChildTyped(
    trustConfig,
    trustRedeemableERC20Config,
    trustSeedERC20Config,
    ...args
  );

  const trust = new ethers.Contract(
    ethers.utils.hexZeroPad(
      ethers.utils.hexStripZeros(
        (await getEventArgs(txDeploy, "NewChild", trustFactory)).child
      ),
      20 // address bytes length
    ),
    TrustJson.abi,
    creator
  ) as Trust & Contract;

  if (!ethers.utils.isAddress(trust.address)) {
    throw new Error(
      `invalid trust address: ${trust.address} (${trust.address.length} chars)`
    );
  }

  await trust.deployed();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  trust.deployTransaction = txDeploy;

  return trust;
};

export const poolContracts = async (
  signer: any,
  trust: Trust & Contract
): Promise<[ConfigurableRightsPool & Contract, BPool & Contract]> => {
  const crp = new ethers.Contract(
    await trust.crp(),
    ConfigurableRightsPoolJson.abi,
    signer
  ) as ConfigurableRightsPool & Contract;
  const bPool = new ethers.Contract(
    await crp.bPool(),
    BPoolJson.abi,
    signer
  ) as BPool & Contract;
  return [crp, bPool];
};

export function timeout(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const waitForBlock = async (
  blockNumber: any,
  networkInfo: any
): Promise<any> => {
  const currentBlock = await getActualBlock(networkInfo);

  if (currentBlock >= blockNumber) {
    return;
  }

  console.log({
    currentBlock,
    awaitingBlock: blockNumber,
  });

  await timeout(2000);

  return await waitForBlock(blockNumber, networkInfo);
};

export const getContract = async (
  address: string,
  abi: any,
  signer: any,
  networkInfo: any
) => {
  if (networkInfo.name !== "reef") {
    return new hre.ethers.Contract(address, abi, signer);
  } else {
    return hre.reef.getContractAt(abi, address, signer);
  }
};

export const getActualBlock = async (networkInfo?: any): Promise<number> => {
  if (networkInfo) {
    return networkInfo.name !== "reef"
      ? await hre.ethers.provider.getBlockNumber()
      : await (await hre.reef.getProvider()).getBlockNumber();
  } else {
    return await getActualBlock(await checkNetwork());
  }
};

/**
 *
 * @param tx - transaction where event occurs
 * @param eventName - name of event
 * @param contract - contract object holding the address, filters, interface
 * @param contractAddressOverride - (optional) override the contract address which emits this event
 * @returns Event arguments, can be deconstructed by array index or by object key
 */
export const getEventArgs = async (
  tx: ContractTransaction,
  eventName: string,
  contract: Contract,
  contractAddressOverride?: string
): Promise<Result> => {
  const eventObj = (await tx.wait())?.events?.find(
    (x) =>
      x.topics[0] === contract.filters[eventName]().topics?.[0] &&
      x.address === (contractAddressOverride || contract.address)
  );

  if (!eventObj) {
    throw new Error(`Could not find event with name ${eventName}`);
  }

  return contract.interface.decodeEventLog(eventName, eventObj.data);
};
