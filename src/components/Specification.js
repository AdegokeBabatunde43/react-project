import React from 'react'
import specification from '../images/hd.png'
import cube from '../images/cube.png'
import circle from '../images/halfcircle.png'
import stack from '../images/layers1.png'
import floater from '../images/fishing-float.png'

const Specification = () => {
  return (
    <div>
      <div className="specification">
      <div className="container specification my-5 ">
    
                    <h3>Specification</h3>
                    <p className="mb-5">It is a long established fact that</p>
                    <img src={specification} alt="" width="50%"/>
        
            <div className="row">
               
            
            <div className="  items col-sm-12 col-md-3 ">
              
                <img src={cube} alt="" width="60px" className=" p-5 mx-5"/>
                <nav className="cube-content">
                      <p>Field of View</p>
                      <h3>108°</h3>
                </nav>
              
              <div className=" items col-sm-12 col-md-3" >
              
                <img src={circle} alt="" width="60px p-5 mx5" />
                <nav className="circle-content">
                      <p>HD Lens Diameter</p>
                      <h3>38mm</h3>
                </nav>
          
            <div className=" items col-sm-12 col-md-3">
              
                <img src={stack} alt="" width="60px p-5 mx-5" />
                <nav className="stack-content">
                      <p>HD Lens Diameter</p>
                      <h3>38mm</h3>
                </nav>
              
              <div className=" items col-sm-12 col-md-3">
              
                <img src={floater} alt="" width="60px p-5 mx-5" />
                <nav className="floater-content">
                      <p>HD Lens Diameter</p>
                      <h3>38mm</h3>
                </nav>
         

            </div>

            </div>

          </div>
        </div>
        </div>
            
      </div>

      </div>
    </div>
  )
}

export default Specification