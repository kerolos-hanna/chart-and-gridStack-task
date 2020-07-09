/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SalesChart from "../Charts/Sales/Sales";
import CountryChart from "../Charts/Country/Country";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        style={{ zIndex: "-1" }}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <br />
            <ListItem>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                style={{ width: "100%" }}
              >
                <AddIcon />
                New Widget
              </Button>
            </ListItem>
            <div
              style={{
                width: "95%",
                margin: "auto",
                border: "1px solid #EEE",
                padding: "2px",
              }}
            >
              <SalesChart />
            </div>
            <br />
            <hr />
            <br />
            <div
              style={{
                width: "95%",
                margin: "auto",
                border: "1px solid #EEE",
                padding: "2px",
              }}
            >
              <CountryChart />
            </div>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
