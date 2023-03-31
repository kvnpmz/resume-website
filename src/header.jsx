import { AppBar, Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#66a0d9' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: '0.5rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#000',
              fontSize: '2rem',
            }}
          >
            Kevin Pomerantz
          </Typography>
<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Typography sx={{ color: '#000', textAlign: 'center' }}>
    Data Analyst • Business Analyst • Business Intelligence Specialist • BI Consultant • Data Scientist
  </Typography>
</Box>
        </Box>
      </Box>
    </AppBar>
  );
}

