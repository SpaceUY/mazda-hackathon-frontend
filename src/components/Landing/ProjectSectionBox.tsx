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
              Our goal is to craft a seamless car ownership journey by
              incorporating real-time maintenance alerts, interactive
              experiences, and eco-friendly practices.
            </Typography>
            <Typography
              sx={{
                color: '#FF7F00',
                maxWidth: '48rem',
                fontFamily: 'Montserrat',
                fontSize: '1.5rem',
                fontWeight: '900',
                lineHeight: '2.4rem',
                margin: 'auto'
              }}>
              ALL UNDERPINNED BY WEB3s SECURE FRAMEWORK
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
                Transform car ownership into a joyous experience.
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
                Integrate predictive maintenance alerts to avert costly repairs
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
                Embed a reward mechanism for proactive maintenance and enjoyable
                driving.
              </Typography>
            </Box>
          </Grid>
          {/* Forth Box */}
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
                Promote a communal, safe, and green driving culture.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
