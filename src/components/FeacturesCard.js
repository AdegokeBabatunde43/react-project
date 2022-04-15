import React from 'react'
import degree from '../images/360-degrees.png'


 


const FeacturesCard = ({title, image, content}) => {
  return (
    <div className="row">
        <div className="col-md-2">
        <img src={image} alt="degree" width="50px" />
        </div>
        <div className="col-md-9">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
        

        
</div>
    
  )
}

export default FeacturesCard