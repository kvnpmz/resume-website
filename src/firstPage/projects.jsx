import {
    Typography,
    Box,
    Grid,
    Paper,
} from '@mui/material';

export default function Projects() {
    return (
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Projects</Typography>
          {/* Project 1 */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h7">Project 1: Web-based Data Visualization Tool</Typography>
            <Typography variant="body2">
              - Description of the project
              <br />
              - Technologies used: React, Material UI, D3.js
              <br />
              - Link to the project: <a href="https://example.com/project1">example.com/project1</a>
            </Typography>
          </Box>
          {/* Project 2 */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h7">Project 2: Machine Learning Model for Sales Prediction</Typography>
            <Typography variant="body2">
              - Description of the project
              <br />
              - Technologies used: Python, scikit-learn, TensorFlow
              <br />
              - Link to the project: <a href="https://example.com/project2">example.com/project2</a>
            </Typography>
          </Box>
        </Paper>
      </Grid>
);
}
    
