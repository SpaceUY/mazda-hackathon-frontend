import ellipse from 'assets/images/Ellipse.png';
import logo from 'assets/images/logo-space.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Grid, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const onCarNFTClick = () => {
    navigate('/nft-view/0x851359e4ee55918ef69A87078C9f1Bd8d85421d2/0');
  };

  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '25rem',
        background: '#000000'
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
                Project submission (arreglar)
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
            {/* <Button
              color="inherit"
              onClick={onCarNFTClick}
              sx={{
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                color: '#f0f0f0f0',
                fontWeight: 700,
                lineHeight: '1.25rem'
              }}>
              CAR NFT
            </Button> */}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ maxWidth: '40%', margin: 'auto', marginTop: '1.5rem' }}>
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
          <Grid
            item
            xs={2.4}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            <img src={ellipse} alt="project logo" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ maxWidth: '20%', margin: 'auto', marginTop: '1.5rem' }}>
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
          <Grid item xs={6}>
            <Typography
              sx={{
                color: '#F0F0F0F0',
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                fontWeight: '400',
                lineHeight: '1.25rem'
              }}>
              © 2023
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              color: '#F0F0F0F0',
              fontFamily: 'Roboto',
              fontSize: '0.875rem',
              fontWeight: '400',
              lineHeight: '1.25rem'
            }}>
            <Typography>Privacy - Terms</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
