import React from "react";
import Wrapper from "../components/Wrapper/index";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import InfoCards from "../components/InfoCards";

function HomePage() {
  return (
    <Wrapper>
      <Jumbotron />
      <InfoCards />
    </Wrapper>
  );
}

export default HomePage;
