// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CHAIN_NAMESPACES, IProvider } from '@web3auth/base';
// import { MetamaskAdapter } from '@web3auth/metamask-adapter';
import { Web3Auth } from '@web3auth/modal';
import {
  OPENLOGIN_NETWORK,
  OpenloginAdapter
} from '@web3auth/openlogin-adapter';
import { TorusWalletAdapter } from '@web3auth/torus-evm-adapter';
import { TorusWalletConnectorPlugin } from '@web3auth/torus-wallet-connector-plugin';
import {
  WalletConnectV2Adapter,
  getWalletConnectV2Settings
} from '@web3auth/wallet-connect-v2-adapter';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { OpenloginUserInfo } from 'types/web3auth.type';

import RPC from './web3RPC';

const clientId = process.env.REACT_APP_WEB3AUTH_CLIENT_ID ?? '';

type Web3auth = {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  loggedIn: boolean;
  provider: IProvider | null;
  torusPlugin: TorusWalletConnectorPlugin | null;
  getIdToken: () => Promise<string | undefined>;
  getUserInfo: () => Promise<Partial<OpenloginUserInfo> | undefined>;
  getBalance: () => Promise<string | undefined>;
  buyCoins: (address: string) => Promise<void>;
  getPrivateKey: () => Promise<string | undefined>;
  sendTransaction: (destination: string) => Promise<any>;
  signMessage: () => Promise<string | undefined>;
  readContract: (
    contractAddress: string,
    abi: object[],
    params: any
  ) => Promise<string | void | []>;
  getAccounts: () => Promise<string[] | undefined>;
};

export const Web3authContext = createContext<Web3auth | undefined>(undefined);

