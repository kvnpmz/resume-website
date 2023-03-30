import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
      <Container maxWidth="lg">
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: '0.5rem',
        }}
    >
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
          Location: Tampa, FL
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Phone: 954-393-5927
        </Typography>
        <Typography variant="caption" >
          This website was built using Material UI + React.
        </Typography>
        </Box>
      </Container>
  );
}

