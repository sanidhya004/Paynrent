import React from "react";
import { useState } from "react";
import { homepagestyle } from "./Homepagecss";
import Navabar from "./Navbar";
import Appbar from "../../Components/Appbar";
import "./homepage.css";
import Selectcity from "./Selectcity";
import { Avatar } from "@mui/material";
import { TextField } from "@material-ui/core";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import Mycard from "../../Components/Mycard";
import Calendar from "react-calendar";
import Offer from "../../Components/Offer";
import WPNR from "../../Components/WPNR";
import Datepicker from "../../Components/Datepicker";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchBar from "../../Components/SearchBar";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";


export default function Homepage() {
  const classes = homepagestyle();
  const [isClicksubsc, setClicksubsc] = useState(false);
  const [isClickrental, setClickrental] = useState(true);

  const handlepanel = () => {
    if (isClicksubsc == false) {
      setClicksubsc(true);
      setClickrental(false);
    } else {
      setClicksubsc(false);
      setClickrental(true);
    }
  };
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
  return (
    <>
      <div>
        <Appbar />
      </div>

      <div className="hero1">
        <div className="selectionbox">
          <div className="subscription">
            <div
              className={isClickrental ? "rental active" : " rental"}
              onClick={handlepanel}
            >
              <h2 className="font">Rental</h2>
            </div>
            <div
              className={isClicksubsc ? "subsc active" : " subsc"}
              onClick={handlepanel}
            >
              <h2 className="font">Subscription</h2>
            </div>
          </div>
          <div className="center rentalposter">
            <img src="/assets/rental.png" width={200} height={200} />
            <h4 className="font rentaladjust">PaynRent Rental Service</h4>
          </div>

          

          <div className="location">
            <div className="locationcontainer">
              <div className="location__city">
                 <Selectcity/>
              </div>
              <div
                className="date"
                style={{
                  display: "flex",
                  marginLeft: "15px",
                  marginRight: "15px",
                  height: "50%",
                }}
              >
                <div className="pickdate"></div>
                <div className="dropdate">End Date</div>
              </div>
            </div>
            <br />
            <Button variant="contained" className="main-btn">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="hero2">
        <Mycard />
        <br />
        <Offer />
        <br />
        <WPNR />
      </div>
    </>
  );
}
