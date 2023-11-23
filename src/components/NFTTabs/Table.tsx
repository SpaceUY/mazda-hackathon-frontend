import { Box, Grid, Typography } from '@mui/material';

const Table = ({ objList }: { objList: object[] }) => {
  if (objList.length > 0)
    return (
      <Box
        sx={{
          width: '100%',
          border: '0.125rem solid transparent',
          borderRadius: '1.375rem',
          background:
            'linear-gradient(70deg, rgba(255,255,255,1) 0%, rgba(30,30,30,1) 25%, rgba(30,30,30,1) 75%, rgba(255,255,255,1) 100%)'
        }}>
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.80)',
            backdropFilter: 'blur(500px)',
            height: '100%',
            width: '100%',
            borderRadius: '1.375rem',
            padding: '1rem'
          }}>
          <Grid container>
            {Object.keys(objList[0]).map((key) => (
              <Grid item key={key} xs={12 / Object.keys(objList[0]).length}>
                <Typography
                  variant="body1"
                  fontSize="1rem"
                  fontWeight={900}
                  textTransform="uppercase"
                  lineHeight="1.75rem"
                  letterSpacing="0.375rem"
                  textAlign="center">
                  {key}
                </Typography>
              </Grid>
            ))}
            {objList.map((obj, i) => (
              <Grid container key={i}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    height: '1px',
                    width: '100%',
                    background:
                      'linear-gradient(90deg, #FFF 1.15%, #FFF 98.87%);',
                    marginTop: '2rem',
                    marginBottom: '1rem'
                  }}
                />
                {Object.values(obj).map((value) => (
                  <Grid
                    item
                    key={value}
                    xs={12 / Object.keys(objList[0]).length}>
                    <Typography
                      variant="body1"
                      fontSize="1rem"
                      fontWeight={400}
                      lineHeight="1.75rem"
                      textAlign="center">
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );

  return <></>;
};
export default Table;
