import React from 'react';
import labIMG from '../../Assets/lab-test.jpg'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const MissionStatement = () => {
  return (
    <MDBRow>
      <MDBCol className="my-5 px-5 mx-auto" style={{ maxWidth: "36rem" }}>
        <MDBCard reverse>
          <MDBCardImage cascade style={{ height: '20rem' }} src={labIMG} />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Our Mission</MDBCardTitle>
            <h5 className="indigo-text"><strong>Summerlin Labs</strong></h5>
            <MDBCardText>
              Summerlin Labs offers a convenient and wide array of Laboratory services to our health conscious community. With our dedicated staff, we offer top of the line health testing with precise results. Many conditions and ailments can be detected before any symptoms show. This offers a fundamental opportunity for you and your Doctor to explore potential problems sooner.
            </MDBCardText>
            <a href="#!" className="icons-sm fb-ic ml-1">
              <MDBIcon fab icon="facebook-f" /></a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default MissionStatement;