import React from "react";
import "./selectcity.css";
import {Avatar} from "@material-ui/core";
import { Button } from "@material-ui/core";

import PropTypes from 'prop-types';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';

import ListSubheader from '@mui/material/ListSubheader';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function Selectcity() {
    const [open, setOpen] = React.useState(false);
    const[city,setCity]=React.useState('Select City')
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <div className="dialog">
        <DialogTitle id="alert-dialog-title">
          {"Select City"}
        </DialogTitle>
        <DialogContent className="dialogcontent" >
          <DialogContentText id="alert-dialog-description">
          <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader><b>{`${sectionId}`}</b></ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
        </div>
      </Dialog>
      <div className="mainconatiner">
        <div className="cityselect">
          <Button variant="outlined" className="selectcitybutton" onClick={handleClickOpen}>
            <Avatar
              alt="Remy Sharp"
              src="/assets/location-dot-solid.svg"
              sx={{ width: 24, height: 24 }}
            />
            {city}
          </Button>
        </div>
        <div className="schedule">
          
        </div>
      </div>
    </>
  );
}
