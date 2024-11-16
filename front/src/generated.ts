import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlAbi = [
  {
    type: "function",
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "callerConfirmation", internalType: "address", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "previousAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "newAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "RoleAdminChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "RoleGranted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "RoleRevoked",
  },
  { type: "error", inputs: [], name: "AccessControlBadConfirmation" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "neededRole", internalType: "bytes32", type: "bytes32" },
    ],
    name: "AccessControlUnauthorizedAccount",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  {
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "callerConfirmation", internalType: "address", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "previousAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "newAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "RoleAdminChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "RoleGranted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "RoleRevoked",
  },
  { type: "error", inputs: [], name: "AccessControlBadConfirmation" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "neededRole", internalType: "bytes32", type: "bytes32" },
    ],
    name: "AccessControlUnauthorizedAccount",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC1155InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC1155InvalidApprover",
  },
  {
    type: "error",
    inputs: [
      { name: "idsLength", internalType: "uint256", type: "uint256" },
      { name: "valuesLength", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC1155InvalidArrayLength",
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC1155InvalidOperator",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC1155InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC1155InvalidSender",
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC1155MissingApprovalForAll",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC721IncorrectOwner",
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC721InsufficientApproval",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC721InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC721InvalidOperator",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "ERC721InvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC721InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC721InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ERC721NonexistentToken",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "returnData", internalType: "bytes[]", type: "bytes[]" },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call3[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "allowFailure", internalType: "bool", type: "bool" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate3",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call3Value[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "allowFailure", internalType: "bool", type: "bool" },
          { name: "value", internalType: "uint256", type: "uint256" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate3Value",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "blockAndAggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "blockHash", internalType: "bytes32", type: "bytes32" },
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [],
    name: "getBasefee",
    outputs: [{ name: "basefee", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "blockNumber", internalType: "uint256", type: "uint256" }],
    name: "getBlockHash",
    outputs: [{ name: "blockHash", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getChainId",
    outputs: [{ name: "chainid", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [{ name: "coinbase", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [{ name: "difficulty", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [{ name: "gaslimit", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [{ name: "timestamp", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "addr", internalType: "address", type: "address" }],
    name: "getEthBalance",
    outputs: [{ name: "balance", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getLastBlockHash",
    outputs: [{ name: "blockHash", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "requireSuccess", internalType: "bool", type: "bool" },
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "tryAggregate",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "requireSuccess", internalType: "bool", type: "bool" },
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "blockHash", internalType: "bytes32", type: "bytes32" },
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TradingTournament
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tradingTournamentAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "GPv2Settlement_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_stablecoin", internalType: "contract IERC20", type: "address" },
    ],
    name: "addStablecoin",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_tournamentId", internalType: "uint256", type: "uint256" },
    ],
    name: "claimPrize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_entryFee", internalType: "uint256", type: "uint256" },
      { name: "_maxBudget", internalType: "uint256", type: "uint256" },
      { name: "_maxPlayer", internalType: "uint256", type: "uint256" },
      { name: "_startTime", internalType: "uint256", type: "uint256" },
      { name: "_endTime", internalType: "uint256", type: "uint256" },
      { name: "_stablecoin", internalType: "contract IERC20", type: "address" },
    ],
    name: "createTournament",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_tournamentId", internalType: "uint256", type: "uint256" },
      { name: "_winner", internalType: "address", type: "address" },
    ],
    name: "declareWinner",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getAllTournaments",
    outputs: [
      {
        name: "",
        internalType: "struct TradingTournament.Tournament[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "name", internalType: "string", type: "string" },
          { name: "entryFee", internalType: "uint256", type: "uint256" },
          { name: "maxBudget", internalType: "uint256", type: "uint256" },
          { name: "maxPlayer", internalType: "uint256", type: "uint256" },
          { name: "startTime", internalType: "uint256", type: "uint256" },
          { name: "endTime", internalType: "uint256", type: "uint256" },
          {
            name: "players",
            internalType: "struct TradingTournament.Player[]",
            type: "tuple[]",
            components: [
              { name: "player", internalType: "address", type: "address" },
              { name: "tradeCount", internalType: "uint256", type: "uint256" },
            ],
          },
          { name: "winner", internalType: "address", type: "address" },
          {
            name: "stablecoin",
            internalType: "contract IERC20",
            type: "address",
          },
          { name: "prizePool", internalType: "uint256", type: "uint256" },
          { name: "winnerClaimed", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getAllowedStablecoins",
    outputs: [
      { name: "", internalType: "contract IERC20[]", type: "address[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_tournamentId", internalType: "uint256", type: "uint256" },
    ],
    name: "getPlayerCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "player", internalType: "address", type: "address" }],
    name: "getPlayerTournaments",
    outputs: [{ name: "", internalType: "uint256[]", type: "uint256[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_tournamentId", internalType: "uint256", type: "uint256" },
    ],
    name: "getTournamentById",
    outputs: [
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "name", internalType: "string", type: "string" },
      { name: "entryFee", internalType: "uint256", type: "uint256" },
      { name: "maxBudget", internalType: "uint256", type: "uint256" },
      { name: "maxPlayer", internalType: "uint256", type: "uint256" },
      { name: "startTime", internalType: "uint256", type: "uint256" },
      { name: "endTime", internalType: "uint256", type: "uint256" },
      { name: "players", internalType: "address[]", type: "address[]" },
      { name: "winner", internalType: "address", type: "address" },
      { name: "prizePool", internalType: "uint256", type: "uint256" },
      { name: "winnerClaimed", internalType: "bool", type: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getTournamentIdCounter",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "grantAdminRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "grantGPv2SettlementRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_stablecoin", internalType: "contract IERC20", type: "address" },
    ],
    name: "isStablecoinAllowed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_tournamentId", internalType: "uint256", type: "uint256" },
    ],
    name: "joinTournament",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "callerConfirmation", internalType: "address", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "revokeAdminRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "revokeGPv2SettlementRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_tournamentId", internalType: "uint256", type: "uint256" },
    ],
    name: "trackingSwap",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tournamentId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "player",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "PlayerJoined",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "previousAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "newAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "RoleAdminChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "RoleGranted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "RoleRevoked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "stablecoin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "StablecoinAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tournamentId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "entryFee",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "maxBudget",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "maxPlayer",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "startTime",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "endTime",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "stablecoin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "TournamentCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tournamentId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "winner",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "prize",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "WinnerDeclared",
  },
  { type: "error", inputs: [], name: "AccessControlBadConfirmation" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "neededRole", internalType: "bytes32", type: "bytes32" },
    ],
    name: "AccessControlUnauthorizedAccount",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDP
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usdpAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "initialSupply", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDidy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usDidyAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "initialSupply", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useReadAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: "DEFAULT_ADMIN_ROLE",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: "getRoleAdmin",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlHasRole = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
  functionName: "hasRole",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: "supportsInterface",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWriteAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: accessControlAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: "grantRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: "renounceRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: "revokeRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useSimulateAccessControl = /*#__PURE__*/ createUseSimulateContract(
  { abi: accessControlAbi }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: "grantRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: "renounceRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: "revokeRole",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWatchAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: accessControlAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: "RoleAdminChanged",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: "RoleGranted",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: "RoleRevoked",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: "supportsInterface",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "allowance",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "decimals",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "transfer",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: "transfer" }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useReadIAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: iAccessControlAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlAbi,
    functionName: "getRoleAdmin",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIAccessControlHasRole = /*#__PURE__*/ createUseReadContract(
  { abi: iAccessControlAbi, functionName: "hasRole" }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWriteIAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: iAccessControlAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: "grantRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: "renounceRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: "revokeRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useSimulateIAccessControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: iAccessControlAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: "grantRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: "renounceRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: "revokeRole",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWatchIAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iAccessControlAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: "RoleAdminChanged",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: "RoleGranted",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: "RoleRevoked",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "allowance",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "balanceOf",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "decimals",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "totalSupply",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: "approve",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: "getBasefee" }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: "getBlockHash",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: "getBlockNumber",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: "getChainId" }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: "getCurrentBlockCoinbase",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: "getCurrentBlockDifficulty",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: "getCurrentBlockGasLimit",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: "getCurrentBlockTimestamp",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: "getEthBalance",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: "getLastBlockHash",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: "aggregate",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: "aggregate3",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: "aggregate3Value",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: "blockAndAggregate",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: "tryAggregate",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: "tryBlockAndAggregate",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: "aggregate",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: "aggregate3",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: "aggregate3Value",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: "blockAndAggregate",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: "tryAggregate",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: "tryBlockAndAggregate",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__
 */
export const useReadTradingTournament = /*#__PURE__*/ createUseReadContract({
  abi: tradingTournamentAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"ADMIN_ROLE"`
 */
export const useReadTradingTournamentAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "ADMIN_ROLE",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadTradingTournamentDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "DEFAULT_ADMIN_ROLE",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"GPv2Settlement_ROLE"`
 */
export const useReadTradingTournamentGPv2SettlementRole =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "GPv2Settlement_ROLE",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"getAllTournaments"`
 */
export const useReadTradingTournamentGetAllTournaments =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "getAllTournaments",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"getAllowedStablecoins"`
 */
export const useReadTradingTournamentGetAllowedStablecoins =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "getAllowedStablecoins",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"getPlayerCount"`
 */
export const useReadTradingTournamentGetPlayerCount =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "getPlayerCount",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"getPlayerTournaments"`
 */
export const useReadTradingTournamentGetPlayerTournaments =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "getPlayerTournaments",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadTradingTournamentGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "getRoleAdmin",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"getTournamentById"`
 */
export const useReadTradingTournamentGetTournamentById =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "getTournamentById",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"getTournamentIdCounter"`
 */
export const useReadTradingTournamentGetTournamentIdCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "getTournamentIdCounter",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadTradingTournamentHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "hasRole",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"isStablecoinAllowed"`
 */
export const useReadTradingTournamentIsStablecoinAllowed =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "isStablecoinAllowed",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadTradingTournamentSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: tradingTournamentAbi,
    functionName: "supportsInterface",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__
 */
export const useWriteTradingTournament = /*#__PURE__*/ createUseWriteContract({
  abi: tradingTournamentAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"addStablecoin"`
 */
export const useWriteTradingTournamentAddStablecoin =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "addStablecoin",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"claimPrize"`
 */
export const useWriteTradingTournamentClaimPrize =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "claimPrize",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"createTournament"`
 */
export const useWriteTradingTournamentCreateTournament =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "createTournament",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"declareWinner"`
 */
export const useWriteTradingTournamentDeclareWinner =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "declareWinner",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"grantAdminRole"`
 */
export const useWriteTradingTournamentGrantAdminRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "grantAdminRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"grantGPv2SettlementRole"`
 */
export const useWriteTradingTournamentGrantGPv2SettlementRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "grantGPv2SettlementRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteTradingTournamentGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "grantRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"joinTournament"`
 */
export const useWriteTradingTournamentJoinTournament =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "joinTournament",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteTradingTournamentRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "renounceRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"revokeAdminRole"`
 */
export const useWriteTradingTournamentRevokeAdminRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "revokeAdminRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"revokeGPv2SettlementRole"`
 */
export const useWriteTradingTournamentRevokeGPv2SettlementRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "revokeGPv2SettlementRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteTradingTournamentRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "revokeRole",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"trackingSwap"`
 */
export const useWriteTradingTournamentTrackingSwap =
  /*#__PURE__*/ createUseWriteContract({
    abi: tradingTournamentAbi,
    functionName: "trackingSwap",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__
 */
export const useSimulateTradingTournament =
  /*#__PURE__*/ createUseSimulateContract({ abi: tradingTournamentAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"addStablecoin"`
 */
export const useSimulateTradingTournamentAddStablecoin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "addStablecoin",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"claimPrize"`
 */
export const useSimulateTradingTournamentClaimPrize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "claimPrize",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"createTournament"`
 */
export const useSimulateTradingTournamentCreateTournament =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "createTournament",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"declareWinner"`
 */
export const useSimulateTradingTournamentDeclareWinner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "declareWinner",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"grantAdminRole"`
 */
export const useSimulateTradingTournamentGrantAdminRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "grantAdminRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"grantGPv2SettlementRole"`
 */
export const useSimulateTradingTournamentGrantGPv2SettlementRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "grantGPv2SettlementRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateTradingTournamentGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "grantRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"joinTournament"`
 */
export const useSimulateTradingTournamentJoinTournament =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "joinTournament",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateTradingTournamentRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "renounceRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"revokeAdminRole"`
 */
export const useSimulateTradingTournamentRevokeAdminRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "revokeAdminRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"revokeGPv2SettlementRole"`
 */
export const useSimulateTradingTournamentRevokeGPv2SettlementRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "revokeGPv2SettlementRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateTradingTournamentRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "revokeRole",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tradingTournamentAbi}__ and `functionName` set to `"trackingSwap"`
 */
export const useSimulateTradingTournamentTrackingSwap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tradingTournamentAbi,
    functionName: "trackingSwap",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tradingTournamentAbi}__
 */
export const useWatchTradingTournamentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: tradingTournamentAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tradingTournamentAbi}__ and `eventName` set to `"PlayerJoined"`
 */
export const useWatchTradingTournamentPlayerJoinedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tradingTournamentAbi,
    eventName: "PlayerJoined",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tradingTournamentAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchTradingTournamentRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tradingTournamentAbi,
    eventName: "RoleAdminChanged",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tradingTournamentAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchTradingTournamentRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tradingTournamentAbi,
    eventName: "RoleGranted",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tradingTournamentAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchTradingTournamentRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tradingTournamentAbi,
    eventName: "RoleRevoked",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tradingTournamentAbi}__ and `eventName` set to `"StablecoinAdded"`
 */
export const useWatchTradingTournamentStablecoinAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tradingTournamentAbi,
    eventName: "StablecoinAdded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tradingTournamentAbi}__ and `eventName` set to `"TournamentCreated"`
 */
export const useWatchTradingTournamentTournamentCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tradingTournamentAbi,
    eventName: "TournamentCreated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tradingTournamentAbi}__ and `eventName` set to `"WinnerDeclared"`
 */
export const useWatchTradingTournamentWinnerDeclaredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tradingTournamentAbi,
    eventName: "WinnerDeclared",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdpAbi}__
 */
export const useReadUsdp = /*#__PURE__*/ createUseReadContract({
  abi: usdpAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadUsdpAllowance = /*#__PURE__*/ createUseReadContract({
  abi: usdpAbi,
  functionName: "allowance",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadUsdpBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: usdpAbi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadUsdpDecimals = /*#__PURE__*/ createUseReadContract({
  abi: usdpAbi,
  functionName: "decimals",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"name"`
 */
export const useReadUsdpName = /*#__PURE__*/ createUseReadContract({
  abi: usdpAbi,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadUsdpSymbol = /*#__PURE__*/ createUseReadContract({
  abi: usdpAbi,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadUsdpTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: usdpAbi,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdpAbi}__
 */
export const useWriteUsdp = /*#__PURE__*/ createUseWriteContract({
  abi: usdpAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteUsdpApprove = /*#__PURE__*/ createUseWriteContract({
  abi: usdpAbi,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteUsdpTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: usdpAbi,
  functionName: "transfer",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteUsdpTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: usdpAbi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdpAbi}__
 */
export const useSimulateUsdp = /*#__PURE__*/ createUseSimulateContract({
  abi: usdpAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateUsdpApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: usdpAbi,
  functionName: "approve",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateUsdpTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: usdpAbi,
  functionName: "transfer",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdpAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateUsdpTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdpAbi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdpAbi}__
 */
export const useWatchUsdpEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: usdpAbi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdpAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchUsdpApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdpAbi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdpAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchUsdpTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdpAbi,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDidyAbi}__
 */
export const useReadUsDidy = /*#__PURE__*/ createUseReadContract({
  abi: usDidyAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadUsDidyAllowance = /*#__PURE__*/ createUseReadContract({
  abi: usDidyAbi,
  functionName: "allowance",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadUsDidyBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: usDidyAbi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadUsDidyDecimals = /*#__PURE__*/ createUseReadContract({
  abi: usDidyAbi,
  functionName: "decimals",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"name"`
 */
export const useReadUsDidyName = /*#__PURE__*/ createUseReadContract({
  abi: usDidyAbi,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadUsDidySymbol = /*#__PURE__*/ createUseReadContract({
  abi: usDidyAbi,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadUsDidyTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: usDidyAbi,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDidyAbi}__
 */
export const useWriteUsDidy = /*#__PURE__*/ createUseWriteContract({
  abi: usDidyAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteUsDidyApprove = /*#__PURE__*/ createUseWriteContract({
  abi: usDidyAbi,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteUsDidyTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: usDidyAbi,
  functionName: "transfer",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteUsDidyTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: usDidyAbi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDidyAbi}__
 */
export const useSimulateUsDidy = /*#__PURE__*/ createUseSimulateContract({
  abi: usDidyAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateUsDidyApprove = /*#__PURE__*/ createUseSimulateContract(
  { abi: usDidyAbi, functionName: "approve" }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateUsDidyTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDidyAbi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usDidyAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateUsDidyTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usDidyAbi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDidyAbi}__
 */
export const useWatchUsDidyEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: usDidyAbi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDidyAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchUsDidyApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usDidyAbi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usDidyAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchUsDidyTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usDidyAbi,
    eventName: "Transfer",
  });
