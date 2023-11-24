import HUDElement from 'assets/images/HUD-ELEMENT-NARANJA-01 2.png';
import { ReactComponent as GlassBackground } from 'assets/images/glass-bg.svg';
import { ReactComponent as Background } from 'assets/images/nft-background.svg';
import axios from 'axios';
import nftMazdaABI from 'contracts/abi';
import useWeb3auth from 'hooks/useWeb3auth';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@mui/material';

import CardItem from 'components/CardItem';
import NftTabs from 'components/NFTTabs/NftTabs';

export type NFT = {
  name: string;
  description: string;
  image: string;
  vin: string;
  attributes: Attribute[];
  sales: Sale[];
  services: Service[];
  accidents: Accident[];
};

export type Accident = {
  year: number;
  description: string;
};

export type Attribute = {
  trait_type: string;
  value: number | string;
  display_type?: string;
};

export type Sale = {
  year: number;
  amount: number;
};

export type Service = {
  year: number;
  description: string;
  cost: number;
};

const NFTView = () => {
  const params = useParams();
  const web3 = useWeb3auth();

  const [nft, setNft] = useState<NFT | undefined>(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getContractInfo = async () => {
      const tokenUri = (await web3?.readContract(
        params.address ?? '',
        nftMazdaABI,
        params.id
      )) as string;

      if (!tokenUri) return;
      if (typeof tokenUri !== 'string') {
        setError(true);
        return;
      }

      const cid = tokenUri.slice(7);
      const nftData: NFT = (await axios.get(`https://ipfs.io/ipfs/${cid}`))
        .data;
      setNft(nftData);
    };
    if (web3 && params.address && params.id) getContractInfo();
  }, [params, web3]);

  if (nft)
    return (
      <>
        <Box position="fixed" top={0} zIndex={-1} width="100%" height="100vh">
          <Background />
        </Box>
        <Container>
          <Grid container mt="2rem">
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                  fontWeight: 600,
                  letterSpacing: '2.5px',
                  fontSize: { xs: '1.75rem', md: '3.125rem' }
                }}>
                {"JUAN'S CAR"}
              </Typography>
              <Typography
                sx={{
                  textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                  fontWeight: 200,
                  letterSpacing: '1.7px',
                  fontSize: { xs: '1.25rem', md: '2.1875rem' },
                  fontStyle: 'italic'
                }}>
                {nft.name}
              </Typography>
              <Typography
                sx={{
                  textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                  fontWeight: 200,
                  letterSpacing: '1.7px',
                  fontSize: { xs: '1.25rem', md: '2.1875rem' },
                  fontStyle: 'italic'
                }}>
                {nft.vin}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                  fontWeight: 600,
                  letterSpacing: '2.5px',
                  fontSize: { xs: '2rem', md: '4.375rem' },
                  fontStyle: 'italic',
                  marginTop: { xs: '2rem', md: '4rem' }
                }}>
                {nft.attributes.find((a) => a.trait_type === 'Mileage')?.value}{' '}
                MILES
              </Typography>
              <Box mt="-.75rem">
                <img src={HUDElement} alt="hud" />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box m="auto" width="90%" position="relative" mt="15vw">
          <Box position="absolute" top={0} width="100%">
            <GlassBackground />
          </Box>
          <Box
            position="absolute"
            top={'-20vw'}
            width="100%"
            sx={{ px: { xs: 0, md: '8.625rem' } }}>
            <Box sx={{ m: 'auto', width: '100%' }}>
              <img
                src={`https://ipfs.io/ipfs/${nft.image.slice(7)}`}
                alt="car"
                width="100%"
              />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              gap="3.5rem"
              justifyContent="center">
              <CardItem
                text={`MODEL: ${
                  nft.attributes.find((a) => a.trait_type === 'Model')?.value
                }`}
              />
              <CardItem
                text={`TYPE: ${
                  nft.attributes.find((a) => a.trait_type === 'Type')?.value
                }`}
              />
              <CardItem
                text={`COLOR: ${
                  nft.attributes.find((a) => a.trait_type === 'Color')?.value
                }`}
              />
            </Box>

            <Grid container mt="8rem" columnSpacing={9}>
              <Grid item>
                <Typography
                  sx={{
                    textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                  Last sale
                </Typography>
                <Typography
                  sx={{
                    textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                  Last Service
                </Typography>
                <Typography
                  sx={{
                    textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                  Boost percentage
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                  {
                    nft.attributes.find((a) => a.trait_type === 'Last Sale')
                      ?.value
                  }
                </Typography>
                <Typography
                  sx={{
                    textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                  {
                    nft.attributes.find((a) => a.trait_type === 'Last Service')
                      ?.value
                  }
                </Typography>
                <Typography
                  sx={{
                    textShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.50)',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                  {
                    nft.attributes.find((a) => a.trait_type === 'Discount')
                      ?.value
                  }
                </Typography>
              </Grid>
            </Grid>

            <Box mt="13.25rem" mb="2rem">
              <NftTabs nft={nft} />
            </Box>
          </Box>
        </Box>
      </>
    );
  if (error)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw">
        <Typography>Not found</Typography>
      </Box>
    );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="92vh"
      width="100vw">
      <CircularProgress />
    </Box>
  );
};
export default NFTView;
