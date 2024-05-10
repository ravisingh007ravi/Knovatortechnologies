import React from 'react'
import './about.css'
import ravi from '../../image/ravi.jpg'
import Jyotirmayi from '../../image/j.png'
import shreya from '../../image/shreya.png'
import Praham from '../../image/Pratham1.png'

const About = () => {
  return (
    <div className='Containerabout'>
    <div className='headerAbout'><h1>Our Team</h1></div>
    <div className="aboutAbout">A website that allows people to buy and sell physical goods, services,
          and digital products over the internet rather than at a brick-and-mortar location.
          Through an e-commerce website, a business can process orders, accept payments,
          manage shipping and logistics, and provide customer service.</div>
    <div className='sun-ContainerAbout'> 

      <div className="teamsAbout">
        <img className='imgAbout' src={ravi} height="200px"></img>
        <div className="nameAbout">Ravi Singh</div>
        <div className="desigAbout">Developer</div>
        <div className="aboutAbout"></div>

        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100007642129369"><i className='fa fa-facebook'></i></a>
          <a href="https://www.instagram.com/ravi_singh_thakur_78/"><i className='fa fa-instagram'></i></a>
          <a href="https://github.com/ravisingh007ravi"><i className='fa fa-github'></i></a>
          <a href="https://www.linkedin.com/in/ravi-singh-763378182"><i className='fa fa-linkedin'></i></a>
          <a href="https://www.linkedin.com/in/ravi-singh-763378182"><i class="fa-solid fa-square-envelope"></i></a>
        </div>
      </div>

      <div className="teamsAbout">
        <img className='imgAbout' src={Praham} height="200px"></img>
        <div className="nameAbout">Pratham Panchariya</div>
        <div className="desigAbout">Developer</div>
        <div className="aboutAbout"></div>

        <div className="social-links">
          <a href=""><i className='fa fa-facebook'></i></a>
          <a href=""><i className='fa fa-instagram'></i></a>
          <a href=""><i className='fa fa-github'></i></a>
          <a href=""><i className='fa fa-linkedin'></i></a>
          <a href="https://www.linkedin.com/in/ravi-singh-763378182"><i class="fa-solid fa-square-envelope"></i></a>
        </div>
      </div>

      <div className="teamsAbout">
        <img className='imgAbout' src={Jyotirmayi} height="200px"></img>
        <div className="nameAbout">Jyotirmayi Bissoyi</div>
        <div className="desigAbout">Developer</div>
        <div className="aboutAbout"></div>

        <div className="social-links">
          <a href="https://instagram.com/iam_jyoti_______?igshid=ZDdkNTZiNTM"><i className='fa fa-instagram'></i></a>
          <a href="https://github.com/Jyotibissoyi/jyoticoder.git"><i className='fa fa-github'></i></a>
          <a href="https://www.linkedin.com/in/mr-rupam-gupta/"><i className='fa fa-linkedin'></i></a>
           <a href="https://www.linkedin.com/in/ravi-singh-763378182"><i class="fa-solid fa-square-envelope"></i></a>
        </div>
      </div>

      <div className="teamsAbout">
        <img className='imgAbout' src={shreya} height="200px"></img>
        <div className="nameAbout">Shreya Singh</div>
        <div className="desigAbout">Developer</div>
        <div className="aboutAbout"></div>

        <div className="social-links">
          <a href="https://github.com/singhshreya425"><i className='fa fa-github'></i></a>
          <a href="http://www.linkedin.com/in/shreya-singh-8135aa17b"><i className='fa fa-linkedin'></i></a>
          <a href="https://www.linkedin.com/in/ravi-singh-763378182"><i class="fa-solid fa-square-envelope"></i></a>
        </div>
      </div>
    </div>

    <footer className="bg-dark text-center text-white">

      <div className="container p-4 pb-0">

        <section className="mb-4">

          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
          <i className="fab fa-facebook-f"></i></a>
          


          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
          <i className="fab fa-twitter"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
          <i className="fab fa-google"></i></a>

          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
          <i className="fab fa-instagram"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
          <i className="fab fa-linkedin-in"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
          <i className="fab fa-github"></i></a>
        </section>

      </div>



      <div className="text-center p-3">
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">BUYit.com</a>
      </div>

    </footer>
  </div>
  )
}

export default About
