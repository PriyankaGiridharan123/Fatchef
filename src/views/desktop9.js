import React from 'react'
import './desktop9.css'
import maincourse from './maincourse.png'
import { Link } from 'react-router-dom'
const Desktop9 = (props) => {
  return (
    <div className="desktop9-container">
        <title>project</title>
      <div className="desktop9-desktop9">
        <img
          src={maincourse}
          alt="images3a9fCqRyZtransformed11275"
          className="desktop9-images3a9f-cq-ry-ztransformed1"
        />
        <span className="desktop9-text">
          <span>
            <span>VEG</span>
            <br></br>
            <span>Veg Briyani-120.00</span>
            <br></br>
            <span>Mushroom Briyani-130.00</span>
            <br></br>
            <span>Schezwan Friedrice-160.00</span>
            <br></br>
            <span>Pepper Fried Noodles-140.00</span>
            <br></br>
            <span>Peas Pulao-120.00</span>
            <br></br>
            <span>Veg Meals-100.00</span>
            <br></br><br></br>
            <span>NON-VEG</span>
            <br></br>
            <span>Chicken Noodles-130.00</span>
            <br></br>
            <span>Chicken Fried Rice-150.00</span>
            <br></br>
            <span>Chicken Briyani-160.00</span>
            <br></br>
            <span>Mutton Briyani-280.00</span>
            <br></br>
            <span>Prawn Briyani-200.00</span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <span className="desktop9-text47">
          <span>MAIN COURSES</span>
        </span>
        <span className="desktop9-text49">
          <span>
          </span>
        </span>
        <span className="desktop9-text31">
          <span> 
          <Link to="/desktop1">Back</Link></span>
        </span>
        <span className="desktop9-text32">
          <span> 
          <Link to="/cart">Add to cart</Link></span>
        </span>
      </div>
    </div>
  )
}

export default Desktop9