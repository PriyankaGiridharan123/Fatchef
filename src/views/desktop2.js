import React from 'react'
import './desktop2.css'
import paymentbg from './paymentbg.png'
import paymentrec1 from './paymentrec1.png'
import paymentrec2 from './paymentrec2.png'
import paymentrec3 from './paymentrec3.png'
import { Link } from 'react-router-dom'

const Desktop2 = (props) => {
  return (
    <div className="desktop2-container">
        <title>project</title>
      <div className="desktop2-desktop2">
        <img
          src={paymentbg}
          alt="scottwebbsEX6PAx4lGsunsplash173"
          className="desktop2-scottwebbs-e-x6p-ax4l-gsunsplash1"
        />
        <span className="desktop2-text">
          <span>PAYMENT</span>
        </span>
        <span className="desktop2-text02">
          <span>Your Order</span>
        </span>
        <img
          src={paymentrec1}
          alt="Rectangle176"
          className="desktop2-rectangle1"
        />
        <span className="desktop2-text04">
          <span>Bill Summary</span>
        </span>
        <span className="desktop2-text06">
          <span>
            <span>Item Total</span>
            <br></br>
            <span>Delivery Charge</span>
            <br></br>
            <span>GST</span>
            <br></br>
            <span>Grand Total</span>
          </span>
        </span>
        <span className="desktop2-text15">
          <span>Delivery To</span>
        </span>
        <img
          src={paymentrec2}
          alt="Rectangle2716"
          className="desktop2-rectangle2"
        />
        <span className="desktop2-text17">
          <span>Payment Via</span>
        </span>
        <span className="desktop2-text19">
          <span>
            <span>Credit Card</span>
            <br></br>
            <span>UPI</span>
            <br></br>
            <span>Online Payment</span>
            <br></br>
            <span>Cash On Delivery</span>
          </span>
        </span>
        <img
          src={paymentrec3}
          alt="Rectangle383"
          className="desktop2-rectangle3"
        />
        <span className="desktop2-text28">
          <span>
          <Link to="/">PAY</Link></span>
        </span>
      </div>
    </div>
  )
}

export default Desktop2
