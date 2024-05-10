import React from 'react'
import { Link } from 'react-router-dom'
import home1 from  '../../image/homePage.png.jpg'
import home2 from '../../image/HomePage1.jpg'
import home3 from '../../image/HomePage2.jpg'
const Home = () => {
  return (
    <div>
    <div>   
<div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"
      aria-label="Slide 3"></button>
  </div>


  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={home1} alt="Sunset Over the City" style={{width : "100%" }} />
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>

  
    <div class="carousel-item">
      <img src={home2}
        alt="Canyon at Nigh" style={{width : "100%"}} />
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>

    


    <div class="carousel-item">
      <img src={home3} class="d-block w-100"
        alt="Cliff Above a Stormy Sea" />
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top" src="https://m.media-amazon.com/images/I/9143gSTIuyL._AC_UL480_FMwebp_QL65_.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Fancy Product</h5>
                    ₹40.00 - ₹80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="/menu/product">View options</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <div className="badge bg-dark text-white position-absolute" >Sale
                        </div>

                <img className="card-img-top" src="https://m.media-amazon.com/images/I/61UHSWBXnxL._AC_UL480_FMwebp_QL65_.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Special Item</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>

                    <span className="text-muted text-decoration-line-through">₹20.00</span>
                    ₹18.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="/menu/product">View options</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <div className="badge bg-dark text-white position-absolute">Sale
                        </div>

                <img className="card-img-top" src="https://m.media-amazon.com/images/I/81lAERHcrUL._AC_UL480_FMwebp_QL65_.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Sale Item</h5>

                    <span className="text-muted text-decoration-line-through">₹50.00</span>
                    ₹25.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="/menu/product">View options</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top" src="https://m.media-amazon.com/images/I/71aMmAoTODL._AC_UL480_FMwebp_QL65_.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Popular Item</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>

                    ₹40.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/">View options</a>
                            </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <div className="badge bg-dark text-white position-absolute" >Sale
                        </div>

                <img className="card-img-top" src="https://m.media-amazon.com/images/I/4117YExUnTL._AC_UL480_FMwebp_QL65_.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Sale Item</h5>

                    <span className="text-muted text-decoration-line-through">₹50.00</span>
                    ₹25.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top" src="https://m.media-amazon.com/images/I/613g3oRiD7L._AC_UL480_FMwebp_QL65_.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Fancy Product</h5>

                    ₹120.00 - ₹280.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <div className="badge bg-dark text-white position-absolute" >Sale
                        </div>

                <img className="card-img-top" src="https://m.media-amazon.com/images/I/31zTx4VIh8L._AC_UL480_QL65_.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Special Item</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>

                    <span className="text-muted text-decoration-line-through">₹20.00</span>
                    ₹18.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/">View options</a>
                            </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top" src="https://m.media-amazon.com/images/I/613g3oRiD7L._AC_UL480_QL65_.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Popular Item</h5>

                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>

                    ₹40.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/">View options</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Home
