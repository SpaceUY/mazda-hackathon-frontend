import { NFT } from 'pages/NFTView';
import * as React from 'react';

import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

import AccidentsTab from './AccidentsTab';
import SalesTab from './SalesTab';
import ServicesTab from './ServicesTab';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-flexContainer': { justifyContent: 'space-between' },
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '3.25rem'
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: 'transparent',
    border: '0.5px solid #FFFFFF',
    borderRadius: '0.25rem'
  }
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(25),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.2)',
  letterSpacing: '3px',
  '&.Mui-selected': {
    color: '#fff'
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)'
  }
}));

export const CustomizedTabs = ({ nft }: { nft: NFT }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example">
        <StyledTab label="Sales" />
        <StyledTab label="Services" />
        <StyledTab label="Accidents" />
      </StyledTabs>
      <Box mt="2rem">
        {value === 0 && <SalesTab sales={nft.sales} />}
        {value === 1 && <ServicesTab services={nft.services} />}
        {value === 2 && <AccidentsTab accidents={nft.accidents} />}
      </Box>
    </>
  );
};
export default CustomizedTabs;
