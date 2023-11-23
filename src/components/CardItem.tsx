import { Box, Typography } from '@mui/material';

const CardItem = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        padding: '0.75rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
        borderRadius: '0.25rem'
      }}>
      <Typography fontSize="1.5rem" fontWeight={700}>
        {text}
      </Typography>
    </Box>
  );
};
export default CardItem;
