import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/index";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
