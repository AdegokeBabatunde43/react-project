import React from 'react'
import logo from '../images/black.svg'

const Semifooter = () => {
  return (
    <div>
        <div className="semifooter">
        <div className="container">
        <div className="row">
            <div className="col-md-2 ms-2 mt-5">
            <img src={logo} alt="logo" />
            <h6 className="logo-content">A amazing WordPress theme designed specifically for a startup, apps, business, SaaS, and IT services.</h6>
            </div>
            <div className="col-md-2 ms-2 mt-5">
                <h6>Company</h6>
                <p>About us</p>
                <p>Blog</p>
                <p>Career</p>
                <p>Contact</p>
            </div>
            <div className="col-md-2 ms-2 mt-5">
                <h6>Resources</h6>
                <p>Services</p>
                <p>Help Center</p>
                <p>Partners</p>
                <p>Privacy Policy</p>
            </div>
            <div className="col-md-2 mt-5">
                <h6>Social Media</h6>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twiter</p>
                <p>LinkedIn</p>
            </div>
            <div className="col-md-3 ms-4 mt-5">
                <h5>News Letter</h5>
                <h6>Subcribe our newsletter and stay up to date about the company</h6>
                <p>Blog</p>
                <span><input type="text" placeholder="Your Email Address" /><button>Search</button></span>

             
            
            </div>
           
        </div>
        
        
        </div>

        </div>
        
    </div>
  )
}

export default Semifooter