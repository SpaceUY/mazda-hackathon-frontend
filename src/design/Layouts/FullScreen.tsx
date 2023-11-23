import { ReactComponent as GlareBackground } from 'assets/images/Glare.svg';
import logo from 'assets/images/logo-space.png';
import useWeb3auth from 'hooks/useWeb3auth';
import { Outlet, useNavigate } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar } from '@mui/material';

import Card from 'design/Card';
import NavLink, { NavLinkItem } from 'design/NavLink';

const navigation: NavLinkItem[] = [{ path: '/my-assets', label: 'MY ASSETS' }];

const FullScreen = ({
  showNavigation = true
}: {
  showNavigation?: boolean;
}) => {
  const Web3auth = useWeb3auth();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Box
        position="fixed"
        top={0}
        left={0}
        zIndex={-1}
        width="100%"
        height="100%">
        <GlareBackground />
      </Box>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
            <Box
              display="flex"
              gap={1}
              alignItems="center"
              onClick={() => {
                navigate('/');
              }}
              sx={{ cursor: 'pointer' }}>
              <img src={logo} alt="project logo" />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 3,
                marginRight: '2rem'
              }}>
              <Button
                color="inherit"
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.125rem',
                  color: '#A3A3A3'
                }}
                onClick={async () => {
                  if (Web3auth)
                    Web3auth.loggedIn ? Web3auth.logout() : Web3auth.login();
                }}>
                {Web3auth && Web3auth.loggedIn ? 'LOG OUT' : 'LOG IN'}
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.125rem',
                  color: '#A3A3A3'
                }}>
                CAR NFT
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box pt="6.375rem" minHeight="100vh" display="flex" gap={2}>
        {showNavigation && (
          <Card
            component="aside"
            mt="8rem"
            customSx={{
              padding: '2rem 0',
              borderWidth: 0,
              height: 'fit-content',
              minWidth: '12.875rem',
              borderRadius: '0 1.5rem 1.5rem 0'
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {navigation.map((nav) => (
                <NavLink key={nav.path} to={nav.path}>
                  {nav.label}
                </NavLink>
              ))}
            </Box>
          </Card>
        )}
        <Outlet />
      </Box>
    </Box>
  );
};
export default FullScreen;
