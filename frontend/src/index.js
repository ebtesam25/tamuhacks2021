import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./containers/NavBar";
import Dashboard from "./containers/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Landing from "./containers/Landing";

ReactDOM.render(
  <Router>
    <Route path="/" component={NavBar} />
    <Switch>
      {/* <Route path="/" component={Landing} /> */}
      <Route exact path="/boarding" component={Dashboard} />
      <Route exact path="/flight" component={Dashboard} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
