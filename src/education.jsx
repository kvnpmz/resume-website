import {
    Typography,
    Box,
    Grid,
    Paper,
} from '@mui/material';

export default function Education() {
    return (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Education</Typography>
            <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1">Bachelor of Arts in Economics</Typography>
            <Typography variant="subtitle2">University of Florida | Gainesville, FL</Typography>
            <Typography variant="body2">Graduated: 2020</Typography>
            <Typography variant="body2">Major GPA: 3.6/4.0</Typography>
            <Typography variant="body2">Florida Academic Scholar, Bright Futures Program:</Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>2016 - 2020</Typography>
            <Typography variant="body2">President’s Honor Roll, University of Florida:</Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>2020</Typography>
            <Typography variant="body2">Dean’s List, College of Liberal Arts and Sciences:</Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>2020</Typography>
            </Box>
            </Paper>
        </Grid>
    );
}

