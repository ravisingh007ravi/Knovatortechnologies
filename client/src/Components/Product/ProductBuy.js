import React, { useState , useEffect } from 'react'
import { useContext } from 'react'
import axios from 'axios'
import ProductContext from '../../Context/ProductContext'
import { useNavigate } from 'react-router-dom'

const ProductBuy = () => {
	let navigate = useNavigate()
    const [ ProductBuy , SetProductBuy ] = useState({})
    const context = useContext(ProductContext)
    const { ProductId } = context
    const Product =async ()=>{
        console.log("this is id",ProductId)
              let data = await axios.get(`/product/${ProductId}`) 
              SetProductBuy(data.data.data)
              console.log(ProductBuy)
    }  
    const CardAdder = async (e)=>
    {
      e.preventDefault()
      try{let cardData = await axios.post(`/users/${localStorage.getItem('userId')}/cart`,{ productId : ProductId })
      console.log(cardData)}
	  catch(err){
		window.alert('Please LogIn')
		navigate('/LogIn')
	  }
    }
    useEffect(() => {
        Product()
    }, [])
    
  return (
    <div>
      { Object.keys(ProductBuy).length != 0  &&  <div className="container1">
			<div className="card1">
				<div className="container-fliud">
					<div className="wrapper row">
						<div className="preview col-md-6">

							<div className="preview-pic tab-content">
								<div>
									<img className='tab-pane active' src={ProductBuy.productImage} alt="imag" style={{width : "500px"}} />
								</div>

							</div>
							<ul className="preview-thumbnail nav nav-tabs">

							</ul>

						</div>
						<div className="details col-md-6">
							<h3 className="product-title">{ProductBuy.gender}'s fashion</h3>
							<div className="rating">
								<div className="stars">
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<span className="review-no">41 reviews</span>
							</div>
							<h4 className="price">current price: <span>{ProductBuy.price}</span></h4>
							<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
							<h4 >Description - {ProductBuy.description}</h4>
							<h5 className="sizes">sizes:
							{ProductBuy.availableSizes.map((e)=>	<span className="size" data-toggle="tooltip" title="small">{e}</span> )}
							</h5>
							<h5 className="colors">colors:
								<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
								<span className="color green"></span>
								<span className="color blue"></span>
							</h5>
							<div className="action">
								<button className="add-to-cart btn btn-default" type="button" onClick={CardAdder}>add to cart</button>
								<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xs-9">
				<ul className="menu-items">
					<li className="active">About this Item</li>
				</ul>
				<div >
					<p >
						<small className='headline'>
							Black solid double-breasted trench coat, has a notched lapel collar, button closures, long sleeves, buttons tabs on the shoulders and sleeves, 2 pockets on the front, and an attached lining
						</small>
					</p>
					<small>
						<ul className='shift'>
							<li>Made in El Salvador</li>
							<li>Train in confidence with this long-sleeve performance tee featuring quick-dry, moisture-wicking fabric and reflective logo</li>
							<li>This ultra-soft, moisture-wicking knit fabric provides a versatile layer with a loose and light fit for maximum range of motion</li>
							<li>Tech-stretch fabric has a soft, flexible feel</li>
							<li>Provides UPF sun protection ranging from UPF 25 - UPF 45.An athletic fit that sits close to the body for a wide range of motion, designed for optimal performance and all day comfort.Sport made better:
								we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort.</li>
						</ul>
					</small>
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
					<a className="text-white" href="/">BUYit.com</a>
				</div>

			</footer>
		</div>}
    </div>
  )
}

export default ProductBuy
