import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';

const EmailContactForm = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" 
sx={{
bgcolor: (theme) => theme.palette.background.default,
}}
onClick={handleClickOpen}>Hire Me</Button>
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: '25%', margin: 0, padding: 0, borderRadius:"2rem", } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
          <DialogTitle>Hire Me</DialogTitle>
          <DialogContent sx={{ padding: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
sx={{
mb:"1rem",
bgcolor: (theme) => theme.palette.background.default,
}}

 variant="contained" onClick={handleClose}>Cancel</Button>
            <Button
sx={{
mb:"1rem",
bgcolor: (theme) => theme.palette.background.default,
}}

 variant="contained" onClick={handleClose}>Send</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </ >
  );
};

export default EmailContactForm;
