import { Container } from '@mui/material';

import { HeroSection } from 'components/HeroSection';

const Home = () => {
  return (
    <Container
      sx={{
        minHeight: 'calc(100vh - 6.375rem)',
        minWidth: '100%',
        padding: '0 !important',
        margin: '0'
      }}>
      <HeroSection />
    </Container>
  );
};

export default Home;
