import {
    Typography,
    Box,
    Grid,
    Paper,
    Chip
} from '@mui/material';

export default function Skills() {
    return (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Skills</Typography>
            <Box sx={{ mt: 1, mb: 1 }}>
            {['Microsoft Office Suite (Word, Excel)', 'Power BI', 'Salesforce', 'Ringba', 'VBA', 'M Script', 'DAX', 'React', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'C#', 'Java', 'Git'].map(
            (skill) => (
            <Chip key={skill} label={skill} sx={{ mr: 1, mb: 1 }} />
            )
            )}
            </Box>
            </Paper>
        </Grid>
    );
}

