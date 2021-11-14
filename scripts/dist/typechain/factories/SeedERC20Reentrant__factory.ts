/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SeedERC20Reentrant,
  SeedERC20ReentrantInterface,
} from "../SeedERC20Reentrant";

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
        internalType: "contract SeedERC20",
        name: "seedERC20Contract_",
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
    name: "methodTarget",
    outputs: [
      {
        internalType: "enum SeedERC20Reentrant.Method",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "enum SeedERC20Reentrant.Method",
        name: "methodTarget_",
        type: "uint8",
      },
    ],
    name: "setMethodTarget",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a55534420436c617373696360a81b602080830191825283518085019094526005845264555344434360d81b90840152815191929162000062916003916200049e565b508051620000789060049060208401906200049e565b50506005805460ff1916601217905550620000946006620000ad565b620000a73366038d7ea4c68000620000c3565b6200053a565b6005805460ff191660ff92909216919091179055565b6001600160a01b0382166200011f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200012d60008383620001d2565b6200014981600254620003cc60201b6200081c1790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200017c9183906200081c620003cc821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b620001ea8383836200042e60201b6200087d1760201c565b6001600754600160a01b900460ff1660038111156200020557fe5b1480156200022057506007546001600160a01b038381169116145b1562000299576007546040805163059a803960e21b81526000600482018190526001602483015291516001600160a01b039093169263166a00e49260448084019391929182900301818387803b1580156200027a57600080fd5b505af11580156200028f573d6000803e3d6000fd5b50505050620003c7565b6002600754600160a01b900460ff166003811115620002b457fe5b148015620002cf57506007546001600160a01b038481169116145b156200032357600754604080516304a4484b60e11b81526001600482015290516001600160a01b039092169163094890969160248082019260009290919082900301818387803b1580156200027a57600080fd5b6003600754600160a01b900460ff1660038111156200033e57fe5b1480156200035957506007546001600160a01b038481169116145b15620003c7576007546040805163db006a7560e01b81526001600482015290516001600160a01b039092169163db006a759160248082019260009290919082900301818387803b158015620003ad57600080fd5b505af1158015620003c2573d6000803e3d6000fd5b505050505b505050565b60008282018381101562000427576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b62000446838383620003c760201b620006cd1760201c565b6001600160a01b03821660009081526006602052604090205460ff1615620003c7576040805162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b604482015290519081900360640190fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004e157805160ff191683800117855562000511565b8280016001018555821562000511579182015b8281111562000511578251825591602001919060010190620004f4565b506200051f92915062000523565b5090565b5b808211156200051f576000815560010162000524565b611095806200054a6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80635bb9058b116100ad578063902d55a511610071578063902d55a5146103bc57806395d89b41146103c4578063a457c2d7146103cc578063a9059cbb146103f8578063dd62ed3e146104245761012c565b80635bb9058b146102fb57806370a082311461032157806379cc6790146103475780637cc4129a1461037357806385b75f5f1461039c5761012c565b8063313ce567116100f4578063313ce5671461025c578063395093511461026457806342966c681461029057806348422faa146102af57806348ea30da146102d55761012c565b806306fdde0314610131578063095ea7b3146101ae57806318160ddd146101ee57806323b872dd146102085780632e0f26251461023e575b600080fd5b610139610452565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017357818101518382015260200161015b565b50505050905090810190601f1680156101a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101da600480360360408110156101c457600080fd5b506001600160a01b0381351690602001356104e8565b604080519115158252519081900360200190f35b6101f6610505565b60408051918252519081900360200190f35b6101da6004803603606081101561021e57600080fd5b506001600160a01b0381358116916020810135909116906040013561050b565b610246610592565b6040805160ff9092168252519081900360200190f35b610246610597565b6101da6004803603604081101561027a57600080fd5b506001600160a01b0381351690602001356105a0565b6102ad600480360360208110156102a657600080fd5b50356105ee565b005b6101da600480360360208110156102c557600080fd5b50356001600160a01b0316610602565b6102ad600480360360208110156102eb57600080fd5b50356001600160a01b0316610617565b6102ad6004803603602081101561031157600080fd5b50356001600160a01b0316610639565b6101f66004803603602081101561033757600080fd5b50356001600160a01b031661065d565b6102ad6004803603604081101561035d57600080fd5b506001600160a01b038135169060200135610678565b61037b6106d2565b6040518082600381111561038b57fe5b815260200191505060405180910390f35b6102ad600480360360208110156103b257600080fd5b503560ff166106e2565b6101f6610709565b610139610714565b6101da600480360360408110156103e257600080fd5b506001600160a01b038135169060200135610775565b6101da6004803603604081101561040e57600080fd5b506001600160a01b0381351690602001356107dd565b6101f66004803603604081101561043a57600080fd5b506001600160a01b03813581169160200135166107f1565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104de5780601f106104b3576101008083540402835291602001916104de565b820191906000526020600020905b8154815290600101906020018083116104c157829003601f168201915b5050505050905090565b60006104fc6104f56108df565b84846108e3565b50600192915050565b60025490565b60006105188484846109cf565b610588846105246108df565b61058385604051806060016040528060288152602001610f85602891396001600160a01b038a166000908152600160205260408120906105626108df565b6001600160a01b031681526020810191909152604001600020549190610b2a565b6108e3565b5060019392505050565b600681565b60055460ff1690565b60006104fc6105ad6108df565b8461058385600160006105be6108df565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061081c565b6105ff6105f96108df565b82610bc1565b50565b60066020526000908152604090205460ff1681565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6001600160a01b031660009081526020819052604090205490565b60006106af82604051806060016040528060248152602001610fad602491396106a8866106a36108df565b6107f1565b9190610b2a565b90506106c3836106bd6108df565b836108e3565b6106cd8383610bc1565b505050565b600754600160a01b900460ff1681565b6007805482919060ff60a01b1916600160a01b83600381111561070157fe5b021790555050565b66038d7ea4c6800081565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104de5780601f106104b3576101008083540402835291602001916104de565b60006104fc6107826108df565b846105838560405180606001604052806025815260200161103b60259139600160006107ac6108df565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610b2a565b60006104fc6107ea6108df565b84846109cf565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600082820183811015610876576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6108888383836106cd565b6001600160a01b03821660009081526006602052604090205460ff16156106cd576040805162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b604482015290519081900360640190fd5b3390565b6001600160a01b0383166109285760405162461bcd60e51b81526004018080602001828103825260248152602001806110176024913960400191505060405180910390fd5b6001600160a01b03821661096d5760405162461bcd60e51b8152600401808060200182810382526022815260200180610f3d6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610a145760405162461bcd60e51b8152600401808060200182810382526025815260200180610ff26025913960400191505060405180910390fd5b6001600160a01b038216610a595760405162461bcd60e51b8152600401808060200182810382526023815260200180610ef86023913960400191505060405180910390fd5b610a64838383610cbd565b610aa181604051806060016040528060268152602001610f5f602691396001600160a01b0386166000908152602081905260409020549190610b2a565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610ad0908261081c565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610bb95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b7e578181015183820152602001610b66565b50505050905090810190601f168015610bab5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038216610c065760405162461bcd60e51b8152600401808060200182810382526021815260200180610fd16021913960400191505060405180910390fd5b610c1282600083610cbd565b610c4f81604051806060016040528060228152602001610f1b602291396001600160a01b0385166000908152602081905260409020549190610b2a565b6001600160a01b038316600090815260208190526040902055600254610c759082610e9a565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b610cc883838361087d565b6001600754600160a01b900460ff166003811115610ce257fe5b148015610cfc57506007546001600160a01b038381169116145b15610d71576007546040805163059a803960e21b81526000600482018190526001602483015291516001600160a01b039093169263166a00e49260448084019391929182900301818387803b158015610d5457600080fd5b505af1158015610d68573d6000803e3d6000fd5b505050506106cd565b6002600754600160a01b900460ff166003811115610d8b57fe5b148015610da557506007546001600160a01b038481169116145b15610df757600754604080516304a4484b60e11b81526001600482015290516001600160a01b039092169163094890969160248082019260009290919082900301818387803b158015610d5457600080fd5b6003600754600160a01b900460ff166003811115610e1157fe5b148015610e2b57506007546001600160a01b038481169116145b156106cd576007546040805163db006a7560e01b81526001600482015290516001600160a01b039092169163db006a759160248082019260009290919082900301818387803b158015610e7d57600080fd5b505af1158015610e91573d6000803e3d6000fd5b50505050505050565b600082821115610ef1576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212205b72fc0163fcbfc607412141fbfe595d871ff87b978d5e197d82261c99f219fa64736f6c634300060c0033";

export class SeedERC20Reentrant__factory extends ContractFactory {
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
  ): Promise<SeedERC20Reentrant> {
    return super.deploy(overrides || {}) as Promise<SeedERC20Reentrant>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SeedERC20Reentrant {
    return super.attach(address) as SeedERC20Reentrant;
  }
  connect(signer: Signer): SeedERC20Reentrant__factory {
    return super.connect(signer) as SeedERC20Reentrant__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SeedERC20ReentrantInterface {
    return new utils.Interface(_abi) as SeedERC20ReentrantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SeedERC20Reentrant {
    return new Contract(address, _abi, signerOrProvider) as SeedERC20Reentrant;
  }
}