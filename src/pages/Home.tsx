import useWeb3auth from 'hooks/useWeb3auth';

import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const Home = () => {
  const Web3auth = useWeb3auth();

  return (
    <Container>
      {Web3auth && Web3auth.loggedIn ? (
        <>
          <Typography mt={2} component="h1" variant="h5">
            Available actions
          </Typography>
          <Box mt={1} display="flex" gap={1}>
            <>
              <Button
                variant="contained"
                onClick={async () => {
                  const me = await Web3auth?.getAccounts();
                  Web3auth?.buyCoins(
                    me ? me[0] : '0xbDdBC20FE4a8E8A62306B13C2cAA2bb1FaCA87fd'
                  );
                }}>
                Buy coins
              </Button>
              <Button
                variant="contained"
                onClick={async () =>
                  console.log(await Web3auth?.getPrivateKey())
                }>
                Get Private key
              </Button>
              <Button
                variant="contained"
                onClick={async () => console.log(await Web3auth?.getIdToken())}>
                Get token id
              </Button>
              <Button
                variant="contained"
                onClick={async () =>
                  console.log(await Web3auth?.getUserInfo())
                }>
                Get user info
              </Button>
              <Button
                variant="contained"
                onClick={async () => console.log(await Web3auth?.getBalance())}>
                Get Balance
              </Button>
              <Button
                variant="contained"
                onClick={async () =>
                  console.log(await Web3auth?.getAccounts())
                }>
                Get accounts
              </Button>
              <Button
                variant="contained"
                onClick={async () => {
                  const me = await Web3auth?.getAccounts();
                  console.log(await Web3auth?.sendTransaction(me ? me[0] : ''));
                }}>
                Send Transaction
              </Button>
            </>
          </Box>
        </>
      ) : (
        <Typography mt={2} component="h1" variant="h5">
          Connect your wallet
        </Typography>
      )}
    </Container>
  );
};

export default Home;
