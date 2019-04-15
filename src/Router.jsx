import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import NavBar from "./NavBar";

const Rooter = props => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/notre-histoire" component={History} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rooter;
