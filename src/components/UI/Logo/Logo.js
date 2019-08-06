import React from "react";
// import { NavLink } from "react-router-dom";
import itunesLogo from "../../../assets/Images/itunes1.jpg";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    {/* <NavLink to="/"> */}
    <img src={itunesLogo} alt="I-Tunes" />
    {/* </NavLink> */}
  </div>
);

export default logo;
