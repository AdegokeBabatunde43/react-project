import React from 'react'
import battery from '../images/car-battery.png'
import glass from '../images/glasses.png'
import headset from '../images/headset.png'
import speed from '../images/speed-grade.png'
import box from '../images/box.png'


const Include = () => {
  return (
    <div>
        <div className="container include">
            <div className="row">
                <div className="col-md-5 mt-5">
                    <h3>What included</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content</p>
                    <div className="accessories">
                        <div className="accessories1 d-flex mx-5">
                        <img src={battery} alt=""width="15px mx-5" />
                        <h6>Two AA Batteries</h6>
                    </div>
                    <div className="accessories1 d-flex mx-5">
                        <img src={glass} alt=""width="21px px-5" />
                        <h6>Glasses spacer</h6>
                    </div> 
                    <div className="accessories1 d-flex mx-5">
                        <img src={headset} alt=""width="21px mx-5" />
                        <h6> VR Headset </h6>
                    </div>
                    <div className="accessories1 d-flex mx-5">
                        <img src={speed} alt=""width="15px mx-5" />
                        <h6>Two AA Batteries</h6>
                    </div>
                    

                </div>
                
                
            </div>
            <div className="col-md-5 bag">
                    <div className="background-bag">

                    </div>
                    <img src={box} alt=""width="100% tex-center" />

                </div>

 </div>

        </div>
    </div>
  )
}

export default Include