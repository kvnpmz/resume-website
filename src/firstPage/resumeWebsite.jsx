import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Header from "./header";
import Footer from "./footer";
import PersonalInformation from "./personalInfo";
import Skills from "./skills";
import CoreCompetencies from "./coreComp";
import Experience from "./experience";
import About from "./about";
import Education from "./education";
import Banner from "./banner";
//import Projects from "./projects";
//import Certifications from "./certifications";

export default function ResumeWebsite() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Banner />
            <Container maxWidth="lg" sx={{ mt: "3rem", mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2}>
                            <PersonalInformation />
                            <Education />
                            <CoreCompetencies />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2}>
                            <About />
                            <Skills />
                            <Experience />
                                              </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />

                            {/*   <Projects />
                        <Certifications />

                        */}
        </ThemeProvider>
    );
}
