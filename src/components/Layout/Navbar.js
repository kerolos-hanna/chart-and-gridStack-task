/** @format */

import React from "react";

import Avatar from "@material-ui/core/Avatar";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <h3>Dashbang</h3>
      <ul>
        <li>
          <Avatar alt="Kerolos" src="K" />
        </li>
        <li>Kerolos</li>
      </ul>
    </nav>
  );
};

export default Navbar;
