import {
    Container,
    Box,
    Grid,
} from '@mui/material';
import Header from './header';
import PersonalInformation from './personalInfo';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import Projects from './projects';
import Certifications from './certifications';

export default function ResumeWebsite() {
    return (
        <Container maxWidth="lg">
            <Header />
            <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2}>
                        <PersonalInformation />
                        <Education />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Skills />
                        <Experience />
                        {/* 
                        <Projects />
                        <Certifications />
                        */}
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </Container>
    );
}

