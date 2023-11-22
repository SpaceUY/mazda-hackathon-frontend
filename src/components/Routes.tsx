import Home from 'pages/Home';
import { Route, Routes as RoutesFromRouter } from 'react-router-dom';

import FullScreen from 'design/Layouts/FullScreen';

const Routes = () => (
  <RoutesFromRouter>
    <Route element={<FullScreen showNavigation={false} />}>
      <Route path={'/'} element={<Home />} />
    </Route>
  </RoutesFromRouter>
);
export default Routes;
