import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="default-color" className="font-small pt-2 mt-2">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Summerlin Labs</h5>
            <p>
              101 Examination BLVD <br />
              801-555-5555 <br />
              Dr. Gordon Freeman <br />
              Call us with any questions
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-1">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> Summerlin Labs </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
