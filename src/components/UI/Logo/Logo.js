import React from "react";
import itunesLogo from "../../../assets/Images/itunes1.jpg";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={itunesLogo} alt="I-Tunes" />
  </div>
);

export default logo;
