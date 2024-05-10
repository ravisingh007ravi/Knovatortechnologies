import axios from 'axios'
import React from 'react'

const ProductInCard = (props) => {
    const {price , productImage , title , _id } = props.Product.productId
    const DeleteProduct = async ()=>{
     const data = await axios.put(`/users/${localStorage.getItem('userId')}/cart`, {productId : _id ,removeProduct : 0 })
    } 
    const increaseItem = async ()=>{
        let cardData = await axios.post(`/users/${localStorage.getItem('userId')}/cart`,{ productId : _id })
        console.log(cardData)
    }
    const decreaseItem = async ()=>{
        const data = await axios.put(`/users/${localStorage.getItem('userId')}/cart`, {productId : _id ,removeProduct : 1 })
    }
  return (
    <div>
       <div className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
              <div className="d-flex flex-row align-items-center">
                <div><img src={productImage}  width="150" height="150" alt="" id="image" /></div>
                <div className="d-flex flex-column pl-md-3 pl-1">
                  <div><h6>COTTON-{title}</h6></div>
                  <div >Art.No:<span className="pl-2">091091001</span></div>
                  <div>Color:<span className="pl-3">White</span></div>
                  <div>Size:<span className="pl-4"> M</span></div>
                </div>
              </div>
              <div className="pl-md-0 pl-1"><b>₹{price}</b></div>
              <div className="pl-md-0 pl-2">
         <a href='/card'><span className="fa fa-minus-square text-secondary" onClick={decreaseItem}></span></a> 
                <span className="px-md-3 px-1">{props.Product.quantity}</span>
            <a href='/card'><span className="fa fa-plus-square text-secondary" onClick={increaseItem}></span></a> 
              </div>
              <div className="pl-md-0 pl-1"><b>₹{props.Product.quantity * price }</b></div>
             <a href='/card'>  <div className="close" onClick={DeleteProduct}>&times;</div></a>
            </div>
    </div>
  )
}

export default ProductInCard
