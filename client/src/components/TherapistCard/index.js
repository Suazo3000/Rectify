import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function TherapistCard({ name, specialty, _id }) {
  var singleLink = `/Profile/${_id}`;
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="9" lg="7" xl="5" className="mt-5">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                  <MDBCardImage
                    style={{ width: "180px", borderRadius: "10px" }}
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    fluid
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <MDBCardTitle>{name}</MDBCardTitle>
                  <MDBCardText>{specialty}</MDBCardText>
                  <div
                    className="d-flex justify-content-center align-items-center text-white bg-primary p-2"
                    style={{
                      textDecoration: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => (window.location.href = singleLink)}
                  >
                    Profile
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}