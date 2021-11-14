/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancerSafeMathMock,
  BalancerSafeMathMockInterface,
} from "../BalancerSafeMathMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "badd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "baverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "bdiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "bmax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "bmin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "bmod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "bmul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "bsub",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106de806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638c051bf31161005b5780638c051bf31461012b5780638f73b80c1461014e578063a0a034b414610171578063dd6d85c41461019457610088565b80630b71b95c1461008d5780633cf3c7d4146100c25780634b293a61146100e55780637673eb1114610108575b600080fd5b6100b0600480360360408110156100a357600080fd5b50803590602001356101b7565b60408051918252519081900360200190f35b6100b0600480360360408110156100d857600080fd5b50803590602001356101cc565b6100b0600480360360408110156100fb57600080fd5b50803590602001356101d8565b6100b06004803603604081101561011e57600080fd5b50803590602001356101e4565b6100b06004803603604081101561014157600080fd5b50803590602001356101f0565b6100b06004803603604081101561016457600080fd5b50803590602001356101fc565b6100b06004803603604081101561018757600080fd5b5080359060200135610208565b6100b0600480360360408110156101aa57600080fd5b5080359060200135610214565b60006101c38383610220565b90505b92915050565b60006101c38383610294565b60006101c3838361031c565b60006101c3838361039b565b60006101c38383610524565b60006101c38383610638565b60006101c3838361064e565b60006101c3838361065e565b6000828201838110156101c357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4552525f4144445f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b60008060006102a38585610683565b91509150801561031457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4552525f5355425f554e444552464c4f57000000000000000000000000000000604482015290519081900360640190fd5b509392505050565b60008161038a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4552525f4d4f44554c4f5f42595f5a45524f0000000000000000000000000000604482015290519081900360640190fd5b81838161039357fe5b069392505050565b60008161040957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4552525f4449565f5a45524f0000000000000000000000000000000000000000604482015290519081900360640190fd5b82610416575060006101c6565b670de0b6b3a76400008381029084828161042c57fe5b041461049957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4552525f4449565f494e5445524e414c00000000000000000000000000000000604482015290519081900360640190fd5b6002830481018181101561050e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4552525f4449565f494e5445524e414c00000000000000000000000000000000604482015290519081900360640190fd5b600084828161051957fe5b049695505050505050565b600082610533575060006101c6565b8282028284828161054057fe5b04146105ad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4552525f4d554c5f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b6706f05b59d3b2000081018181101561062757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4552525f4d554c5f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b6000670de0b6b3a764000082610519565b600081831061064757816101c3565b5090919050565b60008183101561064757816101c3565b6000600280830660028506018161067157fe5b04600283046002850401019392505050565b60008083831161069957505080820360006106a1565b505081810360015b925092905056fea26469706673582212200a6fd38a51802374627f39c4467fc19bfbc4879201432ad41a2b17eb042abcf064736f6c634300060c0033";

export class BalancerSafeMathMock__factory extends ContractFactory {
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
  ): Promise<BalancerSafeMathMock> {
    return super.deploy(overrides || {}) as Promise<BalancerSafeMathMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalancerSafeMathMock {
    return super.attach(address) as BalancerSafeMathMock;
  }
  connect(signer: Signer): BalancerSafeMathMock__factory {
    return super.connect(signer) as BalancerSafeMathMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerSafeMathMockInterface {
    return new utils.Interface(_abi) as BalancerSafeMathMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerSafeMathMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BalancerSafeMathMock;
  }
}