import React, { useRef } from 'react';
import { MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from "mdbreact";

export default function AdminSchedule() {
    const emailRef = useRef()

    //this function should get uid of entered email in input box, and set that uid as admin in the admin collection in database
    function makeAdmin(e){
        e.preventDefault();
        //grab value of email
        // const adminEmail = emailRef.current.state.innerValue;
        //send a query to database to grab uid of this email

        //save email and uid to admin collection in database
    }

    return (
        <MDBCard className="my-5 px-5 mx-auto bg"
        style={{ fontWeight: 300}}>
              <MDBCardBody>
               <form className="make-admin-form" onSubmit={makeAdmin}>
                <p className="h5 text-center mb-4">Make the following email an admin:</p>
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