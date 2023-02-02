import React from 'react'
import './offer.css'
import { useEffect,useState } from "react";
import { Avatar } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getData ,ServerURL} from "../Services/FetchNodeServices";
export default function Offer() {
  
    const[offer,setOffer]=useState([])
    const fetchOffer = async () => {
        var result = await getData("Homepage/getcode");
        // alert(result.status);
        setOffer(result.data)
        handleoffer()
         
      };
      useEffect(function () {
        fetchOffer();
      }, []);
    const handleoffer=()=>{
      return(
        offer.map((item)=>{
          
          return(<div className="card" style={{height:'99px',width:'366px',display:'flex'}}>
           
            <div><img src={`${ServerURL}/images/${item.image}`}/></div>
            

            </div>)
           
        })
      ) 
    }
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
  return (
    <div style={{backgound:'white'}}>
        <h1>Offers</h1>
      <Carousel responsive={responsive} >
         {handleoffer()}
      </Carousel>
      
    </div>
  );
  
}
