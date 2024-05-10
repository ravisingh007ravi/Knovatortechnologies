import React, { useState,useContext,useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import OderProduct from './OderProduct';
import axios from 'axios';
import ProductContext from '../../Context/ProductContext';
import moment from 'moment/moment';

const Order = () => {
  let context = useContext(ProductContext)
  let { OderId } = context
  const [ Oder , SetOder] = useState({})
  const OderData = async ()=>{
    let data = await axios.get(`/users/${OderId}/orders`)
    console.log(data.data.data)
    SetOder(data.data.data)
  }
  useEffect(() => {
    OderData()
  }, [])
  
  return (
    <div>
    { Object.keys(Oder).length != 0 && <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="8" xl="6">
              <MDBCard className="border-top border-bottom border-3 border-color-custom">
                <MDBCardBody className="p-5">
                  <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                    Purchase Reciept
                  </p>
                  <MDBRow>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Date</p>
                      <p>{moment(Oder.updatedAt).format('YYYY-MM-DD')}</p>
                    </MDBCol>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>012j1gvs356c</p>
                    </MDBCol>
                  </MDBRow>{Oder.items.map((e)=>  <OderProduct oder={e}/>)}
                  <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p className="mb-0">Shipping</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p className="mb-0">₹50.00</p>
                      </MDBCol>
                    </MDBRow>
                 
                  <MDBRow className="my-4">
                    <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                      <p
                        className="lead fw-bold mb-0"
                        style={{ color: "#f37a27" }}
                      >
                      ₹ {Oder.totalPrice + 50}
                      </p>
                    </MDBCol>
                  </MDBRow> 
                  <p className="mt-4 pt-2 mb-0">
                    Want any help?{" "}
                    <a href="#!" style={{ color: "#f37a27" }}>
                      Please contact us
                    </a>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>}
    </div>
  )
}

export default Order
