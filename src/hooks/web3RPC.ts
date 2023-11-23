import type { IProvider } from '@web3auth/base';
import _web3 from 'web3';

export default class EthereumRpc {
  private provider: IProvider;

  constructor(provider: IProvider) {
    this.provider = provider;
  }

  async getAccounts(): Promise<string[]> {
    try {
      const web3 = new _web3(this.provider as any);

      // Get user's Ethereum public address
      const address = await web3.eth.getAccounts();

      return address;
    } catch (error) {
      console.error(error);
      throw new Error('Error reading accounts');
    }
  }

  async getBalance(): Promise<string> {
    try {
      const web3 = new _web3(this.provider as any);

      // Get user's Ethereum public address
      const address = (await web3.eth.getAccounts())[0];

      // Get user's balance in ether
      const balance = web3.utils.fromWei(
        await web3.eth.getBalance(address), // Balance is in wei
        'ether'
      );

      return balance;
    } catch (error) {
      return error as string;
    }
  }

  async sendTransaction(destination: string): Promise<any> {
    try {
      const web3 = new _web3(this.provider as any);

      // Get user's Ethereum public address
      const fromAddress = (await web3.eth.getAccounts())[0];

      const amount = web3.utils.toWei('0.001', 'ether'); // Convert 1 ether to wei

      // Submit transaction to the blockchain and wait for it to be mined
      const receipt = await web3.eth.sendTransaction({
        from: fromAddress,
        to: destination,
        value: amount
        // maxPriorityFeePerGas: '5000000000', // Max priority fee per gas
        // maxFeePerGas: '6000000000000' // Max fee per gas
      });

      return receipt;
    } catch (error) {
      return error as string;
    }
  }

  async signMessage(originalMessage: string) {
    try {
      const web3 = new _web3(this.provider as any);

      // Get user's Ethereum public address
      const fromAddress = (await web3.eth.getAccounts())[0];

      // Sign the message
      const signedMessage = await web3.eth.personal.sign(
        originalMessage,
        fromAddress,
        await this.getPrivateKey()
      );

      return signedMessage;
    } catch (error) {
      return error as string;
    }
  }

  async readContract(contractAddress: string, abi: object[], params: any) {
    try {
      const web3 = new _web3(this.provider as any);

      const contract = new web3.eth.Contract(
        JSON.parse(JSON.stringify(abi)),
        contractAddress
      );

      const message = await contract.methods.tokenURI(params).call();
      return message;
    } catch (error) {
      return error as string;
    }
  }

  async getPrivateKey(): Promise<any> {
    try {
      const privateKey = await this.provider.request({
        method: 'eth_private_key'
      });

      return privateKey;
    } catch (error) {
      return error as string;
    }
  }
}
