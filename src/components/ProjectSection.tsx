import React from 'react';

import { Box, Typography } from '@mui/material';

import { ProjectSectionBox } from './ProjectSectionBox';

export const ProjectSection: React.FC = () => {
  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '100rem',
        background:
          'linear-gradient(179deg, #3A3A3A 29.55%, #432101 54.01%, #000 82.03%)'
      }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          fontFamily: 'Montserrat',
          fontSize: '2.8rem',
          fontWeight: '700',
          letterSpacing: '0.15rem'
        }}>
        THE PROJECT
      </Typography>
      <ProjectSectionBox />
    </Box>
  );
};
