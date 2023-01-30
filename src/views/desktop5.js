import React from 'react'
import './desktop5.css'
import starter from './starter.png'
import { Link } from 'react-router-dom'

const Desktop5 = (props) => {
  return (
    <div className="desktop5-container">
        <title>project</title>
      <div className="desktop5-desktop5">
        <img
          src={starter}
          alt="pastaspaghettiwithshrimpssauce13025"
          className="desktop5-pastaspaghettiwithshrimpssauce1"
        />
        <span className="desktop5-text">
          <span>Non-Veg</span>
        </span>
        <span className="desktop5-text02">
          <span>
            <span>Chicken 65-110.00</span>
            <br></br>
            <span>Chicken 65 B/L-130.00</span>
            <br></br>
            <span>Chilly Chicken-130.00</span>
            <br></br>
            <span>Chicken Nuggets-130.00</span>
            <br></br>
            <span>Chicken Momos-140.00</span>
            <br></br>
            <span>Chicken Lollipop 2pcs-120.00</span>
            <br></br>
            <span>Chilly leg 5 pcs-150.00</span>
            <br></br>
            <span>Chicken Tikka-150.00</span>
            <br></br>
            <span>Chicken kebab-170.00</span>
            <br></br>
            <span>Chicken grill half-200.00</span>
            <br></br>
            <span>Chicken grill full-400.00</span>
            <br></br>
            <span>Chicken tandoori-180.00</span>
            <br></br>
            <span>Chicken Maggie-150.00</span>
          </span>
        </span>
        <span className="desktop5-text29">
          <span>
            <span>Chilly Gobi-70.00</span>
            <br></br>
            <span>Chilly mushroom-70.00</span>
            <br></br>
            <span>Chilly Panner-70.00</span>
            <br></br>
            <span>French Fries-70.00</span>
            <br></br>
            <span>Peri Peri Fries-80.00</span>
            <br></br>
            <span>Masala Fries-80.00</span>
            <br></br>
            <span>Nuggets-80.00</span>
            <br></br>
            <span>Momos-90.00</span>
            <br></br>
            <span>Corn cheese momos-100.00</span>
            <br></br>
            <span>Cheese Maggie-100.00</span>
            <br></br>
            <span>Masala Maggie-100.00</span>
          </span>
        </span>
        <span className="desktop5-text52">
          <span>Veg</span>
        </span>
        <span className="desktop5-text31">
          <span> 
          <Link to="/desktop1">Back</Link></span>
        </span>
        <span className="desktop5-text32">
          <span> 
          <Link to="/cart">Add to cart</Link></span>
        </span>
        
        <span className="desktop5-text54">
          <span>
         </span>
        </span>
        <span className="desktop5-text56">
          <span>Starters</span>
        </span>
      </div>
    </div>
  )
}

export default Desktop5