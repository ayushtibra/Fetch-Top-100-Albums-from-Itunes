import React, { Component } from "react";
import classes from "./Basket.module.css";

class Basket extends Component {
  render() {
    return (
      <div className={classes.basket}>
        {this.props.favItems.length === 0 ? (
          <b>Basket is empty</b>
        ) : (
          <div>
            You have {this.props.favItems.length} items in the basket. <hr />
          </div>
        )}
        {this.props.favItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {this.props.favItems.map(item => (
                <li key={item.title.id}>
                  <b style={{ color: "white" }}> {item["im:name"].label} </b>
                  {"  : "}
                  <button
                    className="btn btn-info btn-sm"
                    onClick={e => this.props.handleRemoveFromFav(e, item)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Basket;
