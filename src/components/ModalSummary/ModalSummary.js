import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import moment from "moment";
import Button from "../UI/Button/Button";
import classes from "./ModalSummary.module.css";

const modalSummary = props => {
  function formatDate(date, format) {
    return moment(date).format(format);
  }

  return (
    <Aux>
      <div>
        <h3>Album Details</h3>
        {/* <hr />
        <br /> */}
        <ul>
          <li>Album - {props.name}</li>
          <li>Artist - {props.artist}</li>
        </ul>
      </div>
      <img src={props.image} alt={props.name} className={classes.imgProp} />
      <div className={classes.date}>
        <small>Released: {formatDate(props.date, "D-MMM-YY")}</small>
      </div>
      {/* <br />
      <hr /> */}
      <Button btnType="Danger" clicked={props.modalClosed}>
        Return
      </Button>
      <a href={props.link} target="blank">
        <Button btnType="Success">Buy for {props.price}</Button>
      </a>
    </Aux>
  );
};

export default modalSummary;
