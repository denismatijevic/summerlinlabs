import React from "react";
import labIMG from "../../Assets/lab-test.jpg";
import Cola from "../../Assets/logo-cola-300x62.jpg";
import AHCA from "../../Assets/logo-ahca-300x65.png";
import CAP from "../../Assets/logo-cap-300x51.jpg";
import {
  MDBJumbotron,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const MissionStatement = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage className="img-fluid" src={labIMG} />
            <MDBCardBody>
              <MDBCardTitle className="h3">Our Mission</MDBCardTitle>
              <MDBCardText>
                Summerlin Labs offers a convenient and wide array of Laboratory
                services to our health conscious community. With our dedicated
                staff, we offer top of the line health testing with precise
                results. Many conditions and ailments can be detected before any
                symptoms show. This offers a fundamental opportunity for you and
                your Doctor to explore potential problems sooner.
              </MDBCardText>
              <a href="#!" className="icons-sm fb-ic ml-1">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <hr />
              <ul className="list-group list-group-horizontal-sm pl-3">
                <li className="list-group-item border-0">
                  {" "}
                  <a href="https://www.cola.org/">
                    <img src={Cola} alt="COLA Accredited"></img>
                  </a>
                </li>
                <li className="list-group-item border-0">
                  {" "}
                  <a href="https://ahca.myflorida.com/">
                    <img src={AHCA} alt="COLA Accredited"></img>
                  </a>
                </li>
                <li className="list-group-item border-0">
                  {" "}
                  <a href="https://www.cap.org/">
                    <img src={CAP} alt="COLA Accredited"></img>
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MissionStatement;
