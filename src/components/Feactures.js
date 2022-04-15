import React from 'react'
import FeacturesCard from './FeacturesCard'
import oculus from '../images/oculus.png'
import degree from '../images/360-degrees.png'
import headphone from '../images/headphones.png'
import device from '../images/smart-devices.png'



const data =[
    {id:1, image: degree, title:"3600 Virtual Reality Glasses", content: "It is a long established fact that a reader"},
    {id:2, image: headphone, title:"Interactive VR Simulator", content: "It is a long established fact that a reader"},
    {id:3, image: device, title:"Interactive VR Simulator", content: "It is a long established fact that a reader"}
]

const Feactures = () => {
  return (
    <div className="container feactures">
        <div className=" text-center">
        <h6>WHY IT BEST</h6>
        <h2>The only comprehensive, simple <br></br>
          and secure content platform that <br></br>works with most smartphones.</h2>

        </div>
        <div className="feactures-container">
            <div className="row">
                <div className="col-md-5 mt-5">
                <h2>Core Features</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content</p>
               
                 {data.map(({ id, image, title, content })=> (
                  <FeacturesCard key={id} title={title} content={content} image={image} />   
                 ))} 
                
               
                </div>
                <div className="col-md-5   mt-5">
                <img src={oculus} alt="oculus" width="100% offset-5" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Feactures