import { Typography, Box, Grid, Paper } from "@mui/material";

const jobs = [
    {
        title: "Data Analyst",
        company: "BrokerCalls",
        date: "Mar 2022 - Mar 2023",
        responsibilities: [
            "Set up revenue-generating campaigns and targets in Ringba based on parameters agreed upon between salespeople and clients",
            "Applied analysis tools such as Power BI and Excel to create relational databases for in-depth analysis that supports the key business decision making process",
            "Built reports and dashboards summarizing data such as sales figures and call tracking information, which provided data-driven insights to teams to adjust performance as needed to achieve goals",
            "Provided consultation to upper management regarding campaign and target performance to maximize conversions, drive profit, and increase staff's efficiency",
            "Updated and maintained Salesforce account pages, introducing automation apps and methods that speed workflow allowing for more productive work",
        ],
    },
    {
        title: "Technical Assistant",
        company: "ING Consultants, Inc",
        date: "Aug 2021 - Mar 2022",
        responsibilities: [
            "Created reports based on field inspection notes, findings, and observations that aided in resolving legal disputes between insurance companies and homeowners",
            "Drew detailed engineering plans based on sketches and mock-ups using drawing software (AutoCAD)",
        ],
    },
    {
        title: "Survey Research Interviewer",
        company: "University of Florida Survey Research Center",
        date: "June 2020 - Aug 2021",
        responsibilities: [
            "Conducted phone surveys with randomly selected individuals for the Florida Consumer Sentiment Index",
            "Consistently met survey quota based on monthly and client deadlines with minimal management oversight",
        ],
    },
    {
        title: "Structural Engineering Intern",
        company: "ING Consultants, Inc",
        date: "May 2018 - Aug 2019",
        responsibilities: [
            "Took measurements and photos at both residential and commercial sites while assessing wind and water damage from tropical storms and hurricanes across South Florida to provide detailed reports to leadership",
            "Organized and labeled images, notes, and measurements collected at each inspection location",
        ],
    },
];

export default function Experience() {
    return (
        <Grid item xs={12} 


>
            <Paper elevation={3} 

>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Experience</Typography>

                {jobs.map((job, index) => (
                    <Box key={index} sx={{ mt: 2 }}>
                        <Typography variant="h6">{job.title}</Typography>
                        <Typography variant="subtitle2">
                            {job.company} | {job.date}
                        </Typography>
                        <ul>
                            {job.responsibilities.map(
                                (responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                )
                            )}
                        </ul>
                    </Box>
                ))}
            </Paper>
        </Grid>
    );
}