export const Web3authContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [torusPlugin, setTorusPlugin] =
    useState<TorusWalletConnectorPlugin | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x81',
            rpcTarget: 'https://evm.shibuya.astar.network', // This is the public RPC we have added, please pass on your own endpoint while creating an app
            blockExplorer: 'https://shibuya.subscan.io/',
            displayName: 'Shibuya'
          },
          web3AuthNetwork: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET
        });

        const openloginAdapter = new OpenloginAdapter({
          loginSettings: {
            mfaLevel: 'optional'
          },
          adapterSettings: {
            uxMode: 'redirect', // "redirect" | "popup"
            whiteLabel: {
              logoDark: 'https://www.svgrepo.com/show/9452/wallet.svg',
              logoLight: 'https://www.svgrepo.com/show/9452/wallet.svg',
              defaultLanguage: 'en', // en, de, ja, ko, zh, es, fr, pt, nl
              mode: 'dark' // whether to enable dark, light or auto mode. defaultValue: auto [ system theme]
            },
            mfaSettings: {
              deviceShareFactor: {
                enable: true,
                priority: 1,
                mandatory: true
              },
              backUpShareFactor: {
                enable: true,
                priority: 2,
                mandatory: false
              },
              socialBackupFactor: {
                enable: true,
                priority: 3,
                mandatory: false
              },
              passwordFactor: {
                enable: true,
                priority: 4,
                mandatory: false
              }
            }
          }
        });
        web3auth.configureAdapter(openloginAdapter);

        // plugins and adapters are optional and can be added as per your requirement
        // read more about plugins here: https://web3auth.io/docs/sdk/web/plugins/

        // adding torus wallet connector plugin

        const torusPlugin = new TorusWalletConnectorPlugin({
          torusWalletOpts: {},
          walletInitOptions: {
            whiteLabel: {
              theme: { isDark: true, colors: { primary: '#00a8ff' } },
              logoDark: 'https://www.svgrepo.com/show/9452/wallet.svg',
              logoLight: 'https://www.svgrepo.com/show/9452/wallet.svg'
            },
            useWalletConnect: true,
            enableLogging: true
          }
        });
        setTorusPlugin(torusPlugin);
        await web3auth.addPlugin(torusPlugin);

        // read more about adapters here: https://web3auth.io/docs/sdk/pnp/web/adapters/

        // adding wallet connect v2 adapter
        const defaultWcSettings = await getWalletConnectV2Settings(
          'eip155',
          [1],
          '04309ed1007e77d1f119b85205bb779d'
        );
        const walletConnectV2Adapter = new WalletConnectV2Adapter({
          adapterSettings: { ...defaultWcSettings.adapterSettings },
          loginSettings: { ...defaultWcSettings.loginSettings }
        });

        web3auth.configureAdapter(walletConnectV2Adapter);

        // // adding metamask adapter
        // const metamaskAdapter = new MetamaskAdapter({
        //   clientId,
        //   sessionTime: 3600, // 1 hour in seconds
        //   web3AuthNetwork: 'cyan',
        //   chainConfig: {
        //     chainNamespace: CHAIN_NAMESPACES.EIP155,
        //     chainId: '0x1',
        //     rpcTarget: 'https://rpc.ankr.com/eth' // This is the public RPC we have added, please pass on your own endpoint while creating an app
        //   }
        // });
        // // we can change the above settings using this function
        // metamaskAdapter.setAdapterSettings({
        //   sessionTime: 86400, // 1 day in seconds
        //   chainConfig: {
        //     chainNamespace: CHAIN_NAMESPACES.EIP155,
        //     chainId: '0x1',
        //     rpcTarget: 'https://rpc.ankr.com/eth' // This is the public RPC we have added, please pass on your own endpoint while creating an app
        //   },
        //   web3AuthNetwork: 'cyan'
        // });

        // // it will add/update  the metamask adapter in to web3auth class
        // web3auth.configureAdapter(metamaskAdapter);

        const torusWalletAdapter = new TorusWalletAdapter({
          clientId
        });

        // it will add/update  the torus-evm adapter in to web3auth class
        web3auth.configureAdapter(torusWalletAdapter);

        setWeb3auth(web3auth);
        await web3auth.initModal();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (web3auth) {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      setLoggedIn(true);
    }
  };

  const getIdToken = async () => {
    if (web3auth) {
      const idToken = await web3auth.authenticateUser();
      return idToken.idToken;
    }
  };

  const getUserInfo = async () => {
    if (web3auth) {
      const user = await web3auth.getUserInfo();
      return user;
    }
  };

  const logout = async () => {
    if (web3auth) {
      await web3auth.logout();
      setProvider(null);
      setLoggedIn(false);
    }
  };

  const getBalance = async () => {
    if (provider) {
      const rpc = new RPC(provider);
      const balance = await rpc.getBalance();
      return balance;
    }
  };

  const buyCoins = async (address: string) => {
    if (torusPlugin?.torusWalletInstance.isLoggedIn) {
      torusPlugin.initiateTopup('moonpay', {
        selectedAddress: address,
        selectedCurrency: 'USD',
        fiatValue: 100,
        selectedCryptoCurrency: 'MATIC',
        chainNetwork: 'matic'
      });
    }
  };

  const getPrivateKey = async () => {
    if (provider) {
      const rpc = new RPC(provider);
      const privateKey = (await rpc.getPrivateKey()) as string;
      return privateKey;
    }
  };

  const sendTransaction = async (destination: string) => {
    if (provider) {
      const rpc = new RPC(provider);
      const receipt = await rpc.sendTransaction(destination);
      return receipt;
    }
  };

  const signMessage = async () => {
    if (provider) {
      const rpc = new RPC(provider);
      const signedMessage = await rpc.signMessage('Some message here');
      return signedMessage;
    }
  };

  const readContract = async (
    contractAddress: string,
    abi: object[],
    params: any
  ) => {
    if (provider) {
      const rpc = new RPC(provider);
      const message = await rpc.readContract(contractAddress, abi, params);
      return message;
    }
  };

  const getAccounts = async () => {
    if (provider) {
      const rpc = new RPC(provider);
      const address = await rpc.getAccounts();
      return address;
    }
  };

  return (
    <Web3authContext.Provider
      value={{
        login,
        loggedIn,
        provider,
        logout,
        getIdToken,
        getUserInfo,
        getBalance,
        buyCoins,
        torusPlugin,
        getPrivateKey,
        sendTransaction,
        signMessage,
        readContract,
        getAccounts
      }}>
      {children}
    </Web3authContext.Provider>
  );
};

const useWeb3auth = () => useContext(Web3authContext);

export default useWeb3auth;
