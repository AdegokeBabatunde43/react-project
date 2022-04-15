import React from 'react'
import banner from '../images/nice-png-virtual-reality-png-1912196@2x.png'

const Banner = () => {
  return (
    <>
    <div className="banner-bg">
    <div className="container">
        <div className=" row banner">
    <div className="col-md-5 offset-1">
        <div className="highlight">
            <span> OCULUS QUEST</span>    
        </div>
        <h1>Oculus Go Standalone Virtual Reality Headse - 32GB</h1>
            <p>User controlled playback of 360° video content</p>
            <div className="col-md-8">
            <div className="btn btn-primary d-block">Buy Now</div>
            </div>
            
    </div>
    <div className="banner col-md-5">
    <div data-aos="fade-up-left"><img src={banner} alt="banner"width="100%" /></div>
        

    </div>        


    </div>

  </div>

    </div>

    

    </>
  )
}

export default Banner