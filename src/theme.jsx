import { createTheme } from "@mui/material/styles";

const whiteColor = "#fefcec";

const theme = createTheme({
    typography: {
        fontFamily: "Ubuntu, sans-serif",
    },
    palette: {
        background: {
            default: "#003366",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: "2rem",
                    backgroundColor: whiteColor,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: "0.4rem",
                    backgroundColor: whiteColor,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)",
                },
            },
        },
    },
});

export default theme;
