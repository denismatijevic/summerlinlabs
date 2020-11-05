import React from "react";
import { MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from "mdbreact";

const ContactForm = () => {
  return (
    <MDBCard
      className="my-5 px-5 mx-auto bg"
      style={{ fontWeight: 300, maxWidth: "80%" }}
    >
      <MDBCardBody>
        <form>
          <p className="h5 text-center mb-4">Contact us!</p>
          <div className="grey-text">
            <MDBInput
              label="Your name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Your email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Subject"
              icon="tag"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              type="textarea"
              rows="2"
              label="Your message"
              icon="pencil-alt"
            />
          </div>
          <div className="text-center">
            <MDBBtn outline color="info">
              Send
              <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ContactForm;
