import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './Header.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 340,
  bgcolor: '#ffffff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box className="header">
      <Box className="header-title">Movies List</Box>
      <Box display="flex" sx={{ alignItems: 'center' }}>
        <Button className="company-info" variant="ctext" onClick={handleOpen}>
          Company info
        </Button>
        <MoreVertIcon />
        <Button variant="text">
          <Link className="registered-users" to="/RegisteredUsers">
            Registered Users
          </Link>
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ mt: 1 }}>
            <b>Company:</b> Geeksynergy Technologies Pvt Ltd
            <br />
            <b>Address:</b> Sanjayanagar, Bengaluru-56
            <br />
            <b>Phone:</b> XXXXXXXXX09
            <br />
            <b>Email:</b> XXXXXX@gmail.com
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Header;
