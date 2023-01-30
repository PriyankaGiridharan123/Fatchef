import React from 'react'
import './desktop7.css'
import dessert from './dessert.png'
import { Link } from 'react-router-dom'

const Desktop7 = (props) => {
  return (
    <div className="desktop7-container">
        <title>project</title>
      <div className="desktop7-desktop7">
        <img
          src={dessert}
          alt="desert11013"
          className="desktop7-desert1"
        />
        <span className="desktop7-text">
          <span> DESSERTS</span>
        </span>
        <span className="desktop7-text02">
          <span>
            <span>Chocolate Chip Cookies-30.00</span>
            <br></br>
            <span>Blueberry Mojito-100.00</span>
            <br></br>
            <span>Package Blue Cake-40.00</span>
            <br></br>
            <span>Vanilla Gelato-45.00</span>
            <br></br>
            <span>Cold Coffee-60.00</span>
            <br></br>
            <span>Casata Icecream-150.00</span>
            <br></br>
            <span>Hot Chocolate Brownie-180.00</span>
            <br></br>
            <span>Butterscotch Icecream-100.00</span>
            <br></br>
            <span>Choco Troffle Cake-200.00</span>
            <br></br>
            <span>Coconut Kheer-80.00</span>
            <br></br>
            <span>Fruit Salad With Icecream-110.00</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="desktop7-text31">
          <span> 
          <Link to="/desktop1">Back</Link></span>
        </span>
        <span className="desktop7-text32">
          <span> 
          <Link to="/cart">Add to cart</Link></span>
        </span>
        <span className="desktop7-text49">
          <span>
            <span>
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Desktop7