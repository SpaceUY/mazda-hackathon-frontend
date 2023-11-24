import HubElement from 'assets/images/HUD-ELEMENT-HOB.png';
import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

export const ProjectSectionDescription: React.FC = () => {
  return (
    <Box sx={{ marginTop: '10rem', zIndex: 1, width: '100%' }}>
      <Grid
        container
        sx={{
          width: '80%',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: { xs: '30rem', md: '50rem' },
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${HubElement})`,
              backgroundSize: '70%',
              backgroundPosition: 'left 10% center',
              backgroundRepeat: 'no-repeat',
              opacity: { xs: 0.4, md: 0.8 },
              zIndex: 1
            }
          }}>
          <Box
            sx={{
              width: { xs: '20rem', md: '32rem' },
              alignSelf: 'flex-end',
              marginTop: 'auto',
              marginBottom: 'auto',
              marginRight: { xs: '0', md: '1rem' }
            }}>
            <Typography
              sx={{
                color: '#f0f0f0f0',
                textAlign: 'right',
                fontFamily: 'Montserrat',
                fontSize: { xs: '2.125rem', md: '3.125rem' },
                fontWeight: 600
              }}>
              YOUR CAR
            </Typography>
            <Typography
              sx={{
                color: '#f0f0f0f0',
                textAlign: 'right',
                fontFamily: 'Montserrat',
                fontSize: { xs: '2.125rem', md: '3.125rem' },
                fontWeight: 600
              }}>
              CONNECTED
            </Typography>
            <Typography
              sx={{
                color: '#f0f0f0f0',
                textAlign: 'right',
                fontFamily: 'Montserrat',
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 500,
                lineHeight: '2.5rem'
              }}>
              A seamless car ownership journey, by incorporating real-time
              maintenance alerts, interactive experiences, and eco-friendly
              practices, all underpinned by web3s secure framework.
              <Box
                sx={{
                  alignSelf: 'flex-end',
                  justifyContent: 'flex-end',
                  alignContent: 'end',
                  marginTop: '1rem'
                }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FFF',
                    color: '#141414',
                    transition: 'all 0.2s ease', // Smooth transition for the color change
                    '&:hover': {
                      backgroundColor: '#432101', // Optional: Change on hover
                      color: '#FFF'
                    },
                    '&:active': {
                      backgroundColor: '#432101',
                      color: '#FFF',
                      transform: 'scale(0.98)'
                    }
                  }}>
                  CONNECT
                </Button>
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
