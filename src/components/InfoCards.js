import React from "react";
import { MDBContainer } from "mdbreact";

const InfoCards = () => {
    return (

<MDBContainer>
     <div className="container">
      {/* <!--Section: Features v.1--> */}
      <section id="features" className="mt-4 mb-5 pb-5">
        {/* <!--Section heading--> */}
        <h1 className="text-center mb-5 mt-5 pt-5 font-weight-bold dark-grey-text wow fadeIn" data-wow-delay="0.2s">Professional
          treatments</h1>
        {/* <!--Section sescription--> */}
        
        {/* <!--First row--> */}
        <div className="row features-big my-4 text-center">
          {/* <!--First column--> */}
          <div className="col-md-4 mb-4 wow fadeIn" data-wow-delay="0.4s">
            <div className="card hoverable">
              <i className="fas fa-first-aid blue-text mt-3 fa-3x my-4"></i>
              <h5 className="font-weight-bold mb-4">Precise Results</h5>
                            <p className=" grey-text
                font-small mx-3 fa-3x mb-4">We are nationally accredited by COLA, CLIA and AHCA – Agency for Healthcare Administration and successful participant with CAP – College of American Pathologists.</p>
            </div>
          </div>
          {/* <!--/First column--> */}
          {/* <!--Second column--> */}
          <div className="col-md-4 mb-4 wow fadeIn" data-wow-delay="0.4s">
            <div className="card hoverable">
              <i className="fas fa-microscope blue-text mt-3 fa-3x my-4"></i>
              <h5 className="font-weight-bold mb-4">Trusted Lab Technologies</h5>
              <p className="grey-text font-small mx-3">Our nationally certified Medical Technologists have years of experience in critical care and private practice settings. <br/>
              <br/>
          </p>
            </div>
          </div>
          {/* <!--/Second column--> */}
          {/* <!--Third column--> */}
          <div className="col-md-4 mb-1 wow fadeIn" data-wow-delay="0.4s">
            <div className="card hoverable">
              <i className="fas fa-shield-alt blue-text mt-3 fa-3x my-4"></i>
              <h5 className="font-weight-bold mb-4">Discreet Testing</h5>
                            <p className=" grey-text
                font-small mx-3">Private reception area! Your results are only accessible to you and the ordering provider. <br/>
              <br/>
            <br/></p>
            </div>
          </div>
          {/* <!--/Third column--> */}
        </div>
        {/* <!--/First row--> */}
        {/* <!--Second row--> */}
        <div className="row features-big my-4 text-center">
          {/* <!--Fourth column--> */}
          <div className="col-md-4 mb-4 wow fadeIn" data-wow-delay="0.4s">
            <div className="card hoverable">
              <i className="fas fa-dollar-sign blue-text mt-3 fa-3x my-4"></i>
              <h5 className="font-weight-bold mb-4">Affordable Pricing</h5>
                            <p className=" grey-text
                font-small mx-3 p fa-3x mb-4">Our prices are transparent and very competitive. No hidden fees, no surprises. <br/>
              <br/>
            <br/>
            </p>
            </div>
          </div>
          {/* <!--/Fourth column--> */}
          {/* <!--Fifth column--> */}
          <div className="col-md-4 mb-4 wow fadeIn" data-wow-delay="0.4s">
            <div className="card hoverable">
              <i className="fas fa-stopwatch blue-text mt-3 fa-3x my-4"></i>
              <h5 className="font-weight-bold mb-4">Fast Turn Around</h5>
              <p className="grey-text font-small mx-3">Why do you have to wait for test results that can be reported within minutes and hours? We offer most test results by the end of the day. STAT testing available!</p>
            </div>
          </div>
          {/* <!--/Fifth column--> */}
          {/* <!--Sixth column--> */}
          <div className="col-md-4 mb-1 wow fadeIn" data-wow-delay="0.4s">
            <div className="card hoverable">
              <i className="fas fa-map-marker-alt blue-text mt-3 fa-3x my-4"></i>
              <h5 className="font-weight-bold mb-4">We Stay Local</h5>
                            <p className=" grey-text
                font-small mx-3">We are easy to find in South Fort Myers. Testing is performed at location! 
                <br/>
              <br/>
            <br/>

            </p>
            </div>
          </div>
          {/* <!--/Sixth column--> */}
        </div>
        {/* <!--/Second row--> */}
        </section>
        </div>
   </MDBContainer>
    )
};

export default InfoCards;