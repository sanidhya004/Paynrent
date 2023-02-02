import React from 'react'
import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";

import { Button } from "@mui/material";


import { makeStyles } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { spacing } from "@mui/system";
import { ServerURL, postData,getData } from "../../../Services/FetchNodeServices";
import { useStyles3 } from './CompanyCss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Company() {
    const classes = useStyles3();
    
  ///////////////mui ki const////////////////////////////
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  /////////////////my const////////////////////////////////

  const[category,setCategory]=useState([])
  const[subCategory,setsubCategory]=useState([])
  const [icons, seticon] = useState({
    filename: "/assets/car1.jpg",
    bytes: ''
  });
  const [categoryid, setCategoryid] = React.useState('');
  const [subcategoryid, setsubCategoryid] = React.useState('');


  const handleChange = (event) => {
    setCategoryid(event.target.value);
    fetchsubCategory();

   
  };
  const handleImage = (event) => {
    seticon({
      filename: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0]
    });
}
const handleUpload = async () => {
     var formdata = new FormData();
    formdata.append("icon", icons.bytes);
    formdata.append("subcategoryid", subcategoryid);
    
    var response = await postData("company/addcompany", formdata);
  
  };
const handlesubchoice=(event)=>{
     setsubCategoryid(event.target.value)
}
const[companyname,setcompanyname]=useState('')
const handleCompanyname=(event)=>{
     setcompanyname(event.target.value)
}
  ////////////////////////////////////////////////////
  /////////////////IMPORTANT FUCNTION SERVER SIDE/////////////////// 
    const fetchCategory=async()=>{
        var result = await getData("displaycategory/displaycategoryforselect");
        setCategory(result.data)
        



    }
    const fetchsubCategory=async()=>{
         var result=await getData('displaycategory/displaysubcategoryforselect')
         setsubCategory(result.data)
        
    }
  
    const menuadd=()=>{
        return category.map((item)=>{
          
             return( <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>)
        })
      
         
    }
    const menuadd2=()=>{
        return subCategory.map((item)=>{
             if(item.categoryname==categoryid){
                return( <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>)
             }
             
        })
    }
    useEffect(function () {
        fetchCategory();
       

      }, []);
      
  ////////////////////////////////////////////////////////////////
  return (
     <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              PayNrent
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <div className={classes.mainContainer}>
      <div className={classes.box1}>
         <div className={classes.selectbox}>
         <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={categoryid}
          onChange={handleChange}
          label="Age"
        >
         {menuadd()} 
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={subcategoryid}
          onChange={handlesubchoice}
          label="Age"
        >
        {menuadd2()}
        </Select>
      </FormControl>

         </div>
         <br/>
         <TextField
            fullWidth
            label="Company Name"
            id="fullWidth"
            onChange={handleCompanyname}
          />{" "}
          <br />
          <Button variant="contained" component="label"  >
            Upload
            <input  hidden accept="image/*" multiple type="file" onChange={handleImage} />
          </Button>
          <br />
          <Button variant="contained"  onClick={handleUpload}>
            Set
          </Button>
      </div>
      <div className={classes.box2}>
      <img src={icons.filename} className={classes.picturedisplay}  />
      </div>
      </div>

     </>
  )
}
