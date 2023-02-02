import React from 'react'
import { useEffect,useState } from "react";
import { getData,ServerURL } from "../Services/FetchNodeServices";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@material-ui/core/colors';
import { width } from '@mui/system';
import Carousel from 'react-multi-carousel';
function Showbrands() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    const[brands,setBrands]=useState([])
    const fetchbrands= async()=>{
        var result= await getData('Result/displaybrands');
        setBrands(result.data)
        handleBrands()
        
    }
    useEffect(function () {
        fetchbrands();
      }, []);
    const handleBrands=()=>{
         return(brands.map((item)=>{
              return(<Button variant="outlined" style={{backgroundColor:'rgba(170, 170, 170, 0.252)',borderColor:'white',color:'black',borderRadius:'20px'}}>{item.companyname}</Button>)
         })
         )
    }
  return (
    <div style={{marginTop:'10px'}}>
        <p>Brands</p>
        <Carousel responsive={responsive} >
         {handleBrands()}
      </Carousel>
        
    </div>
  )
}

export default Showbrands
