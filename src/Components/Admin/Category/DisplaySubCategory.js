import React, { useState, useEffect } from "react";
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


function DisplaySubCategory() {
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
  const [icons, seticon] = useState({
    filename: "/assets/car1.jpg",
    bytes: "",
  });
  const [subcategoryname, setsubCategoryname] = useState("");
  const[priority,setPriority]=useState("");
  const [subcategoryid, setsubCategoryid] = useState("");
  const classes = useStyles3();
  const [subcategory, setsubCategory] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [buttonstatus, setButtonStatus] = useState(false);
  ///////////////////////////////////////
  ///////fetcher////////////////////////
  const fetchsubCategroy = async () => {
    var result = await getData("displaycategory/displaysubcategory");
    // alert(result.status);
    setsubCategory(result.data);
  };
  const deleteData = async () => {
    var response = await postData("displaycategory/deletesubcategory", {
      subcategoryid,
    });
  };
  /////////////////////////////////////////

  //////////////////handler////////////////
  const handleCategory = (event) => {
    setsubCategoryname(event.target.value);
  };
  const handlePriority = (event) => {
    setPriority(event.target.value);
  };
  const handleImage = (event) => {
    seticon({
      filename: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };
  const handleDialog = (rowData) => {
    setsubCategoryid(rowData.subcategoryid);
    seticon({ filename: `${ServerURL}/images/${rowData.icon}` });
    setsubCategoryname(rowData.subcategoryname);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(function () {
    fetchsubCategroy();
  }, []);
  const handleButton = () => {
    {
      buttonstatus ? setButtonStatus(false) : setButtonStatus(true);
    }
  };
 
 
 const showButton=()=>{
   
    return(<div class={classes.center}>
       {buttonstatus?<> <Button
                  variant="contained"
                  component="label"
                  onChange={handleImage}
                >
                  <h4> Upload Sub category Logo</h4>
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <br />
               <br/>
            
               </>:<></>}
    </div>)


 }
 const handleUpdate=async()=>{
    alert('hey')
    var formdata = new FormData();
    formdata.append('categoryname',subcategoryname)
    formdata.append('icon',icons.bytes)
    formdata.append('categoryid',subcategoryid)
    var response= await postData('displaycategory/updatecategory',formdata)
  }
  ///////////////////////////////////////////
  return (
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
              { title: " SubCategory Id", field: "subcategoryid" },
              { title: "Name", field: "subcategoryname" },
              {
                field: "url",
                title: "Category Logo",
                render: (rowData) => (
                  <img
                    src={`${ServerURL}/images/${rowData.icon}`}
                    style={{ width: 50, borderRadius: "50%" }}
                  />
                ),
              },
            ]}
            data={subcategory}
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
                <TextField
                  fullWidth
                  label="Sub Category Name"
                  id="fullWidth"
                //   onChange={handlesubCategoryname}
                />{" "}
                <br />
                <div className={classes.smallbox}>
                  <TextField
                    fullWidth
                    label="Category Id"
                    // onChange={handleCategoryname}
                  />{" "}
                  <br />
                  <TextField
                    id="outlined-name"
                    label="Priority"
                    onChange={handlePriority}
                  />
                </div>
                <br />
                {showButton()}
                <br/>
                <Button variant="outlined"onClick={handleUpdate}>Update</Button>
                
              </div>
              <div className={classes.box2}>
              <img src={icons.filename} className={classes.picturedisplay} />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleButton}>Edit</Button>
            <Button onClick={handleClose} autoFocus>
              Back
            </Button>
            <Button onClick={deleteData} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default DisplaySubCategory;
