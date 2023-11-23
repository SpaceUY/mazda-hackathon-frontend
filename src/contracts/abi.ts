// eslint-disable-next-line import/no-anonymous-default-export
const nftMazdaABI = [
  {
    type: 'constructor',
    stateMutability: 'nonpayable',
    inputs: [{ type: 'address', name: 'initialOwner', internalType: 'address' }]
  },
  {
    type: 'error',
    name: 'ERC721IncorrectOwner',
    inputs: [
      { type: 'address', name: 'sender', internalType: 'address' },
      { type: 'uint256', name: 'tokenId', internalType: 'uint256' },
      { type: 'address', name: 'owner', internalType: 'address' }
    ]
  },
  {
    type: 'error',
    name: 'ERC721InsufficientApproval',
    inputs: [
      { type: 'address', name: 'operator', internalType: 'address' },
      { type: 'uint256', name: 'tokenId', internalType: 'uint256' }
    ]
  },
  {
    type: 'error',
    name: 'ERC721InvalidApprover',
    inputs: [{ type: 'address', name: 'approver', internalType: 'address' }]
  },
  {
    type: 'error',
    name: 'ERC721InvalidOperator',
    inputs: [{ type: 'address', name: 'operator', internalType: 'address' }]
  },
  {
    type: 'error',
    name: 'ERC721InvalidOwner',
    inputs: [{ type: 'address', name: 'owner', internalType: 'address' }]
  },
  {
    type: 'error',
    name: 'ERC721InvalidReceiver',
    inputs: [{ type: 'address', name: 'receiver', internalType: 'address' }]
  },
  {
    type: 'error',
    name: 'ERC721InvalidSender',
    inputs: [{ type: 'address', name: 'sender', internalType: 'address' }]
  },
  {
    type: 'error',
    name: 'ERC721NonexistentToken',
    inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
  },
  {
    type: 'error',
    name: 'OwnableInvalidOwner',
    inputs: [{ type: 'address', name: 'owner', internalType: 'address' }]
  },
  {
    type: 'error',
    name: 'OwnableUnauthorizedAccount',
    inputs: [{ type: 'address', name: 'account', internalType: 'address' }]
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
        indexed: true
      },
      {
        type: 'address',
        name: 'approved',
        internalType: 'address',
        indexed: true
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
        indexed: true
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'ApprovalForAll',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
        indexed: true
      },
      {
        type: 'address',
        name: 'operator',
        internalType: 'address',
        indexed: true
      },
      { type: 'bool', name: 'approved', internalType: 'bool', indexed: false }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'BatchMetadataUpdate',
    inputs: [
      {
        type: 'uint256',
        name: '_fromTokenId',
        internalType: 'uint256',
        indexed: false
      },
      {
        type: 'uint256',
        name: '_toTokenId',
        internalType: 'uint256',
        indexed: false
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'MetadataUpdate',
    inputs: [
      {
        type: 'uint256',
        name: '_tokenId',
        internalType: 'uint256',
        indexed: false
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        type: 'address',
        name: 'previousOwner',
        internalType: 'address',
        indexed: true
      },
      {
        type: 'address',
        name: 'newOwner',
        internalType: 'address',
        indexed: true
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      { type: 'address', name: 'from', internalType: 'address', indexed: true },
      { type: 'address', name: 'to', internalType: 'address', indexed: true },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
        indexed: true
      }
    ],
    anonymous: false
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'approve',
    inputs: [
      { type: 'address', name: 'to', internalType: 'address' },
      { type: 'uint256', name: 'tokenId', internalType: 'uint256' }
    ]
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'balanceOf',
    inputs: [{ type: 'address', name: 'owner', internalType: 'address' }]
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'getApproved',
    inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'isApprovedForAll',
    inputs: [
      { type: 'address', name: 'owner', internalType: 'address' },
      { type: 'address', name: 'operator', internalType: 'address' }
    ]
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'name',
    inputs: []
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'owner',
    inputs: []
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'ownerOf',
    inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'registerNewVehicle',
    inputs: [
      { type: 'address', name: 'vehicleOwner', internalType: 'address' },
      { type: 'string', name: 'vin', internalType: 'string' },
      { type: 'string', name: 'tokenURI', internalType: 'string' }
    ]
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'renounceOwnership',
    inputs: []
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'safeTransferFrom',
    inputs: [
      { type: 'address', name: 'from', internalType: 'address' },
      { type: 'address', name: 'to', internalType: 'address' },
      { type: 'uint256', name: 'tokenId', internalType: 'uint256' }
    ]
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'safeTransferFrom',
    inputs: [
      { type: 'address', name: 'from', internalType: 'address' },
      { type: 'address', name: 'to', internalType: 'address' },
      { type: 'uint256', name: 'tokenId', internalType: 'uint256' },
      { type: 'bytes', name: 'data', internalType: 'bytes' }
    ]
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setApprovalForAll',
    inputs: [
      { type: 'address', name: 'operator', internalType: 'address' },
      { type: 'bool', name: 'approved', internalType: 'bool' }
    ]
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'supportsInterface',
    inputs: [{ type: 'bytes4', name: 'interfaceId', internalType: 'bytes4' }]
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'symbol',
    inputs: []
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'string', name: '', internalType: 'string' }],
    name: 'tokenURI',
    inputs: [{ type: 'uint256', name: 'tokenId', internalType: 'uint256' }]
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferFrom',
    inputs: [
      { type: 'address', name: 'from', internalType: 'address' },
      { type: 'address', name: 'to', internalType: 'address' },
      { type: 'uint256', name: 'tokenId', internalType: 'uint256' }
    ]
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferOwnership',
    inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }]
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'transferVehicleOwnership',
    inputs: [
      { type: 'address', name: 'newOwner', internalType: 'address' },
      { type: 'string', name: 'vin', internalType: 'string' }
    ]
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'updateTokenURI',
    inputs: [
      { type: 'string', name: 'vin', internalType: 'string' },
      { type: 'string', name: 'tokenURI', internalType: 'string' }
    ]
  }
];
export default nftMazdaABI;
