import React from "react";
import LazyLoad from "react-lazyload";
import classes from "./albums.module.css";

const albums = props => {
  return (
    <ul className={classes.album}>
      <li className={classes.albumItem}>
        <LazyLoad height={200}>
          <img
            className={classes.albumImg}
            alt={"itunes" + Math.random()}
            src={props.image}
            onClick={() => props.clicked(props.id)}
          />
        </LazyLoad>
      </li>

      <li className={classes.title} style={{ marginTop: "0.3em" }}>
        <a href={props.link} target="blank" className={classes.link}>
          {props.name.slice(0, 10)}..
        </a>
      </li>

      <button onClick={e => props.handleAddToFav(e, props.product)}>
        Add To Fav Songs
      </button>
     </ul>
  );
};

export default albums;
