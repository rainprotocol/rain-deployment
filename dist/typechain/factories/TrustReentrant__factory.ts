/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TrustReentrant,
  TrustReentrantInterface,
} from "../TrustReentrant";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOTAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "addFreezable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Trust",
        name: "trustContract_",
        type: "address",
      },
    ],
    name: "addReentrantTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "freezables",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a55534420436c617373696360a81b602080830191825283518085019094526005845264555344434360d81b908401528151919291620000629160039162000358565b5080516200007890600490602084019062000358565b50506005805460ff1916601217905550620000946006620000ad565b620000a73366038d7ea4c68000620000c3565b620003f4565b6005805460ff191660ff92909216919091179055565b6001600160a01b0382166200011f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200012d60008383620001d2565b62000149816002546200028660201b620007861790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200017c9183906200078662000286821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b620001ea838383620002e860201b620007e71760201c565b6001600160a01b038316158015906200021057506007546001600160a01b038481169116145b156200028157600760009054906101000a90046001600160a01b03166001600160a01b03166379c4985c6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200026757600080fd5b505af11580156200027c573d6000803e3d6000fd5b505050505b505050565b600082820183811015620002e1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b620003008383836200028160201b6200066e1760201c565b6001600160a01b03821660009081526006602052604090205460ff161562000281576040805162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b604482015290519081900360640190fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039b57805160ff1916838001178555620003cb565b82800160010185558215620003cb579182015b82811115620003cb578251825591602001919060010190620003ae565b50620003d9929150620003dd565b5090565b5b80821115620003d95760008155600101620003de565b610ec480620004046000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806348ea30da116100a2578063902d55a511610071578063902d55a51461035d57806395d89b4114610365578063a457c2d71461036d578063a9059cbb14610399578063dd62ed3e146103c557610116565b806348ea30da146102bf5780635bb9058b146102e557806370a082311461030b57806379cc67901461033157610116565b80632e0f2625116100e95780632e0f262514610228578063313ce56714610246578063395093511461024e57806342966c681461027a57806348422faa1461029957610116565b806306fdde031461011b578063095ea7b31461019857806318160ddd146101d857806323b872dd146101f2575b600080fd5b6101236103f3565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015d578181015183820152602001610145565b50505050905090810190601f16801561018a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c4600480360360408110156101ae57600080fd5b506001600160a01b038135169060200135610489565b604080519115158252519081900360200190f35b6101e06104a6565b60408051918252519081900360200190f35b6101c46004803603606081101561020857600080fd5b506001600160a01b038135811691602081013590911690604001356104ac565b610230610533565b6040805160ff9092168252519081900360200190f35b610230610538565b6101c46004803603604081101561026457600080fd5b506001600160a01b038135169060200135610541565b6102976004803603602081101561029057600080fd5b503561058f565b005b6101c4600480360360208110156102af57600080fd5b50356001600160a01b03166105a3565b610297600480360360208110156102d557600080fd5b50356001600160a01b03166105b8565b610297600480360360208110156102fb57600080fd5b50356001600160a01b03166105da565b6101e06004803603602081101561032157600080fd5b50356001600160a01b03166105fe565b6102976004803603604081101561034757600080fd5b506001600160a01b038135169060200135610619565b6101e0610673565b61012361067e565b6101c46004803603604081101561038357600080fd5b506001600160a01b0381351690602001356106df565b6101c4600480360360408110156103af57600080fd5b506001600160a01b038135169060200135610747565b6101e0600480360360408110156103db57600080fd5b506001600160a01b038135811691602001351661075b565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561047f5780601f106104545761010080835404028352916020019161047f565b820191906000526020600020905b81548152906001019060200180831161046257829003601f168201915b5050505050905090565b600061049d610496610849565b848461084d565b50600192915050565b60025490565b60006104b9848484610939565b610529846104c5610849565b61052485604051806060016040528060288152602001610db4602891396001600160a01b038a16600090815260016020526040812090610503610849565b6001600160a01b031681526020810191909152604001600020549190610a94565b61084d565b5060019392505050565b600681565b60055460ff1690565b600061049d61054e610849565b84610524856001600061055f610849565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610786565b6105a061059a610849565b82610b2b565b50565b60066020526000908152604090205460ff1681565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6001600160a01b031660009081526020819052604090205490565b600061065082604051806060016040528060248152602001610ddc6024913961064986610644610849565b61075b565b9190610a94565b90506106648361065e610849565b8361084d565b61066e8383610b2b565b505050565b66038d7ea4c6800081565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561047f5780601f106104545761010080835404028352916020019161047f565b600061049d6106ec610849565b8461052485604051806060016040528060258152602001610e6a6025913960016000610716610849565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610a94565b600061049d610754610849565b8484610939565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6000828201838110156107e0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6107f283838361066e565b6001600160a01b03821660009081526006602052604090205460ff161561066e576040805162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b604482015290519081900360640190fd5b3390565b6001600160a01b0383166108925760405162461bcd60e51b8152600401808060200182810382526024815260200180610e466024913960400191505060405180910390fd5b6001600160a01b0382166108d75760405162461bcd60e51b8152600401808060200182810382526022815260200180610d6c6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661097e5760405162461bcd60e51b8152600401808060200182810382526025815260200180610e216025913960400191505060405180910390fd5b6001600160a01b0382166109c35760405162461bcd60e51b8152600401808060200182810382526023815260200180610d276023913960400191505060405180910390fd5b6109ce838383610c27565b610a0b81604051806060016040528060268152602001610d8e602691396001600160a01b0386166000908152602081905260409020549190610a94565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610a3a9082610786565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610b235760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ae8578181015183820152602001610ad0565b50505050905090810190601f168015610b155780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038216610b705760405162461bcd60e51b8152600401808060200182810382526021815260200180610e006021913960400191505060405180910390fd5b610b7c82600083610c27565b610bb981604051806060016040528060228152602001610d4a602291396001600160a01b0385166000908152602081905260409020549190610a94565b6001600160a01b038316600090815260208190526040902055600254610bdf9082610cc9565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b610c328383836107e7565b6001600160a01b03831615801590610c5757506007546001600160a01b038481169116145b1561066e57600760009054906101000a90046001600160a01b03166001600160a01b03166379c4985c6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610cac57600080fd5b505af1158015610cc0573d6000803e3d6000fd5b50505050505050565b600082821115610d20576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209e84d153ea50b7147abd523e61f4821b8d921e3c1a3502c7d44309bb4405490e64736f6c634300060c0033";

export class TrustReentrant__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TrustReentrant> {
    return super.deploy(overrides || {}) as Promise<TrustReentrant>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TrustReentrant {
    return super.attach(address) as TrustReentrant;
  }
  connect(signer: Signer): TrustReentrant__factory {
    return super.connect(signer) as TrustReentrant__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrustReentrantInterface {
    return new utils.Interface(_abi) as TrustReentrantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrustReentrant {
    return new Contract(address, _abi, signerOrProvider) as TrustReentrant;
  }
}