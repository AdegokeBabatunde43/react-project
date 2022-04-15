import React from 'react'
import woman from '../images/woman.png'

const Question = () => {
  return (
    <div>
        <div className="container woman">
            <div class="row">
                <div className="col-md-6 ms-3 mx-5">
                    <img src={woman} alt=""width="70% mx-5" />
                </div>
                <div className="col-md-4 ms-3  mt-5 ">
                    <h1>Frequently asked questions</h1>
                    <p>Does the Oculus Go have bluetooth?</p>
                    <p>Does the Oculus Go have bluetooth?</p>
                    <p>Does the Oculus Go have bluetooth?</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Question