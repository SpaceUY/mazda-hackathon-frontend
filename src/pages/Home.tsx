import mazdaKey from 'assets/images/IMG-MAZDA-LOOK&FEEL.png';

import { Box, Container, Typography } from '@mui/material';

import { Footer } from 'components/Landing/Footer';
import { HeroSection } from 'components/Landing/HeroSection';
import { ProjectSection } from 'components/Landing/ProjectSection';

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
      <ProjectSection />
      <Box
        sx={{
          backgroundImage: `url(${mazdaKey})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '30rem',
          // minWidth: '30rem',
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
            fontWeight: 300,
            fontSize: '1.875rem',
            letterSpacing: '0.2rem',
            flexShrink: 0
          }}>
          Automotive Engagement
          <Typography
            sx={{
              color: '#FFF',
              fontFamily: 'Montserrat',
              fontSize: '1.875rem',
              fontWeight: 700,
              letterSpacing: '0.2rem'
            }}>
            UNMATCHED IDEAD
          </Typography>
        </Typography>
      </Box>

      <Footer />
    </Container>
  );
};

export default Home;
