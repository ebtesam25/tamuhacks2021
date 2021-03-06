import React from "react";
import LoadingBar from "react-redux-loading-bar";
import nav from "../css/navbar.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { UTD_LOGO } from "../css/images";
import { Typography } from "@material-ui/core";

const NavBar = props => {
  return (
    <div>
      <LoadingBar style={styles.loadingBar} />
      <AppBar style={styles.appBar}>
              <Link to="/" style={styles.logoContainer}>
                  <div></div>
          <img src={UTD_LOGO} style={styles.logo} alt="UTD Logo" />
          <Typography>Rentech</Typography>
        </Link>
        <IconButton aria-label="Shopping Cart" style={{ marginRight: ".4em" }}>
          <ShoppingCartIcon
            style={{
              fontSize: "1.5em",
              color: "#2a2d35"
            }}
          />
        </IconButton>
      </AppBar>
      <div style={{ height: "5em" }}></div>
    </div>
  );
};

const styles = {
  loadingBar: { backgroundColor: "#EDCE86", zIndex: "1200" },
  appBar: {
    flexDirection: "row"
  },
  logoContainer: {
    flexDirection: "row"
  },
  logo: {
    width: "4em",
    marginLeft: "1.5em",
    margin: "1em"
  }
};

export default NavBar;
