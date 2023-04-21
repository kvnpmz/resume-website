import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export default function About() {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Professional Summary
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
I am a highly motivated, passionate, and perceptive Data Analyst who holds a Bachelor's Degree in Economics from the University of Florida. I am seeking a position where I can deploy my strong data analysis and problem-solving skills. 
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
I have the ability to collaborate with teams throughout projects to produce innovative business strategies underpinned by data analysis to design solutions to improve future performance. As an effective communicator, I build strong relationships with teams to drive goals and objectives.
        </Typography>
      </Paper>
    </Grid>
  );
}

