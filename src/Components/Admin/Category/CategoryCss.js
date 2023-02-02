import {makeStyles} from "@mui/styles";
import { blue, purple } from '@mui/material/colors';
import { borderRadius, display, height, padding, width } from "@mui/system";
export const useStyles= makeStyles({
     mainContainer:{
        display:'flex',
             
        justifyContent :'center',
        alignItems :'center',
        background:'#FFFFFF',
        width:'100vw',
        height:'100vh',


     },
     box1:{
         width:'50%',
         padding:'30px 30px 30px 30px',
         height:'auto',
         background:'#F4F4F2',
        //  border:'solid',
         borderRadius:'10px',
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         flexDirection:'column'

     },
     box2:{
        width:'50%',
        display:'flex',
         justifyContent:'center',
         alignItems:'center',
        padding:'30px 30px 30px 30px',
        height:'75%',
        background:'white',
       //  border:'solid',
       
        borderRadius:'10px',

    },
     headingtext:{

     },
     toolbar:{
        background:'#212121',
        
     },
     btn:{
        background:'#212121'
     },
     uploadbox:{
          height:'150px',
          width:'100px',
          border:'dotted',
     },
     picturedisplay:{
      width: '100%',
      height:'100%',
      // borderRadius:'300px',
      objectFit:'contain',
     
     
     },
     smallbox:{
          display:'flex'
     }
    

})