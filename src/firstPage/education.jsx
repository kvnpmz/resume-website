import {
    Typography,
    Box,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

const education = [
    {
        degree: "Bachelor of Arts in Economics",
        institution: "University of Florida",
        location: "Gainesville, FL",
        graduationDate: "2020",
        gpa: "3.6/4.0",
        honors: [
            "Florida Academic Scholar, Bright Futures Program: 2016 - 2020",
            "President’s Honor Roll, University of Florida: 2020",
            "Dean’s List, College of Liberal Arts and Sciences: 2020",
        ],
    },
];

export default function Education() {
    return (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Education
                </Typography>
                <List>
                    {education.map((edu, index) => (
                        <Box key={index}>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            {edu.degree}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="subtitle2">
                                            {edu.institution} | {edu.location}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Box sx={{ ml: 3 }}>
    <Typography variant="body2">
        Graduated: {edu.graduationDate}
    </Typography>
    <Typography variant="body2">
        Major GPA: {edu.gpa}
    </Typography>
    <Typography
        variant="subtitle2"
        sx={{ mt: 1, fontWeight: "bold" }}
    >
        Honors:
    </Typography>
    <ol>
        {edu.honors.map((honor, index) => (
            <li key={index}>
                <Typography variant="body2">{honor}</Typography>
            </li>
        ))}
    </ol>
</Box>

                        </Box>
                    ))}
                </List>
            </Paper>
        </Grid>
    );
}

