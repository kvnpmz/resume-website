import {
    Typography,
    Box,
    Grid,
    Paper,
} from '@mui/material';

export default function Experience() {
    return (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Experience</Typography>
            {/* Job 1 */}
            <Box sx={{ mt: 2 }}>
            <Typography variant="h7">Data Analyst, BrokerCalls</Typography>
            <Typography variant="subtitle2">Mar 2022 - Mar 2023</Typography>
            <Typography variant="body2">
                - Responsible for setting up revenue-generating campaigns and targets in Ringba based on parameters agreed upon
                between salespeople and clients
                <br />
                - Applied analysis tools such as Power BI and Excel to create relational databases for in-depth analysis that supports the key business decision making process
                <br />
                - Built reports and dashboards summarizing data such as sales figures and call tracking information, which in return provides data-driven insights to teams to adjust performance as needed to achieve goals
                <br />
                - Provided consultation to upper management regarding campaign and target performance to maximize conversions, drive profit, and increase staff's efficiency
                <br />
                - Updated and maintained Salesforce account pages, introducing automation apps and methods that speed workflow allowing for more productive work
            </Typography>
            </Box>
            {/* Job 2 */}
            <Box sx={{ mt: 2 }}>
            <Typography variant="h7">Technical Assistant, ING Consultants, Inc</Typography>
            <Typography variant="subtitle2">Aug 2021 - Mar 2022</Typography>
            <Typography variant="body2">
                - Created reports based on field inspection notes, findings, and observations that aided in resolving legal disputes between insurance companies and homeowners
                <br />
                - Drew detailed engineering plans based on sketches and mock-ups using drawing software (AutoCAD)
            </Typography>
            </Box>
            {/* Job 3 */}
            <Box sx={{ mt: 2 }}>
            <Typography variant="h7">Survey Research Interviewer, University of Florida Survey Research Center</Typography>
            <Typography variant="subtitle2">June 2020 - Aug 2021</Typography>
            <Typography variant="body2">
                - Conducted phone surveys with randomly selected individuals for the Florida Consumer Sentiment Index
                <br />
                - Consistently met survey quota based on monthly and client deadlines with minimal management oversight
            </Typography>
            </Box>
            {/* Job 4 */}
            <Box sx={{ mt: 2 }}>
            <Typography variant="h7">Structural Engineering Intern, ING Consultants, Inc</Typography>
            <Typography variant="subtitle2">May 2018 - Aug 2019</Typography>
            <Typography variant="body2">
                - Took measurements and photos at both residential and commercial sites while assessing wind and water damage from tropical storms and hurricanes across South Florida to provide detailed reports to leadership
                <br />
                - Organized and labeled images, notes, and measurements collected at each inspection location
            </Typography>
            </Box>
            </Paper>
        </Grid>
    );
}

