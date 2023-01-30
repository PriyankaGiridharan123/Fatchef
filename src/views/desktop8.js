import React from 'react'
import './desktop8.css'
import gravy from './gravy.png'
import { Link } from 'react-router-dom'
const Desktop8 = (props) => {
  return (
    <div className="desktop8-container">
        <title>project</title>
      <div className="desktop8-desktop8">
        <img
          src={gravy}
          alt="gravy11262"
          className="desktop8-gravy1"
        />
        <span className="desktop8-text">
          <span>GRAVY</span>
        </span>
        <span className="desktop8-text02">
          <span>VEG</span>
          <br></br>
          <span>Panner Butter Masala-120.00</span>
          <br></br>
          <span>Palak Panner-150.00</span>
          <br></br>
          <span>Kadai Mushroom-140.00</span>
          <br></br>
          <span>Veg Malai Kofta-140.00</span>
          <br></br>
          <span>Capsicum Stuffed Masala-130.00</span>
          <br></br>
          <span>Veg Kurma-90.00</span>
          <br></br>
          <span>Aloo Mutter-80.00</span>
          <br></br>
          <br></br>
          <span>NON-VEG</span>
          <br></br>
          <span>Chicken Curry-110.00</span>
          <br></br>
          <span>Mutton Curry-150.00</span>
          <br></br>
          <span>Pepper Prawn-160.00</span>
          <br></br>
          <span>Fish Mutter Masala-200.00</span>
          <br></br>
          <span>Butter Chicken-180.00</span>
          <br></br>
          <br></br>
          <span className="desktop8-text49">
          <span> 
          </span>
        </span>
          <span className="desktop8-text31">
          <span> 
          <Link to="/cart">Add to Cart</Link></span>
        </span>
        <span className="desktop8-text32">
          <span>
            <span>
            <Link to="/desktop1">Back</Link></span>

            <br></br>
            <span></span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </span>
        </span>
        </span>
      </div>
    </div>
  )
}

export default Desktop8