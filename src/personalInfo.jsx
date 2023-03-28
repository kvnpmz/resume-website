import {
    Typography,
    Box,
    Grid,
    Paper,
    ListItem,
    ListItemText,
    ListItemIcon,
    List,
    Avatar,
    Divider,
} from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import headshot from './headshot.jpg';

export default function PersonalInformation() {
    return (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
            <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
            >
            <Avatar src={headshot} sx={{ width: 100, height: 100 }} />
            <Typography variant="h5">Kevin Pomerantz</Typography>
            <Typography variant="subtitle1">Data Analyst</Typography>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Email />
                    </ListItemIcon>
                    <ListItemText primary={<a href="mailto:kevinpomerantz@gmail.com">kevinpomerantz@gmail.com</a>} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GitHub />
                    </ListItemIcon>
                    <ListItemText primary={<a href="https://github.com/kvnpmz">github.com/kvnpmz</a>} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <LinkedIn />
                    </ListItemIcon>
                    <ListItemText primary={<a href="https://linkedin.com/in/kevinpomerantz/">linkedin.com/in/kevinpomerantz/</a>} />
                </ListItem>
            </List>
            </Paper>
        </Grid>
    );
}

