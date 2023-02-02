import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";

import { Button } from "@mui/material";
import { useStyles } from "./SubCategoryCss";
import { makeStyles } from "@mui/material";
import * as React from "react";
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
import { ServerURL, postData } from "../../../Services/FetchNodeServices";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function SubCategory() {
  const classes = useStyles();
  ////////sates////////////////
  const [icons, seticon] = useState({
    filename: "/assets/car1.jpg",
    bytes: "",
  });
  const [subcategoryname, setsubCategoryname] = useState("");
  const [categoryname, setCategoryname] = useState("");
  const [priority, setPriority] = useState("");
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  /////////////handlers////////////
  const handleImage = (event) => {
    seticon({
      filename: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };
  const handlesubCategoryname = (event) => {
    setsubCategoryname(event.target.value);
  };
  const handleUpload = async () => {
    var formdata = new FormData();
    formdata.append("subcategoryname", subcategoryname);
    formdata.append("categoryname", categoryname);
    formdata.append("icon", icons.bytes);
    formdata.append("priority", priority);
    var response = await postData("subcategory/subcategorysubmit", formdata);
    alert(response.status);
  };
  const handleCategoryname = (event) => {
    setCategoryname(event.target.value);
  };
  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  /////////////////////////////////////
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
          <TextField
            fullWidth
            label="Sub Category Name"
            id="fullWidth"
            onChange={handlesubCategoryname}
          />{" "}
          <br />
          <div className={classes.smallbox}>
            <TextField
              fullWidth
              label="Category Id"
              onChange={handleCategoryname}
            />{" "}
            <br />
            <TextField
              id="outlined-name"
              label="Priority"
              onChange={handlePriority}
            />
          </div>
          <br />
          <Button variant="contained" component="label" onChange={handleImage}>
            Upload Sub category Logo
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <br />
          <Button variant="contained" onClick={handleUpload}>
            Set
          </Button>
        </div>
        <div className={classes.box2}>
          <Avatar
            alt="Remy Sharp"
            src={icons.filename}
            sx={{ width: 300, height: 300 }}
          />
        </div>
      </div>
    </>
  );
}
