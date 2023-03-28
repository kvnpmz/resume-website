import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export default function Header() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                    Kevin Pomerantz
                </Typography>
                <Typography variant="subtitle1" component="div">
                    Data Analyst • Business Analyst • Business Intelligence Specialist • BI Consultant • Data Scientist
                </Typography>
                </Box>
                <Box>
                    <IconButton color="secondary" sx={{ bgcolor: '#0A2A5E' }}>
                    <MailIcon sx={{ color: '#fff' }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

