import React from 'react';
import "./style.css"
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";

const TestCatalog = () => {

  const newsStyle = {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "1.5rem"
  };

  return (
    <MDBCard
        className="my-5 px-5 mx-auto bg"
        style={{ fontWeight: 300, maxWidth: "90%" }} 
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Single Tests
          </h2>
          <MDBRow>

{/* BEGINNING FIRST COLUMN */}

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                  alt=""
                />
                  <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>ALBUMIN</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>ALBUMIN / GLOBULIN</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>ALK PHOS</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>ALT</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </p>
              </div>
              <div className="d-flex justify-content-between mb-4 text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>AMPHETAM CONFIRM, UR</p>
                </MDBCol>
                <p class="text-success">
                 <MDBIcon icon="dollar-sign" /> 59
                </p>
              </div>
            </MDBCol>

    {/* ENDING FIRST COLUMN */}

    {/* START OF SECOND COLUMN */}

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                  alt=""
                />
                <p href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </p>
              </MDBView>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>FIBRINOGEN</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 49
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>FOLATE, SERUM</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 59
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>FSH</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 49
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>FT4</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 39
                </p>
              </div>
              <div className="d-flex justify-content-between mb-4 text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>GC / CHLAMYDIA AMPLIFICATION, GENITAL</p>
                </MDBCol>
                <p class="text-success">
                 <MDBIcon icon="dollar-sign" /> 89
                </p>
              </div>
            </MDBCol>

{/* END OF SECOND COLUMN */}

{/* BEGINNING OF THIRD COLUMN */}

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                  alt=""
                />
                <p href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </p>
              </MDBView>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>PHOSPHORUS</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>PREG BLOOD</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>PREG URINE</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </p>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>PROGESTERONE</p>
                </MDBCol>
                <p class="text-success">
                  <MDBIcon icon="dollar-sign" /> 49
                </p>
              </div>
              <div className="d-flex justify-content-between mb-4 text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <p>PROTHROMBIN TIME</p>
                </MDBCol>
                <p class="text-success">
                 <MDBIcon icon="dollar-sign" /> 49
                </p>
              </div>
            </MDBCol>
        
{/* END OF THIRD COLUMN */}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default TestCatalog;