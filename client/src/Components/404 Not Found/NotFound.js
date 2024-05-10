import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <h2>Oops! Page not found.</h2>
     <div><img className='imga' src="https://jatheon.com/wp-content/uploads/2018/03/404-image.png" alt="404"/></div>
    <h4>We can't fint the page you're looking for.</h4>
    <Link to="/"><button type="button" className="main-btn">GO BACK HOME</button> </Link>
</>
  )
}

export default PageNotFound