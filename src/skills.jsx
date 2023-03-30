import { Typography, Box, Grid, Paper, Chip } from "@mui/material";

const skillsData = [
  {
    category: "Tools & Technologies",
    skills: [
      "Microsoft Office Suite (Word, Excel)",
      "Power BI",
      "Salesforce",
      "Ringba",
      "VBA",
      "M Script",
      "DAX",
      "Git",
    ],
  },
  {
    category: "Programming Languages",
    skills: ["React", "HTML", "CSS", "JavaScript", "SQL", "Python", "C#", "Java"],
    proficiency: "Proficient in all programming languages listed",
  },
];

export default function Skills() {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Skills
        </Typography>
        {skillsData.map((category) => (
          <Box key={category.category}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>{category.category}</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {category.skills.map((skill) => (
                <Chip key={skill} label={skill} sx={{ mr: 1, mb: 1 }} />
              ))}
            </Box>
          </Box>
        ))}
      </Paper>
    </Grid>
  );
}

