import axios from 'axios';
import React, { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductInCard from './ProductInCard';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext'
import context from 'react-bootstrap/esm/AccordionContext';

const Card = () => {
  let navigate = useNavigate()
   let Context = useContext(ProductContext)
   let {OderData } = Context
  const [ Product , SetProduct ] = useState([])
  const [ Card , SetCard ] = useState({})
  let CardDetails = async ()=>{
    try{
      const data = await axios.get(`/users/${localStorage.getItem('userId')}/cart`)
      if(data.data.data){
      SetCard(data.data.data)
      SetProduct(data.data.data.items)
     }
    }catch(err)
    {
      window.alert("Please LogIn")
      navigate('/LogIn')
    }
  }
  const ConfirmOder = async ()=>{
    try{
      const data = await axios.post(`/users/${localStorage.getItem('userId')}/orders`,{'cartId' : Card._id })
      OderData(data.data.data._id)
      console.log('at app',data.data.data._id)
    }catch(err){
      window.alert("at error")
    }
  }
    useEffect(() => {
      CardDetails()
    }, [])
  return (
    <div>
   <div>
      <div className="container bg-white rounded-top mt-5" id="zero-pad">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-12 pt-3">
            <div className="d-flex">
              <div className="pt-1"><h4>MY SHOPPING CART</h4></div>
             
            </div>
            <div className="d-flex flex-column pt-4">
              <div><h5 className="text-uppercase font-weight-normal">shopping bag</h5></div>
              <div className="font-weight-normal">{Card.totalItems} items</div>
            </div>
            <div className="ProductIteamshift d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
              <div className="px-lg-5 mr-lg-5" id="produc">PRODUCTS</div>
              <div className="px-lg-5 ml-lg-5" id="prc">PRICE</div>
              <div className="px-lg-5 ml-lg-1" id="quantity">QUANTITY</div>
              <div className="px-lg-5 ml-lg-3" id="total">TOTAL</div>
            </div>
           {  Product.map((e)=>  <ProductInCard Product={e} />) }
          </div>
        </div>
      </div>
      <div className="container bg-light rounded-bottom py-4" id="zero-pad">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
              <Link to='/'><button className="btn btn-sm bg-light border border-dark" >GO BACK</button></Link>
              </div>
              <div className="px-md-0 px-1" id="footer-font">
                <b className="pl-md-4">SUBTOTAL<span className="pl-md-4"> {Card.totalPrice} </span></b>
              </div>
              <div>
                <button className="btn btn-sm bg-dark text-white px-lg-5 px-3" onClick={ConfirmOder}>Proceed to Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-center text-white">

				<div className="container p-4 pb-0">

					<section className="mb-4">

						<a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
						><i className="fab fa-facebook-f"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
						><i className="fab fa-twitter"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
						><i className="fab fa-google"></i></a>

						<a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
						><i className="fab fa-instagram"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
						><i className="fab fa-linkedin-in"></i></a>


						<a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
						><i className="fab fa-github"></i></a>
					</section>

				</div>



				<div className="text-center p-3">
					© 2023 Copyright:
					<a className="text-white" href="https://mdbootstrap.com/">BUYit.com</a>
				</div>

			</footer>
    </div>
    </div>
  )
}

export default Card
