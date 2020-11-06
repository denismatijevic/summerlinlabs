import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/index";
import TestPage from "./pages/Testpage";
import Contact from "./pages/Contact";
import HomePage from "./pages/Homepage";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalog" component={TestPage} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
