import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Top Musics
    </NavigationItem>
    <NavigationItem link="/basket">Fav Songs</NavigationItem>
  </ul>
);

export default navigationItems;
