import {
    Typography,
    Box,
    Grid,
    Paper,
} from '@mui/material';

export default function Certifications() {
    return (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Certifications</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h7">Certified Data Analyst - XYZ Academy</Typography>
            <Typography variant="subtitle2">Completed: June 2020</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h7">Web Development Certification - ABC Institute</Typography>
            <Typography variant="subtitle2">Completed: April 2018</Typography>
          </Box>
        </Paper>
      </Grid>
      );
}
