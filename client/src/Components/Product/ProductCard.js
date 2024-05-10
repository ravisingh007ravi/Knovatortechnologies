import React,{useContext} from 'react'
import ProductContext from '../../Context/ProductContext'

const ProductCard = (props) => {
  const context = useContext(ProductContext)
  let {ProductData} = context
    let checkPops = ()=>{
      ProductData(props.product._id)
    }
  return (
    <div>
       {props.product && <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top" src={props.product.productImage} style={{height : "300px"}} alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">{props.product.style} </h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                   Rs.{props.product.price }
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><button className="btn btn-dark" onClick={checkPops}>Buy It</button> 
                            </div>
                </div>
              </div>
            </div>}
    </div>
  )
}

export default ProductCard
