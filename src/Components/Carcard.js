import React from "react";
import "./Carcard.css"
import { useState, useEffect } from "react";
import { getData ,ServerURL} from "../Services/FetchNodeServices";
import { Button } from "@mui/material";
function Carcard(props) {
  const [vehicle, Setvehicle] = useState([]);
  const fetchvehicle = async () => {
    var result= await getData('Result/displayvehicle')
    Setvehicle(result.data)
    handleCard()
  };
 
  useEffect(function () {
    fetchvehicle();
    
   
  }, []);
  const handleCard = () => {
    return vehicle.map((item) => {
     return(<div>
      <div className="card" >
     <div className="pic"><img src={`${ServerURL}/images/${item.orignalpicture}`} width='200px'/></div>
     <div className="vehiclename">Vehiclename</div>
     <div className="feature">
        <div className="feature-entry">Petrol Type</div>
        <div className="feature-entry">Fuel Type</div>
        <div className="feature-entry">Seater</div>
     </div>
     <div style={{display:'flex',justifyContent:'space-between'}}>
     <div className="price">$</div>
     <Button variant="contained" size="large" style={{marginRight:'10px',backgroundColor: '#0ebaba'}}>Book </Button>
     </div>
    
    </div>
     </div>)
    });
  };
  return (
    
      <div className="main">{handleCard()}</div>
   
  );
}

export default Carcard;
