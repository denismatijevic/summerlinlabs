import React from 'react';
import LandingPage from "./components/LandingPage"
import TestCatalog from "./components/BackgroundImage/TestCatalog"
import Footer from './components/Footer'


function HomePage() {
  return (
    <div>
        <LandingPage />
        <TestCatalog />
        <Footer />
    </div>

  )
}

export default HomePage;