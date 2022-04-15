import React from 'react'
import ava from '../images/ava-1.png'
import ava2 from '../images/ava-2.png'
import ava3 from '../images/ava-3.png'
import star from '../images/star.png'

const Reviews = () => {
  return (
    <div>
        <div className="container review">
           
                <div className=" mt-5 text-center">
                    <h1>Customer reviews</h1>
                    <p>Easy to switch, upgrade, or cancel at any time.</p>
                </div>
                <div className="row">
                <div className="col-md-3 review-profile">
                <div className="profile1 d-flex text-align-center">
                    <img src={ava} alt="" width="100px" />
                    <div className="Joike mt-4 mx-3">
                    <p className="joike">Jioke Ugorjji</p>
                    <p>@jioke</p>
                    </div>
                </div>
                <p>High quality of the theme. The design is beautiful. The customer support is 
                    absolutely great, they have always been willing to help.</p>
                <img src={star} alt="" width="19px mx-2"/>
                <img src={star} alt="" width="19px mx-2"/>
                <img src={star} alt="" width="19px"/>
                <img src={star} alt="" width="19px"/>
                <img src={star} alt="" width="19px"/>
                
            </div>
            <div className="col-md-3 mx-5 review-profile">
                <div className="profile1 d-flex text-align-center">
                    <img src={ava2} alt=""width="100px" />
                    <div className="Joike mt-4 mx-3">
                    <p className="joike">Jioke Ugorjji</p>
                    <p>@jioke</p>
                    </div>
                </div>
                <p>High quality of the theme. The design is beautiful. The customer support is 
                    absolutely great, they have always been willing to help.</p>
                <img src={star} alt="" width="19px mx-2"/>
                <img src={star} alt="" width="19px mx-2"/>
                <img src={star} alt="" width="19px"/>
                <img src={star} alt="" width="19px"/>
                <img src={star} alt="" width="19px"/>
                
            </div>
            <div className="col-md-3 mx-5 review-profile">
                <div className="profile1 d-flex text-align-center">
                    <img src={ava3} alt=""width="100px" />
                    <div className="Joike mt-4 mx-3">
                    <p className="joike">Jioke Ugorjji</p>
                    <p>@jioke</p>
                    </div>
                </div>
                <p>High quality of the theme. The design is beautiful. The customer support is 
                    absolutely great, they have always been willing to help.</p>
                <img src={star} alt="" width="19px mx-2"/>
                <img src={star} alt="" width="19px mx-2"/>
                <img src={star} alt="" width="19px"/>
                <img src={star} alt="" width="19px"/>
                <img src={star} alt="" width="19px"/>
                
            </div>
            
            </div>
            
        </div>
        
    </div>
  )
}

export default Reviews