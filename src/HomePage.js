import React from "react";
import NavBar from "./components/NavBar";
import TestCatalog from "./components/BackgroundImage/TestCatalog";
import Footer from "./components/Footer";
import TableSearch from "./components/TableSearch";


function HomePage() {
  return (
    <div>
      <NavBar />
      <TestCatalog />
      <TableSearch />
      <Footer />
    </div>
  );
}

export default HomePage;
