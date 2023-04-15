import { Card, CardMedia, Typography, Box, Button } from '@mui/material';
import library from "./images/library.jpg";
import EmailContactForm from "./emailContactForm";

const Banner = () => {
  return (
    <Card
      sx={{
        position: "static",
        height: '31.25rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: (theme) => theme.palette.grey[900],
      }}
    >
      <CardMedia
        sx={{
          height: '100%',
          width: '100%',
        }}
        image={library}
        title="Data Analyst"
      />
      <Box
        sx={{
          padding: "1rem",
          borderRadius: "1rem",
          position: 'absolute',
          zIndex: 1,
          textAlign: 'center',
          color: (theme) => theme.palette.custom.default,
          bgcolor: "rgba(5, 0, 0, 0.5)",   
        }}
      >
        <Typography
          sx={{
            fontSize: '4rem',
            fontWeight: 700,
            mb: 4,
          }}
          variant="h1"
        >
          Data Analyst
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 500,
            mb: 2,
          }}
          variant="h2"
        >
          Use data to drive insights and make informed decisions
        </Typography>
<EmailContactForm />    
 </Box>
    </Card>
  );
};

export default Banner;
