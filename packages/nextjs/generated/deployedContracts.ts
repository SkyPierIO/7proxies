const contracts = {
  5: [
    {
      chainId: "5",
      name: "goerli",
      contracts: {
        YourContract: {
          address: "0x4540a8E4f4Ce272e24c6Af5f6b51008b7C8beAE8",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "host",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
              ],
              name: "HostRegistered",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "host",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
              ],
              name: "HostUnregistered",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "host",
                  type: "address",
                },
              ],
              name: "getHost",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "nodeId",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "balance",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "active",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "users",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct YourContract.NodeInfo",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
              ],
              name: "registerAsHost",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
              ],
              name: "unregisterAsHost",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "host",
                  type: "address",
                },
              ],
              name: "useHost",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "host",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
              ],
              name: "HostRegistered",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "host",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
              ],
              name: "HostUnregistered",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "host",
                  type: "address",
                },
              ],
              name: "getHost",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "nodeId",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "balance",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "active",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "users",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct YourContract.NodeInfo",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
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
              name: "hostsToInfo",
              outputs: [
                {
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "users",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
              ],
              name: "registerAsHost",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "nodeId",
                  type: "string",
                },
              ],
              name: "unregisterAsHost",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "host",
                  type: "address",
                },
              ],
              name: "useHost",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
