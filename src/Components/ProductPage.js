import React from "react";
import Appbar from "./Appbar";
import "./product.css";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const ProductPage = () => {
  return (
    <>
      <Appbar />
      <div className="productinter">
        <div className="left">
          <div className="left_showup">
            <div className="left_showup_picture">
              <div className="left_showup_picture_heading">
                Maruti Brezza AT
              </div>
              <div className="left_showup_picture_car">
                <img src="https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/brezza.png" />
              </div>
              <div className="left_showup_picture_minispec">
                <div className="center Poppins">
                  <EventSeatIcon
                    style={{ color: "#0ebaba" }}
                    fontSize="small"
                  />
                  5 seats
                </div>
                <div className="center Poppins">
                  <BrightnessHighIcon
                    style={{ color: "#0ebaba" }}
                    fontSize="small"
                  />
                  Automatic
                </div>
                <div className="center Poppins">
                  <EventSeatIcon
                    style={{ color: "#0ebaba" }}
                    fontSize="small"
                  />
                  5 seats
                </div>
              </div>
            </div>
            <div className="left_showup_text">
              <div className="left_showup_text_heading">
                <span className="textoverline">Booking Details</span>
              </div>
              <div className="left_showup_text_date">
                <div className="date">Fri, 13 Jan 15:00</div>
                <div className="date">
                  <div>
                    <TimeToLeaveIcon />
                  </div>
                  <div style={{ fontSize: "11px" }}>2 Days, 3 Hours</div>
                </div>
                <div className="date">Fri, 13 Jan 15:00</div>
              </div>
              <div className="left_showup_text_changes">
                <div>
                  <b>Mumbai</b>:Change City
                </div>
                <div>
                  <b>Pricing Plan: Includes 510 kms, excludes fuel</b>Change
                  plan
                </div>
              </div>
            </div>
          </div>
          <div className="left_showdown">
            <div className="left_showdown_heading">
              {" "}
              <span className="textoverline">IMPORTANT POINTS TO REMEMBER</span>
            </div>
            <div className="left_showdown_grid">
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  CHANGE IN PRICING PLAN:
                </Grid>
                <Grid item xs={6}>
                  The pricing plan (10 kms/hr, without fuel) cannot be changed
                  after the booking is made
                </Grid>
              </Grid>
            </div>
          </div>
          <div>Change plan </div>
        </div>
        <div className="right">
          <div className="right_menu">
            <div className="right_menu_heading">
              <span className="textoverline">FARE DETAILS</span>
            </div>
            <div className="right_menu_grid">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Base fare
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  11768
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Doorstep delivery and pickup
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  11768
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Insurance and GST
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  11768
                </Grid>
              </Grid>
            </div>
            <div className="right_menu_promo">
              <div style={{ width: "70%" }}>
                {" "}
                <TextField
                  id="standard-basic"
                  InputLabelProps={{
                    shrink: true,
                    color:'grey'
                  }}
                  label="Promo"
                  variant="standard"
                  fullWidth
                />
              </div>
              <div>
                <Button variant="contained" className="btn" style={{ backgroundColor: '#0ebaba'}}>Apply</Button>
              </div>
            </div>
            <div className="right_menu_total">
                <div>Total</div>
                <div><CurrencyRupeeIcon fontSize="small"/>14668</div>
            </div>
            <div className="right_menu_grid">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Base fare
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  11768
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Doorstep delivery and pickup
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  11768
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Insurance and GST
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  11768
                </Grid>
              </Grid>
            </div>
            <div style={{marginTop:'40px'}}>
            <TextField
                  id="standard-basic"
                
                  label="Delivery Location "
                  variant="standard"
                  fullWidth
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
