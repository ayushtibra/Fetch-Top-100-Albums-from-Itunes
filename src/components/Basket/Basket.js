import React, { Component } from "react";

class Basket extends Component {
  render() {
    return (
      <div className="alert alert-info">
        {this.props.favItems.length === 0 ? (
          "Basket is empty"
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
                  <b style={{ color: "black" }}> {item["im:name"].label} </b>
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
