import logo from 'assets/images/logo-space.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Grid, Link, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  // const onCarNFTClick = () => {
  //   navigate('/nft-view/0x851359e4ee55918ef69A87078C9f1Bd8d85421d2/0');
  // };

  return (
    <Box
      sx={{
        minWidth: '100%',
        background: '#000000',
        paddingBottom: '2rem'
      }}>
      <Box
        sx={{ width: '85%', margin: 'auto', borderBottom: '1px solid white' }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          style={{ width: '80%', height: '100%', margin: 'auto' }}>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              color="inherit"
              sx={{
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                color: '#f0f0f0f0',
                fontWeight: 700,
                lineHeight: '1.25rem'
              }}>
              Project submission (arreglar) 2
            </Button>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
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
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href="https://www.notion.so/dm-collective/Mazda-web3-Global-Hackathon-3ace51473b4049939a602da6bcb90817?pvs=4"
              color="inherit"
              rel="noreferrer"
              target="_blank"
              sx={{
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                color: '#f0f0f0f0',
                fontWeight: 700,
                lineHeight: '1.25rem'
              }}>
              Notion
            </Link>
          </Grid>
        </Grid>
      </Box>
      {/* <Box
        sx={{
          maxWidth: { xs: '60%', sm: '40%' },
          margin: 'auto',
          marginTop: '1.5rem'
        }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          style={{
            height: '100%',
            margin: 'auto',
            marginBottom: '1.5rem'
          }}>
          <Grid
            item
            xs={2.4}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={ellipse} alt="project logo" />
          </Grid>
          <Grid
            item
            xs={2.4}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            <img src={ellipse} alt="project logo" />
          </Grid>
          <Grid
            item
            xs={2.4}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            <img src={ellipse} alt="project logo" />
          </Grid>
          <Grid
            item
            xs={2.4}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            <img src={ellipse} alt="project logo" />
          </Grid>
          <Grid
            item
            xs={2.4}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            <img src={ellipse} alt="project logo" />
          </Grid>
        </Grid>
      </Box> */}
      <Box sx={{ margin: 'auto', marginTop: '1.5rem' }}>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          style={{
            height: '100%',
            margin: 'auto',
            marginBottom: '1.5rem'
          }}>
          <Grid item xs={12} sm={12}>
            <Typography
              sx={{
                color: '#F0F0F0F0',
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                fontWeight: '400',
                lineHeight: '1.25rem',
                textAlign: 'center'
              }}>
              © 2023
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography
              sx={{
                color: '#F0F0F0F0',
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                fontWeight: '400',
                lineHeight: '1.25rem',
                textAlign: 'center',
                '& a': {
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }
              }}>
              <a href="https://key3.eventos.tokyo/web/portal/744/event/7845">
                About
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography
              sx={{
                color: '#F0F0F0F0',
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                fontWeight: '400',
                lineHeight: '1.25rem',
                textAlign: 'center',
                '& a': {
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }
              }}>
              <a href="https://key3.eventos.tokyo/web/portal/744/event/7845">
                Project developed for the Web3 Global, not for commercial use
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
