import React from 'react'
import display from '../images/play.png'

const Display = () => {
  return (
    <>
    <div className="container-fluid display">
    <div className="row">
        <div className="col-md-4 mt-5 display-content">
            <h1>Bring your couch to the front row</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content</p>
        </div>
        <div className=" display-img mx-5  d-flex">
        <img src={display} alt="background" width="70px"/>
        <p> Watch Video</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Display