import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/index";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import MissionState from "./pages/Mission";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/catalog" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/mission" component={MissionState} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
