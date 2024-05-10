import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import axios from 'axios'

const Product = () => {
  const [ Product , SetProduct ] = useState([])
  const [ Gender , SetGender ] = useState('gender')
  const [ Category , SetCategory] = useState([])
  const [Brand , SetBrand] = useState(["Gucci","Chanel","Burberry","Cartier","Prada","Levi's","Wrong","Hrx","Puma","Nike","Bata","Flying machine","Libas","Aurelia","Biba"])
  const [Price , SetPrice] = useState(["Above Rs.500" , "Rs.1000-Rs.2000", "Rs.2000-Rs.5000", "Rs.5000-Rs.10000","Above Rs10000"])
  const ProductData = async ()=>{
   try{ 
    const data =await axios(`/products/${Gender}`)
   let x = await data.data.data
    SetProduct(x)
  }
    catch(err)
    {
      window.alert("at err")
    }
  }
  const GenderHandler = (e)=>{
     e.preventDefault()
     const GenderData = e.target.value
     SetGender(GenderData)
     ProductData()
  }
  const CategorySet = (e)=>{
    e.preventDefault()
    console.log(e.target.checked)
  }
  useEffect(() => {
    ProductData()
  },[])
  
  return (
    <div>
   <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Everything at one place</h1>
            <p className="lead fw-normal text-white-50 mb-0">FASHION STORE</p>
          </div>
        </div>
      </header>

      <div className="w3-top3">
  <div className="w3-bar w3-white w3-wide w3-padding w3-card">
 <h4><button className="w3-bar-item w3-button" value={'men'}  onClick={GenderHandler}  style={{marginLeft : "40%"}}>Man</button></h4>
  <h4>  <button className="w3-bar-item w3-button" value={'Women'}  onClick={GenderHandler} >Women</button>  </h4>
  <h4>  <button className="w3-bar-item w3-button" value={'Boys'} onClick={GenderHandler}  >Boys</button> </h4>
  <h4>  <button className="w3-bar-item w3-button" value={'Girls'} onClick={GenderHandler}  >Girls</button> </h4>
  </div>
</div>
<div className="container-fluid">
  <div className='row'>
    <div className='col-2' style={{marginTop : '6%'}}>
  <div className="card" style={{width : '120%'}}>
  <div className="card-body">
    <h5 className="card-title">Category</h5>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Beauty
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Ethnic
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" onChange={CategorySet} type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Bottom wear
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Tops and tees
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  Foot wear
  </label>
</div>
  </div>
</div>
<div className="card" style={{width : '120%'}}>
  <div className="card-body">
    <h5 className="card-title">Brands</h5>
   {Brand.map((e)=><div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">{e}
  </label>
</div>) }
  </div>
</div>
<div className="card" style={{width : '120%'}}>
  <div className="card-body">
    <h5 className="card-title">Pricegit </h5>
   {Price.map((e)=><div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">{e}
  </label>
</div>) }
  </div>
</div>
</div> 
<div className='col'>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {Product.length !=0 &&  Product.map((e,key) => {
          return (
            <div >
              <ProductCard product={e} />
            </div>
          );
        })}
         < ProductCard/>
          </div>
        </div>
      </section>
      </div>
      </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Product
