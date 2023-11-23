import Home from 'pages/Home';
import NFTView from 'pages/NFTView';
import { Route, Routes as RoutesFromRouter } from 'react-router-dom';

import FullScreen from 'design/Layouts/FullScreen';

const Routes = () => (
  <RoutesFromRouter>
    <Route element={<FullScreen />}>
      <Route path={'/'} element={<Home />} />
      <Route path={'/view-nft/:address/:id'} element={<NFTView />} />
      <Route path="*" element={<>Not found</>} />
    </Route>
  </RoutesFromRouter>
);
export default Routes;
