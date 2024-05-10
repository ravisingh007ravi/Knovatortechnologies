import React from 'react'
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const OderProduct = (props) => {
  const { price , title } = props.oder.productId
  return (
    <div>
     
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p>{title}</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p>₹{price*props.oder.quantity }</p>
                      </MDBCol>
                    </MDBRow>
                 
    </div>
  )
}

export default OderProduct
