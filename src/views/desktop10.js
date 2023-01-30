import React from 'react'
import './desktop10.css'
import rotti from './rotti.png'
import rotibg from './rotibg.jpeg'
import { Link } from 'react-router-dom'
const Desktop10 = (props) => {
  return (
    <div className="desktop10-container">
        <title>project</title>
      <div className="desktop10-desktop10">
        <img
          src={rotibg}
          className="desktop10-images1"
        />
        <span className="desktop10-text">
          <span>ROTI</span>
        </span>
        <span className="desktop10-text32">
          <span>
          <Link to="/cart">Add to cart</Link></span>
        </span>
        <span className="desktop10-text31">
          <span>
            <Link to="/desktop1">Back</Link></span>
        </span>
        <span className="desktop10-text49">
          <span>
            </span>
        </span>

        <span className="desktop10-text09">
          <span>
            <span>Phulka-30.00</span>
            <br></br>
            <span>Plain Naan-35.00</span>
            <br></br>
            <span>Butter Naan-45.00</span>
            <br></br>
            <span>Garlic Naan-70.00</span>
            <br></br>
            <span>Aloo Paratha-60.00</span>
            <br></br>
            <span>Stuffed Paratha-80.00</span>
            <br></br>
            <span>Tandoori Roti-45.00</span>
            <br></br>
            <span>Panner Paratha-60.00</span>
            <br></br>
            <span>Chapati-45.00</span>
            <br></br>
            <span>Rumali Roti-45.00</span>
            <br></br>
            <span>Wheat Paratha-30.00</span>
            <br></br>
            <span>
              Veechu Paratha-50.00
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
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
          </span>
        </span>
      </div>
    </div>
  )
}

export default Desktop10