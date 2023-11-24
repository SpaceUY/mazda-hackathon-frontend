import useWeb3auth from 'hooks/useWeb3auth';
import Home from 'pages/Home';
import NFTView from 'pages/NFTView';
import { Navigate, Route, Routes as RoutesFromRouter } from 'react-router-dom';

import FullScreen from 'design/Layouts/FullScreen';

const Routes = () => {
  const Web3auth = useWeb3auth();

  return (
    <RoutesFromRouter>
      <Route element={<FullScreen showNavigation={false} />}>
        <Route path={'/'} element={<Home />} />
      </Route>
      <Route element={<FullScreen showNavigation={false} display="block" />}>
        <Route
          path={'/nft-view/:address/:id'}
          element={
            Web3auth && Web3auth.loggedIn ? (
              <NFTView />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route path="*" element={<>Not found</>} />
      </Route>
    </RoutesFromRouter>
  );
};
export default Routes;
