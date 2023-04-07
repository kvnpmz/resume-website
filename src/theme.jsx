import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
  palette: {
    background: {
      default: '#003366',
    },
  },
    components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '2rem',
          backgroundColor: '#f4f2e4',
        },
      },
    },
  },
});


export default theme;
//f4f2e4

