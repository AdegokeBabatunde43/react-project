import React from 'react'
import img from '../images/img.png'
import drawer from '../images/inbox.png'
import floppy from '../images/floppy-disk.png'




const Delivery = () => {
  return (
    <div>
        <div className="delivery">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-5 mt-5">
                     <img src={img} alt="" width="100%" />
                </div>
                <div className="col-md-4 ms-2 mt-5 delivery-box">
                <span>-15%</span>
                <h1>Wireless Headphones</h1>
                <h3>55:00</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <h6 className="">Buy Now</h6>
                <div className="free-delivery d-flex">
                <div className=" delivery-image d-flex">
                <img src={drawer} alt=""width="40px" />
                    <p>Free delivery</p>
                
                </div>
                <div className=" delivery-image d-flex">
                <img src={floppy} alt="" width="40px" />
                <p>Worry-free Trial</p>
                
                </div>

                </div>

            </div>
            </div>
            


        </div>
        </div>
    </div>
  )
}

export default Delivery