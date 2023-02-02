
import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { ThemeProvider, createTheme } from "@mui/material";
import { ServerURL, getData,postData} from "../../../Services/FetchNodeServices";
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
import { useStyles4 } from './DisplayCompanycss';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DisplayCompanys() {
    const [icons, seticon] = useState({
        filename: "/assets/car1.jpg",
        bytes: "",
      });
      const [companyname, setCompanyname] = useState("");
      const[companyid,setCompanyid]=useState('')
      const classes = useStyles4();
      const [company, setCompany] = useState([]);
      const [open, setOpen] = React.useState(false);
      
      const[buttonstatus,setButtonStatus]=useState(false)
      ///////////////////////////////////////
      ///////fetcher////////////////////////
      const fetchCategroy = async () => {
        var result = await getData("company/displaycompany");
        // alert(result.status);
        setCompany(result.data);
      };
      const deleteData= async()=>{
        
        
        var response = await postData("company/deletecompany", {companyid});
        
        
            window.location.reload();
        
      }
      /////////////////////////////////////////
    
     
    //////////////////handler////////////////
    const handleCategoryname = (event) => {
      setCompanyname(event.target.value);
      
    };
      const handleDialog = (rowData) => {
        setCompanyid(rowData.companyid)
        seticon({ filename: `${ServerURL}/images/${rowData.icon}` });
        setCompanyname(rowData.companyname);
      
        
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      useEffect(function () {
        fetchCategroy();
      }, []);
      const  handleButton=()=>{
         
         {buttonstatus?setButtonStatus(false):setButtonStatus(true)}
      }
      const showButton=()=>{
        
         return(<div class={classes.center}>
            {buttonstatus?<> <Button variant="contained" component="label" >
                      Upload New Image
                      <input  onChange={handleImage} hidden accept="image/*" multiple type="file"  />
                    </Button>
                    <br/>
                 
                    </>:<></>}
         </div>)
    
    
      }
      const handleImage = (event) => {
        alert('hey')
        seticon({
          filename: URL.createObjectURL(event.target.files[0]),
          bytes: event.target.files[0]
        })
      }
      const handleUpdate=async()=>{
        
        var formdata = new FormData();
        formdata.append('companyname',companyname)
        
        formdata.append('icon',icons.bytes)
        formdata.append('companyid',companyid)
        var response= await postData('company/updatecompany',formdata)
        window.location.reload();
      }
      
    
  return (
    <>
    <div className={classes.mainC}>
        <div className={classes.display}>
          <MaterialTable
            title="Category Display"
            columns={[
              { title: "Company Id", field: "companyid" },
              { title: "Company name", field: "companyname" },
              {
                field: "url",
                title: "Company Logo",
                render: (rowData) => (
                  <img
                    src={`${ServerURL}/images/${rowData.icon}`}
                    style={{ width: 50, borderRadius: "50%" }}
                  />
                ),
              },
            ]}
            data={company}
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
                  label="Company Name"
                  id="fullWidth"
                  value={companyname}
                  onChange={handleCategoryname}
                />
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
            <Button onClick={handleButton}>Edit Image</Button>
            <Button onClick={deleteData} autoFocus>
              Delete
            </Button>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}
