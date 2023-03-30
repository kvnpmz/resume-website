import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const coreCompetenciesData = [
  {
    text: "Data Analysis",
  },
  {
    text: "Information Technology",
  },
  {
    text: "Data Collection & Reporting",
  },
  {
    text: "Project Management",
  },
  {
    text: "Process Improvement",
  },
  {
    text: "Programming",
  },
  {
    text: "Team Leadership",
  },
  {
    text: "Workflow Automation",
  },
  {
    text: "Bilingual: English & Spanish",
  },
];

export default function CoreCompetencies() {
  return (
    <Grid item xs={12} sx={{ mb: 2 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Core Competencies
          </Typography>
          <List sx={{ pt: 0 }}>
            {coreCompetenciesData.map((competency) => (
              <ListItem key={competency.text} sx={{ p: 0 }}>
                <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={competency.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Grid>
  );
}

