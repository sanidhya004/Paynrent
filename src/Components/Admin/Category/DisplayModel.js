import React, { useState, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MaterialTable from "@material-table/core";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  ServerURL,
  getData,
  postData,
} from "../../../Services/FetchNodeServices";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import { useStyles3 } from "./DisplaySubCategorycss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Avatar from "@mui/material/Avatar";
import { NativeSelect } from "@material-ui/core";

export default function DisplayModel() {
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
  ////////////////////////////////////////////////////
  /////////////kam ke const////////////
  const fetchsubCategroy = async () => {
    var result = await getData("displaycategory/displaysubcategory");
    // alert(result.status);
    setselectsubcategory(result.data);
  };
  const fetchCategroy = async () => {
    var result = await getData("displaycategory/displaycategory");
    // alert(result.status);
    setselectcategory(result.data);
  };
  const [icons, seticon] = useState({
    filename: "/assets/car1.jpg",
    bytes: "",
  });
  const [subcategoryname, setsubCategoryname] = useState("");
  const [selectcategory, setselectcategory] = useState([]);
  const [selectsubcategory, setselectsubcategory] = useState([]);
  const [priority, setPriority] = useState("");
  const [subcategory, setsubCategory] = useState("");
  const classes = useStyles3();
  const [vehicle, setvehicle] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [buttonstatus, setButtonStatus] = useState(false);
  const [category, setCategory] = useState("");
  const [registrationnumber, setRegistrationnumber] = useState("");
  const[color,setColor]=useState("");
  const[vehicleid,setVehicleid]=useState('');
  ///////////////////////////////////////
  ///////fetcher////////////////////////
  const fetchvehicle = async () => {
    var result = await getData("vehicle/displayvehicle");
    // alert(result.status);
    setvehicle(result.data);
  };

    const handleDelete = async () => {
      var response = await postData("vehicle/deletevehicle", {
        vehicleid,
      });
      handleClose()
      
    };
  const menuadd = () => {
    return selectcategory.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>;
    });
  };
  const menuadd2 = () => {
    return selectsubcategory.map((item) => {
      if (item.categoryname == category) {
        return (
          <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
        );
      }
    });
  };
  /////////////////////////////////////////

  //////////////////handler////////////////
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handlesubCategory = (event) => {
    setsubCategory(event.target.value);
  };
  const handleColor = (event) => {
    setColor(event.target.value);
  };
  const handleImage = (event) => {
    seticon({
      filename: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };
  const handleDialog = (rowData) => {
    setCategory(rowData.categoryid);
    seticon({ filename: `${ServerURL}/images/${rowData.orignalpicture}` });
    setsubCategory(rowData.subcategoryid);
    setRegistrationnumber(rowData.registrationnumber);
    setColor(rowData.color)
    setVehicleid(rowData.vehicleid)

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(function () {
    fetchvehicle();
    fetchCategroy();
    fetchsubCategroy();
  }, []);
  const handleButton = () => {
    {
      buttonstatus ? setButtonStatus(false) : setButtonStatus(true);
    }
  };
  const handleRnumber=(event)=>{
     setRegistrationnumber(event.target.value)
  }

  const showButton = () => {
    return (
      <div class={classes.center}>
        {buttonstatus ? (
          <>
            {" "}
            <Button
              variant="contained"
              component="label"
              onChange={handleImage}
            >
              <h4>Upload<br/><h5>vehicle image</h5> </h4>
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <br />
            <br />
          </>
        ) : (
          <></>
        )}
      </div>
    );
  };
    const handleUpdate = async () => {
      
      var formdata = new FormData();
      formdata.append('categoryid',category)
      formdata.append('subcategoryid',subcategory)
      formdata.append('registrationnumber',registrationnumber)
      formdata.append('color',color)
      formdata.append('vehicleid',vehicleid)
      
      formdata.append("icon", icons.bytes);
      
      var response = await postData("vehicle/updatevehicle", formdata);
    };
  /////////////////////////////////////////
  return (
    <div>
      <>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              size="large"
              edge="start"
              color="default"
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

        <div className={classes.mainC}>
          <div className={classes.display}>
            <MaterialTable
              title="SubCategory Display"
              columns={[
                { title: " Vehicle Id", field: "vehicleid" },
                { title: "Registration Number", field: "registrationnumber" },
                {
                  field: "url",
                  title: "Category Logo",
                  render: (rowData) => (
                    <img
                      src={`${ServerURL}/images/${rowData.orignalpicture}`}
                      style={{ width: 50, borderRadius: "50%" }}
                    />
                  ),
                },
              ]}
              data={vehicle}
              actions={[
                {
                  icon: "edit",
                  tooltip: "edit",
                  onClick: (event, rowData) => handleDialog(rowData),
                },
              ]}
            />
          </div>
        </div>

        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <div className={classes.mainContainer}>
                <div className={classes.box1}>
                  <Box sx={{ minWidth: 200 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Age"
                        onChange={handleCategory}
                      >
                        {menuadd()}
                      </Select>
                    </FormControl>

                    <br />
                    <br />
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Sub Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subcategory}
                        label="Age"
                        onChange={handlesubCategory}
                      >
                        {menuadd2()}
                      </Select>
                    </FormControl>
                  </Box>
                  <br />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Color"
                    variant="filled"
                    multiline
                    maxRows={4}
                    value={color}
                    onChange={handleColor}
                  />
                  <br />
                  
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Registration Number"
                    variant="filled"
                    multiline
                    maxRows={4}
                    value={registrationnumber}
                    onChange={handleRnumber}
                  />
                  <br/>
                   <Button variant="outlined"onClick={handleUpdate}>Update</Button>
                </div>
                <div className={classes.box2}>
                  <img
                    src={icons.filename}
                    className={classes.picturedisplay}
                  />
                 
                </div>
                <br />
                {showButton()}
                <br/>
                
                
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleButton}>Edit Image</Button>
              <Button onClick={handleClose} autoFocus>
                Back
              </Button>
              <Button  onClick={handleDelete}autoFocus>Delete</Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    </div>
  );
}
