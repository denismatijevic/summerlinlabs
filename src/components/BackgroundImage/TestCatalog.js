import React, { Component } from 'react';
import "./style.css"
import Lab1 from "../../Assets/national-cancer-institute.jpg"
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
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>ALBUMIN</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>ALBUMIN / GLOBULIN</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>ALK PHOS</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>ALT</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </a>
              </div>
              <div className="d-flex justify-content-between mb-4 text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>AMPHETAM CONFIRM, UR</a>
                </MDBCol>
                <a class="text-success">
                 <MDBIcon icon="dollar-sign" /> 59
                </a>
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
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>FIBRINOGEN</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 49
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>FOLATE, SERUM</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 59
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>FSH</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 49
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>FT4</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 39
                </a>
              </div>
              <div className="d-flex justify-content-between mb-4 text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>GC / CHLAMYDIA AMPLIFICATION, GENITAL</a>
                </MDBCol>
                <a class="text-success">
                 <MDBIcon icon="dollar-sign" /> 89
                </a>
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
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>PHOSPHORUS</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>PREG BLOOD</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>PREG URINE</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 29
                </a>
              </div>
              <div className="d-flex justify-content-between text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>PROGESTERONE</a>
                </MDBCol>
                <a class="text-success">
                  <MDBIcon icon="dollar-sign" /> 49
                </a>
              </div>
              <div className="d-flex justify-content-between mb-4 text-primary" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a>PROTHROMBIN TIME</a>
                </MDBCol>
                <a class="text-success">
                 <MDBIcon icon="dollar-sign" /> 49
                </a>
              </div>
            </MDBCol>
        
{/* END OF THIRD COLUMN */}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default TestCatalog;