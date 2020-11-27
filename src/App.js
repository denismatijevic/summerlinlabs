import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/index";
import TestPage from "./pages/Testpage";
import Contact from "./pages/Contact";
import MissionState from "./pages/Mission";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage"
import "./App.css";
import AdminSchedule from "./components/Admin/AdminSchedule";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalog" component={TestPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/mission" component={MissionState} />
          <Route exact path="/admin" component={AdminSchedule} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
