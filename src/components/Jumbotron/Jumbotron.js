import React from "react";
import {
  MDBCard,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact";
import "./style.css";

const Jumbotron = () => {
  return (
    <MDBCard
      className="my-5 px-5 mx-auto covid"
      style={{ fontWeight: 300, maxWidth: "80%" }}
    >
      <MDBRow>
        <MDBCol>
          <MDBCol className="text-white text-center py-5 px-4 my-5 jumbo">
            <MDBCol className="py-5">
              <MDBCardTitle className="h1-responsive pt-3 m-5 font-weight-bold">
                Press Release
              </MDBCardTitle>
              <h3 className="mx-5 mb-5 font-weight-bold">
                Roche's highly accurate anitbody test for COVID-19 goes live in
                the US
              </h3>
              <MDBBtn color="primary" className="mb-5">
                <MDBIcon icon="clone" className="mr-2"></MDBIcon> Make
                Appointment
              </MDBBtn>
            </MDBCol>
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default Jumbotron;
