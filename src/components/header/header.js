import React from "react";
import classes from "./header.module.css";

const header = props => {
  return (
    <header className={classes.header}>
      <div className="row">
        <div className="col-md-4">
          <b>Songs: {props.count}</b>
        </div>

        <div className="col-md-4">
          <a
            href="https://ayushtibra.github.io/Itunes-Top-100-albums/"
            style={{
              textDecoration: "none",
              color: "white"
              //   borderBottom: "1px solid red"
            }}
          >
            <b> Top 100 Albums from I-tunes</b>
          </a>
        </div>

        <div className="col-md-4">
          <label>
            <select
              className="form-control"
              value={props.sort}
              onChange={props.handleChangeSort}
            >
              <option value="">Select</option>
              <option value="lowest">L to H</option>
              <option value="highest">H to L</option>
            </select>
          </label>
        </div>
      </div>
    </header>
  );
};

export default header;
