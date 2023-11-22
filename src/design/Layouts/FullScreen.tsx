import useWeb3auth from 'hooks/useWeb3auth';
import { Outlet } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const FullScreen = () => {
  const Web3auth = useWeb3auth();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
            <Typography variant="h6" component="span">
              Space Dev
            </Typography>
            <Box display="flex" gap={1}>
              <Button
                color="secondary"
                variant="contained"
                onClick={async () => {
                  if (Web3auth)
                    Web3auth.loggedIn ? Web3auth.logout() : Web3auth.login();
                }}>
                {Web3auth && Web3auth.loggedIn ? 'Disconnect' : 'Connect'}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default FullScreen;
