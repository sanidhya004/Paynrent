import { display, fontSize } from "@mui/system";
import {makeStyles} from "@mui/styles";
export const dashboardcss= makeStyles({
    quickstats:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
   },
   sidebar:{
       width:'15vw', backgroundColor:'#40404F',height:'100vh',color:'white',fontFamily:'Poppins'
       
   },
   main:{
    display:'flex',
   },
   dashboard:{

    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'#848482',fontFamily:'Poppins',
    fontSize:'24px',
   
   
   
   },
   sidebuttons:{
      borderTop:'solid',
      height:'80%',
    
      borderBottom:'solid',
      borderTopWidth:'0.4px',
      borderBottomWidth:'0.4px',
      display:'flex',
      flexDirection:'column',
      paddingTop:'50px',
      paddingLeft:'20px'
      
     
   },
   mainbar:{
      width:'85vw'
   }
})
