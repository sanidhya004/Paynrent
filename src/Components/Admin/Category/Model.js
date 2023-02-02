import React from "react";
import { useState, useEffect } from "react";
import { modelStyles } from "./Modelcss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import {
  ServerURL,
  postData,
  getData,
} from "../../../Services/FetchNodeServices";
import { FormatIndentDecreaseSharp } from "@mui/icons-material";
export default function Model() {
  const classes = modelStyles();
 
  const [category, setCategory] = React.useState([]);
  const [subcategory, setsubCategory] = React.useState([]);
  const [categorymodel, setCategorymodel] = useState("");
  const [companymodel, setCompanymodel] = useState("");
  const [company, setCompany] = useState([]);
  const[ratings,setRatings]=useState("");
const[fueltype,setfueltype]=useState("");
const[color,setcolor]=useState("");
const[status,setstatus]=useState("");
const[modelid,setmodelid]=useState("");
const[vendorid,setvendorid]=useState("");
const[registrationnumber,setregistrationnumber]=useState("");
const[capacity,setcapacity]=useState("");
const[remarks,setremarks]=useState("")
const[feature,setfeature]=useState("")

const [icons, seticon] = useState({
  filename: "/assets/car1.jpg",
  bytes: ''
});

  const [subcategorymodel, setsubCategorymodel] = useState("");
  const[average,setaverage]=useState('')
  const handleImage = (event) => {
    seticon({
      filename: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0]
    });
    
  };
  const handlefeature=(event)=>{
     setfeature(event.target.value)
  }
  const handleaverage=(event)=>{
     setaverage(event.target.value)
  }
  const handlemodelid=(event)=>{
     setmodelid(event.taregt.value)
  }
  const handlevendorid=(event)=>{
    setvendorid(event.target.value)
  }
  const handleregistration=(event)=>{
     setregistrationnumber(event.target.value)
  }
  const handleColor=(event)=>{
    setcolor(event.target.value)
  }
  const handlefuel=(event)=>{
     setfueltype(event.taregt.value)
  }
  const handlecapacity=(event)=>{
    setcapacity(event.target.value)
  }
  const handlestatus=(event)=>{
    setstatus(event.target.value)
  }
  const handleremarks=(event)=>{
    setremarks(event.target.value)
  }
  const handleCompany = (event) => {
    setCompanymodel(event.target.value);
  };
  const handleRatings=(event)=>{
     setRatings(event.target.value)
  }
  const handleSubcategory = (event) => {
    setsubCategorymodel(event.target.value);
  };
  const handleCategory = (event) => {
    setCategorymodel(event.target.value);
  };
  const fetchcategory = async () => {
    var result = await getData("displaycategory/displaycategory");
    setCategory(result.data);
  };
  const fetchsubCategory = async () => {
    var result = await getData("displaycategory/displaysubcategoryforselect");
    setsubCategory(result.data);
  };
  const fetchCompany = async () => {
    var result = await getData("company/displaycompany");
    setCompany(result.data);
  };

  const menuadd = () => {
    return category.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>;
    });
  };
  const menuadd2 = () => {
    return subcategory.map((item) => {
      if (item.categoryname == categorymodel) {
        return (
          <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
        );
      }
    });
  };
  const menuadd3 = () => {
    return company.map((item) => {
      if (
        item.categoryid == categorymodel &&
        item.subcategoryid == subcategorymodel
      ) {
        return <MenuItem value={item.companyid}>{item.companyname}</MenuItem>;
      }
    });
  };
  const handleUpload = async () => {
    var formdata = new FormData();
    formdata.append('categoryid',categorymodel)
    formdata.append('subcategoryid',subcategorymodel)
    formdata.append('companyid',companymodel)
    formdata.append('modelid',modelid)
    formdata.append('vendorid',vendorid)
    formdata.append('registrationnumber',registrationnumber)
    formdata.append('color',color)
    formdata.append('fueltype',fueltype)
    formdata.append('ratings',ratings)
    formdata.append('average',average)
    formdata.append('remarks',remarks)
    formdata.append('capacity',capacity)
    formdata.append('status',status)
    formdata.append('feature',feature)
    formdata.append('icon',icons.bytes)
     
     
    var response = await postData("vehicle/addmodel", formdata);
    
     
     
     };
  useEffect(function () {
    fetchcategory();
    fetchsubCategory();
    fetchCompany();
  }, []);
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.box1}>
          <div className={classes.input}>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categorymodel}
                  label="Category"
                  onChange={handleCategory}
                >
                  {menuadd()}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sub Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subcategorymodel}
                  label="Sub Category"
                  onChange={handleSubcategory}
                >
                  {menuadd2()}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Company</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={companymodel}
                  label="Sub Category"
                  onChange={handleCompany}
                >
                  {menuadd3()}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className={classes.input}>
            <TextField
              
              id="outlined"
              label="Model Name"
              // value={modelid}
              onChange={handlemodelid}
             
            />
             <TextField
              
              id="outlined-disabled"
              label="Vendor ID"
              // value={vendorid}
              onChange={handlevendorid}
            />
           
        </div>
        <div className={classes.input}>
            <TextField
              fullWidth
              id="outlined-disabled"
              label="Registartion Number"
              // value={registrationnumber}
              onChange={handleregistration}
             
            />
             
           
        </div>
        <div className={classes.input}>
            <TextField
              fullWidth
              id="outlined-disabled"
              label="Feature"
              // value={feature}
              onChange={handlefeature}
             
            />
             
           
        </div>
        <div className={classes.input}>
        <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ratings</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ratings}
                  label="Sub Category"
                  onChange={handleRatings}
                >
                  <MenuItem value={1}>1</MenuItem>
                 <MenuItem value={2}>2</MenuItem>
                 <MenuItem value={3}>3</MenuItem>
                 <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                   
                </Select>
              </FormControl>
            </Box>
            
             <TextField
              
              id="outlined-disabled"
              label="Average"
              // value={average}
              onChange={handleaverage}
            />
           
        </div>
        <div className={classes.input}>
            <TextField
              
              id="outlined-disabled"
              label="Color"
              // value={color}
              onChange={handleColor}

             
            />
             <TextField
              
              id="outlined-disabled"
              label="Fueltype"
              // value={fueltype}
              onChange={handlefuel}
             
            />
             <TextField
              
              id="outlined-disabled"
              label="Capacity"
              // value={capacity}
              onChange={handlecapacity}
             
            />
             <TextField
              
              id="outlined-disabled"
              label="Status"
              // value={status}
              onChange={handlestatus}
             
            />
             
           
        </div>
        <div className={classes.input}>
            <TextField
               fullWidth 
              id="outlined-disabled"
              label="Remarks"
              // value={remarks}
               onChange={handleremarks}
            />
             
           
        </div>
        <br/>
        <Button variant="contained" component="label"fullWidth  >
            Upload
            <input  onChange={handleImage}hidden accept="image/*" multiple type="file" />
          </Button>
          <br />
          <Button variant="contained" onClick={handleUpload}>
            Set
          </Button>

        
        </div>
        

        <div className={classes.box2}>
        <img src={icons.filename} className={classes.picturedisplay} />
        </div>
      </div>
    </>
  );
}
