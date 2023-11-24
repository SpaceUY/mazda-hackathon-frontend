import HeroImage from 'assets/images/HERO-IMG.png';
import { ReactComponent as HubVolant } from 'assets/images/HUD-ELEMENT-NARANJA-01 1.svg';
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
              minWidth: '11rem',
              minHeight: '3rem',
              marginTop: '3rem'
            }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#FFF',
                color: '#141414',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#432101',
                  color: '#FFF'
                },
                '&:active': {
                  backgroundColor: '#432101',
                  color: '#FFF',
                  transform: 'scale(0.98)'
                }
              }}>
              JOIN
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '4rem',
          marginBottom: { xs: '5rem', md: 0 },
          width: '100%',
          minHeight: '42rem'
        }}>
        <Box
          sx={{
            width: { xs: '90%', sm: '90%', md: '100%', lg: '50%' },
            maxWidth: { xs: '90%', sm: '90%', md: '70%', lg: '50%' },
            maxHeight: '12rem',
            margin: 'auto'
          }}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: '75%', md: '34rem' },
              maxWidth: '35rem',
              backgroundColor: '#000000',
              opacity: { xs: '93%', md: '83%' },
              height: '23rem',
              borderRadius: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1
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
                  fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
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
                  fontSize: { xs: '0.5rem', sm: '1rem', md: '1.15rem' },
                  letterSpacing: '0.225rem',
                  lineHeight: { xs: '1.5rem', smd: '2rem', md: '2.5rem' }
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
                width: { xs: '75%', sm: '75%', md: '34rem' },
                maxWidth: '35rem',
                height: '23rem',
                backgroundImage: `url(${VolanteImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.25rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: { xs: '-3rem', md: '-15rem' },
                left: { xs: '15.1rem', sm: '23rem', md: '43rem' },
                transform: 'translateX(-50%)',
                zIndex: 0
              }}>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  marginTop: '2rem',
                  marginRight: '6rem'
                }}>
                <HubVolant />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
