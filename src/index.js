import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./pages/Contact"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/homepage" component={HomePage} exact />
      <Route path="/contact" component={Contact} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
