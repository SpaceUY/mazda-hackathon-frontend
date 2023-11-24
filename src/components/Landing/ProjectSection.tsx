import React from 'react';

import { Box, Typography } from '@mui/material';

import { ProjectSectionBox } from './ProjectSectionBox';
import { ProjectSectionDescription } from './ProjectSectionDescription';

export const ProjectSection: React.FC = () => {
  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '100rem',
        background:
          'linear-gradient(179deg, #3A3A3A 25.55%, #432101 87.01%, #000 100%)'
      }}>
      <Box sx={{ margin: '1rem', paddingBottom: '0.5rem' }}>
        <Typography
          variant="h1"
          sx={{
            margin: '2rem',
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontSize: '2.8rem',
            fontWeight: '700',
            letterSpacing: '0.15rem'
          }}>
          THE PROJECT
        </Typography>
      </Box>
      <Box sx={{ margin: 'auto', paddingTop: '0.5rem' }}>
        <ProjectSectionBox />
      </Box>
      <Box
        sx={{
          margin: 'auto',
          paddingTop: '0.5rem'
        }}>
        <ProjectSectionDescription />
      </Box>
    </Box>
  );
};
