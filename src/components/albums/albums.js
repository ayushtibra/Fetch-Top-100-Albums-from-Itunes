import React from "react";
import LazyLoad from "react-lazyload";
import classes from "./albums.module.css";
import favLogo from "../../assets/Images/fav.jpg";

const albums = props => {
  return (
    <ul className={classes.album}>
      <li className={classes.albumItem}>
        <LazyLoad height={200}>
          {/* <div className={classes.wrapper}> */}
          <img
            className={classes.albumImg}
            alt={"itunes" + Math.random()}
            src={props.image}
            onClick={() => props.clicked(props.id)}
          />
          {/* <a className={classes.button} href="/">
              Add To Fav
            </a>
          </div> */}
        </LazyLoad>
      </li>

      <li className={classes.title} style={{ marginTop: "0.3em" }}>
        <a href={props.link} target="blank" className={classes.link}>
          {props.name.slice(0, 20)}..
        </a>
      </li>

      <button
        onClick={e => props.handleAddToFav(e, props.product)}
        className={classes.newButton}
      >
        Fav album
      </button>
    </ul>
  );
};

export default albums;
