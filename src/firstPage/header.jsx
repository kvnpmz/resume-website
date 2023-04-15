import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
   <>
<Grid item>
     <AppBar position="static" sx={{m:0, p:0,}}> 
           <Toolbar sx={{boxShadow: "0px 2px 5px rgba(254, 252, 236, 0.6)"}}>

           <Typography
                sx={{
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
                    ml: "auto",
                    color: "#000",
                    fontSize: "1.2rem",
                    textAlign: "center",
                }}
            >
                Data Analysis • Business Intelligence • Data Science • Programming 
            </Typography>
</Toolbar>       
</AppBar>
</Grid>
</ >
);
}

