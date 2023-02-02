import React from "react";
import { useState } from "react";
import "./Search.css";
import AppBar from "@mui/material/AppBar";

import { TextField } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import Datepicker from "./Datepicker";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SearchBar() {
  const [city, setCity] = useState("Gwalior");
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  return (
    
      <div className="main-c">
        <div className="city">
          <div style={{width:'50%',marginLeft:'10px'}}>
          <p style={{ fontSize: "90%" }}> Location</p>
          <p style={{ display: "flex" }}>
            <LocationOnIcon />
            <TextField
              id="outlined-read-only-input"
              variant="standard"
              value={city}
              onChange={handleCity}
              InputProps={{
                readOnly: true,
                disableUnderline: true,
                
              }}
            />
          </p>
          </div>
          
        </div>
        <div className="from">
          <div style={{width:'100%',marginLeft:'10px'}}>
          <p>
            <Datepicker />
          </p>
          </div>
          
        </div>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'30%'}}><div className="main-btn"> Modify Search</div></div>
       
      </div>
    
  );
}
