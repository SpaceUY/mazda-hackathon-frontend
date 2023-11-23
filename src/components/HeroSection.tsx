import HeroImage from 'assets/images/HERO-IMG.png';
import HubVolante from 'assets/images/HUDElement.png';
import VolanteImage from 'assets/images/VOLANTE-IMG.png';
import React from 'react';

import { Box, Button, Typography } from '@mui/material';

export const HeroSection: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#000000',
          width: '100%',
          borderRadius: '6rem',
          pading: 0,
          magin: 0
        }}>
        <Box
          sx={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '55rem',
            // minWidth: '70rem',
            borderRadius: '6rem 6rem 0 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
          <Typography
            sx={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '3.75rem',
              letterSpacing: '0.225rem',
              flexShrink: 0
            }}>
            DRIVE TO EARN
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Montserrat',
                fontSize: '3.75rem',
                fontStyle: 'italic',
                fontWeight: 100,
                letterSpacing: '0.225rem'
              }}>
              USE FOR FUN
            </Typography>
          </Typography>
          <Box
            sx={{
              // minWidth: '11rem',
              minHeight: '3rem',
              marginTop: '3rem'
            }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: '#FFF', color: '#141414' }}>
              JOIN
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '8rem',
          width: '100%',
          minHeight: '42rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Box
          sx={{
            // minWidth: '58rem',
            maxHeight: '42rem'
          }}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: '90%', md: '35rem' },
              mx: 'auto',
              backgroundColor: '#000000',
              opacity: '83%',
              height: '23rem',
              borderRadius: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
              backdropFilter: 'blur(50px)'
            }}>
            <Box sx={{ margin: '2rem' }}>
              <Typography
                sx={{
                  margin: '1rem',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: '2rem',
                  letterSpacing: '0.225rem',
                  flexShrink: 0
                }}>
                Cumque pertinacius ut legum gnarus.
              </Typography>
              <Typography
                sx={{
                  margin: '1rem',
                  color: '#F0F0F0F0',
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '1.15rem',
                  letterSpacing: '0.225rem',
                  lineHeight: '2.5rem'
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ultricies lectus eros, convallis scelerisque lacus.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: '1rem',
              width: '100%',
              minHeight: '50rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
            <Box
              sx={{
                width: { xs: '25rem', xl: '35rem' },
                height: '23rem',
                backgroundImage: `url(${VolanteImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.25rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: '-15rem',
                left: { xs: '15rem', xl: '49rem' },
                transform: 'translateX(-50%)',
                zIndex: 0
              }}></Box>
            <Box
              sx={{
                position: 'relative',
                left: { xs: '-10rem', xl: '23rem' },
                top: '-27.75rem',
                width: { xs: '30rem', xl: '44rem' },
                height: '44rem',
                backgroundImage: `url(${HubVolante})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '1.25rem',

                zIndex: 1
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
