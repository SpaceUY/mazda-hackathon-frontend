// eslint-disable-next-line import/no-anonymous-default-export
const someAbi = [
  {
    inputs: [{ internalType: 'string', name: 'initMessage', type: 'string' }],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'message',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'newMessage', type: 'string' }],
    name: 'update',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];
export default someAbi;
