import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
   const logOut = ()=>{
    console.log("reach here")
       localStorage.setItem("token", "");
    localStorage.setItem("userId", "");
    console.log(localStorage.getItem('userId'))
    console.log(localStorage.getItem('token'))
    navigate('/signup')
   }
  
  return (
    <div>
    <div className="w3-top3">
  <div className="w3-bar w3-white w3-wide w3-padding w3-card">
    <Link href="#home" className="w3-bar-item w3-button" to='/'><b>BUYit</b></Link>
    <Link className="w3-bar-item w3-button" to="/">Home</Link>
    <a className="w3-bar-item w3-button" href="/Product">Products</a>
    <Link className="w3-bar-item w3-button" to="/About">About</Link>
    <div className="w3-right w3-hide-small">
    <Link className="w3-bar-item w3-button" to="/card"><i className="fa-solid fa-cart-plus" style={{height : "20px"}}></i></Link>
   <div  className='w3-bar-item'> {localStorage.getItem('token').length ===0 ? <div> 
       <Link className="w3-bar-item w3-button" to="/LogIn">LogIn</Link>
       <Link className="w3-bar-item w3-button" to="/SignUp">SignUp </Link> </div> :
   <div> <button className="w3-bar-item w3-button" onClick={logOut}>LogOut</button></div> }</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
