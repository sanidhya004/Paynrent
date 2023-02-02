import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getData } from "../Services/FetchNodeServices";
import Checkbox from "@mui/material/Checkbox";

export default function FilterCtaegory(props) {
  const [category, setCategory] = useState([]);
  const[selected,setSelected]=useState({})
  const[selectedCategory,setSelectedCategory]=React.useState([])
  const fetchCategory = async () => {
    var result = await getData("Result/displaycategory");
  
    setCategory(result.data);
    handeloutput();
  };
  var handleCheckbox=(event)=>{
     var category=selected
     if(event.target.checked){
        category[event.target.value]=event.target.value
       
     }
     else{
       delete category[event.target.value]
       
     }

     props.filterOperation(category)
  }
  useEffect(function () {
    fetchCategory();
  }, []);
  const handeloutput = () => {
    return category.map((item) => {
      return (
        <FormControlLabel
          value={item.categoryid}
          control={<Checkbox />}
          label={item.categoryname}
          onClick={handleCheckbox}
        />
      );
    });
  };

  return (
    <>
      <FormGroup>{handeloutput()}</FormGroup>
    </>
  );
}
