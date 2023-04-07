import { AppBar, Box, Typography } from "@mui/material";

export default function Header() {
    return (
        <AppBar
            position="static"
            sx={{
                p: "0.4rem",
                backgroundColor: "#EAF5FE",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)",
            }}
        >
            <Typography
                sx={{
                    mt: '0.3rem',
                    fontWeight: "bold",
                    color: "#000",
                    fontSize: "2rem",
                    textAlign: "center",
                }}
            >
                Kevin Pomerantz
            </Typography>
            <Typography
                sx={{
                    m: '0.3rem',
                    color: "#000",
                    fontSize: "1.2rem",
                    textAlign: "center",
                }}
            >
                Data Analyst • Business Analyst • Business Intelligence
                Specialist • BI Consultant • Data Scientist
            </Typography>
        </AppBar>
    );
}








