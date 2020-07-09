/** @format */

import React from "react";

import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import classes from "./home.module.css";

const home = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.Divide}>
        <Sidebar />
        <div className={classes.Drop}>
          <h1>koko</h1>
        </div>
      </div>
    </div>
  );
};

export default home;
