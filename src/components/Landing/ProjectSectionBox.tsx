import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

export const ProjectSectionBox = () => {
  return (
    <Box
      sx={{
        background: 'white',
        minHeight: '20rem'
      }}>
      <Box sx={{ maxWidth: '100rem', margin: 'auto', paddingBottom: '4rem' }}>
        <Grid
          container
          columnSpacing={8}
          rowSpacing={4}
          alignItems="center"
          justifyContent="center"
          px={6}>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center',
              my: '1rem'
            }}>
            <Typography
              sx={{
                color: '#000000',
                maxWidth: '38rem',
                fontFamily: 'Montserrat',
                fontSize: '1.25rem',
                fontWeight: '500',
                lineHeight: '2.5rem',
                margin: 'auto'
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ultricies lectus eros, convallis scelerisque lacus
            </Typography>
          </Grid>
          {/* First Box */}
          <Grid item xs={12} sm={4} md={3} lg={2.5}>
            <Box
              sx={{
                borderRadius: '0.625rem',
                background: 'white',
                minHeight: '20rem',
                margin: 'auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.4)'
              }}>
              <Typography
                sx={{
                  maxWidth: '80%',
                  color: '#000000',
                  fontFamily: 'Montserrat',
                  fontSize: '1.125rem',
                  fontWeight: '700'
                }}>
                LOREM IMPSUM
              </Typography>
              <Typography
                sx={{
                  maxWidth: '80%',
                  marginTop: '1.5rem',
                  color: '#000000',
                  fontFamily: 'Montserrat',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  lineHeight: '1.4rem'
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ultricies lectus.
              </Typography>
            </Box>
          </Grid>
          {/* Second Box */}
          <Grid item xs={12} sm={4} md={3} lg={2.5}>
            <Box
              sx={{
                borderRadius: '0.625rem',
                background: 'white',
                minHeight: '20rem',
                margin: 'auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.4)'
              }}>
              <Typography
                sx={{
                  maxWidth: '80%',
                  color: '#000000',
                  fontFamily: 'Montserrat',
                  fontSize: '1.125rem',
                  fontWeight: '700'
                }}>
                LOREM IMPSUM
              </Typography>
              <Typography
                sx={{
                  maxWidth: '80%',
                  marginTop: '1.5rem',
                  color: '#000000',
                  fontFamily: 'Montserrat',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  lineHeight: '1.4rem'
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ultricies lectus.
              </Typography>
            </Box>
          </Grid>
          {/* Third Box */}
          <Grid item xs={12} sm={4} md={3} lg={2.5}>
            <Box
              sx={{
                borderRadius: '0.625rem',
                background: 'white',
                minHeight: '20rem',
                margin: 'auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.4)'
              }}>
              <Typography
                sx={{
                  maxWidth: '80%',
                  color: '#000000',
                  fontFamily: 'Montserrat',
                  fontSize: '1.125rem',
                  fontWeight: '700'
                }}>
                LOREM IMPSUM
              </Typography>
              <Typography
                sx={{
                  maxWidth: '80%',
                  marginTop: '1.5rem',
                  color: '#000000',
                  fontFamily: 'Montserrat',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  lineHeight: '1.4rem'
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ultricies lectus.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
