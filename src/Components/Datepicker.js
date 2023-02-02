import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from "@material-ui/core/styles";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



export default function MaterialUIPickers() {
  const [start, setStart] = React.useState(new Date());
   const [end, setEnd] = React.useState(new Date());
  
  const handleChangestart = (newValue) => {
    setStart(newValue);
    
      
  };
  const handleChangeend = (newValue) => {
    setEnd(newValue);
    
      
  };
 
  


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{display:'flex',marginTop:'8px'}}>
       <div className="date-elements" style={{height:'100%'}}>
          <p style={{fontSize:'90%',height:'50%',overflowX:'hidden',display:'flex'}}>Start Date</p>
          <div style={{width:'70%'}}>
          <DateTimePicker
          InputProps={{
            disableUnderline: true,
             
           }}
           
            inputFormat="DD.MM.YYYY"
          value={start}
          onChange={handleChangestart}
          renderInput={(params) => <TextField variant='standard'  {...params} />}
        />
          </div>

       </div>
       <div className="date-elements" style={{height:'100%'}}>
          <p style={{fontSize:'90%',height:'50%',overflowX:'hidden',display:'flex'}}>End Date</p>
          <div style={{width:'70%'}}>
          <DateTimePicker
          
          InputProps={{
            disableUnderline: true,
           }}
            inputFormat="DD.MM.YYYY"
          value={end}
          onChange={handleChangeend}
          renderInput={(params) => <TextField variant='standard'   {...params} />}
        />
          </div>

       </div>

       </div>
        
         
      
    </LocalizationProvider>
  );
}

