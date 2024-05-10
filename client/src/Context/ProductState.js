import React, { useState } from 'react'
import ProductContext from './ProductContext'
import { useNavigate } from 'react-router-dom'

const ProductState = (props) => {
    let navigate = useNavigate()
    let [ ProductId , SetProductId ] = useState('asjdkfkl')
    let [ OderId , SetOderId ] = useState('63cc354d2bee90eaa267cd52')
    const ProductData = (id)=>{
        SetProductId(id)
        navigate('/ProductBuy')
    }
    const OderData = (id)=>{
      SetOderId(id)
      console.log("from context",OderId)
      navigate('/Oder')
    }
  return (
    <ProductContext.Provider value={{ProductData ,ProductId,OderId,OderData }}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
