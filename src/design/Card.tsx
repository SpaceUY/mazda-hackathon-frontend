import React from 'react';

import { Box, BoxProps, SxProps } from '@mui/material';

const Card = ({ customSx, ...props }: BoxProps & { customSx?: SxProps }) => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(transparent, transparent) padding-box, linear-gradient(40deg,rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%,rgba(255,255,255,0.2) 100%) border-box',
        borderRadius: '1.5rem',
        border: '0.25rem solid transparent',
        backdropFilter: 'blur(5px)',
        padding: '2rem',
        color: 'white',
        ...customSx
      }}
      {...props}>
      {props.children}
    </Box>
  );
};
export default Card;
