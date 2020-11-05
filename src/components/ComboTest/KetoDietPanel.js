import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class KetoDietPanel extends Component {
state = {
  modal13: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
  <MDBContainer>
      <MDBBtn color="primary" onClick={this.toggle(13)}>
        Modal
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Keto Diet Panel $197
        </MDBModalHeader>
        <MDBModalBody>
        This panel can help identify the potential nutrient deficiencies commonly associated with the ketogenic diet.
        The TOP concerns are Hyperlipidemia, Kidney stones, Dehydration, Gout and Micro-Nutrient deficiencies.
        This panel includes your CBC (Complete Blood Count) to screen for Dehydration, Anemia, Iron and Vitamin deficiencies. BMP (Basic Metabolic Panel)screening your Electrolytes, Glucose and Kidney function. Lipid Panel ( Cholesterol, Triglycerides, HDL and LDL Cholesterol). Uric Acid level to check for Gout risk.
        Testing for Calcium and Citrate in Urine and Urinalysis with Microscopic view is included. Over 30 Tests for only $197.
        In Children we recommend to have ILGF-1 level monitored. myTest Diagnostics offers this test in combination with this panel for only $89.
        The diet reduces levels of insulin-like growth factor 1, which is important for childhood growth. Like many anticonvulsant drugs, the ketogenic diet has an adverse effect on bone health
        #Keto, # KetoDiet
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary" onClick={this.toggle(13)}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default KetoDietPanel;