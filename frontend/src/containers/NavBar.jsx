import { AA_LOGO } from "../css/images";

import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function NavBar(props) {
  return (
    <div>
      <AppBar position="fixed" color="#fff">
        <Toolbar>
          <img src={AA_LOGO} style={{ width: "12em" }} alt="AA" />
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search"
            style={{ borderWidth: 1, marginLeft: "26em", width: "25em" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
