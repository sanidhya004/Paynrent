import React from "react";
import FilterCtaegory from "./FilterCtaegory";
import "./Resultpage.css";
import Appbar from "./Appbar";
import Showbrands from "./Showbrands";
import Carousel from "react-multi-carousel";
import Carcard from "./Carcard";
import SearchBar from "./SearchBar";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useState, useEffect } from "react";
import { getData ,ServerURL} from "../Services/FetchNodeServices";
import { Button } from "@mui/material";
import { json } from "react-router-dom";


function ResultPage() {
  const [vehicle, Setvehicle] = useState([]);
  const[tempvehicle,SetTempvehicle]=useState([]);
  const fetchvehicle = async () => {
    var result= await getData('Result/displayvehicle')
    Setvehicle(result.data)
    SetTempvehicle(result.data)
    handleCard()
  };
 
  useEffect(function () {
    fetchvehicle();
    
   
  }, []);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [age, setAge] = React.useState("Popularity");
  
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
  


  const handleChange = (event) => {
    setAge(event.target.value);

  };
  
   
 const CategoryFilter=(ids)=>{
     var category=Object.values(ids)
     
     var condition=""
      for(var i=0;i<category.length;i++){
         condition=condition+'item.categoryid=='+category[i]+'||'
      }
      condition=condition.substring(0,condition.lastIndexOf('||'))
      

      var temp=tempvehicle.filter((item)=>{
         return eval(condition)
      })
    
    Setvehicle(temp)
    handleCard()
     

 }
 const filterOperation=(parameters)=>{
    CategoryFilter(parameters)
   

 }
  return (
    <>
      <div className="main-container">
        <div>
          <Appbar />
        </div>
        <div className="searchbar" style={{ backgroundColor: "white" }}>
          <SearchBar />
        </div>

        <div style={{ display: "flex" }}>
          <div className="filterbar">
            <div className="filterbarHeadings">
              <div style={{ fontSize: "24px", fontWeight: "600" }}>
                <b>Filters</b>
              </div>
              <div style={{ color: "#0ebaba" }}>Reset All</div>
            </div>
            <br />
            <div className="brand" style={{ height: "10%" }}>
              <Showbrands />
            </div>

            <div className="category" style={{ height: "35%" }}>
              <FilterCtaegory  filterOperation={filterOperation}/>
            </div>

            <div className="subcategory"></div>
          </div>
          <div className="carcardcontainer">
            <div className="show1">
              <div className="cityshow">
                <p>Car Rental in <b>Gwalior</b></p>
              </div>
              <div className="petrol">
                Prices exclude fuel cost
                <Switch {...label} defaultChecked />
              </div>
              <div className="sort">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    defaultValue="Popularity"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="show">
              <div className="main">
                  {handleCard()}
              </div>
            </div>
            <div className="adv">
              <b>Rent car by Make</b>
              <div className="smallletter">Maruti | Hyundai | Mahindra | Toyota | Honda</div>
            </div>
            <div className="adv">
              <b>Rent car by Model</b>
              <div className="smallletter">Grand i10 | Scorpio | XUV | Celerio | Baleno | Swift | Swift Dzire | Ertiga | Innova Crysta | Ciaz AT | Creta | Alto K10 | Brezza | Santro MT | Santro AT | Swift AT | Brezza AT | Baleno AT | XUV300 (P) | XUV300 | Amaze | Ciaz | Elite i20 | KUV100 | Marazzo | Verna MT | Creta AT | Venue AT | Baleno (P) | Elite i20 (P)</div>
            </div>
            <div className="adv">
              <b>Rent car by Body Type</b>
              <div className="smallletter">Hatchback | Sedan | SUV | MUV</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
         Serviceable Cities
      </div>
      <div className="aboutservice"></div>
    </>
  );
}

export default ResultPage;
