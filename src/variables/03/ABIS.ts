export const ABI_COINFLIP_OG = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "consecutiveWins",
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
        internalType: "bool",
        name: "_guess",
        type: "bool",
      },
    ],
    name: "flip",
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

export const ABI_COINFLIP_ATTACK = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_victim",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "flip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
