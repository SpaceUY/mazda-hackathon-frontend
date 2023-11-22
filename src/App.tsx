import { Web3authContextProvider } from 'hooks/useWeb3auth';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'components/Routes';

const App = () => {
  return (
    <Web3authContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Web3authContextProvider>
  );
};

export default App;
