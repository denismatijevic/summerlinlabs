import React, { useRef } from 'react';
import { MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from "mdbreact";

function AdminSchedule() {
    const emailRef = useRef()

    function makeAdmin(e){
        e.preventDefault();
        console.log(emailRef.current.state.innerValue)
        console.log("submitted")
    }

    return (
        <MDBCard className="my-5 px-5 mx-auto bg"
        style={{ fontWeight: 300, maxWidth: "30%" }}>
              <MDBCardBody>
               <form className="make-admin-form" onSubmit={makeAdmin}>
                <p className="h5 text-center mb-4">Make the Following Email an Admin</p>
                <div className="admin-email">
                  <MDBInput
                    label="email"
                    name="name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="info" type="submit" >
                    Confirm
                    <MDBIcon far icon="user" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
      );
    }

export default AdminSchedule;