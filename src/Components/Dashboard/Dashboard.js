import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Appbar from '../Appbar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Paper } from '@material-ui/core';
import { dashboardcss } from './Dashboardcss';
import Category from '../Admin/Category/Category';
import SubCategory from '../Admin/Category/SubCategory';
import DisplayCategory from '../Admin/Category/DisplayCategory';
import DisplaySubCategory from '../Admin/Category/DisplaySubCategory';
import Company from '../Admin/Category/Company';
import DisplayCompanys from '../Admin/Category/DisplayCompanys';
import Model from '../Admin/Category/Model';
import DisplayModel from '../Admin/Category/DisplayModel';
import Button from '@mui/material/Button';
import TimeToLeaveSharpIcon from '@mui/icons-material/TimeToLeaveSharp';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Dashboard() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const handleAlert=()=>{
         alert('hey')
      }
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Category', 'Subcategory', 'Vehicles', 'Model'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleAlert}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
      const classes=dashboardcss()
  return (
   <>
      <div className={classes.main}>
      <div className={classes.sidebar}> 
           <div className={classes.dashboard}>
              Dashboard
           </div>
           <div className={classes.sidebuttons}>
           <div  style={{width:'100%',color:'white',fontSize:'18px',marginBottom:'9px',cursor:'pointer'}}> Add Company</div>
           <div   style={{width:'100%',color:'white',fontSize:'18px',marginBottom:'9px',cursor:'pointer'}}>Add Category</div>
           <div   style={{width:'100%',color:'white',fontSize:'18px',marginBottom:'9px',cursor:'pointer'}}>Add Subcategory</div>
          <div   style={{width:'100%',color:'white',fontSize:'18px',marginBottom:'9px',cursor:'pointer'}}>Add Vehicle</div>
           </div>
         
      
      
      </div>
    <div className={classes.mainbar}><div><Appbar/></div>
    
    <div className={classes.quickstats}>
     <div>
       
     </div>
    </div></div>
      </div>
    
      
   
    </>
  )
}
