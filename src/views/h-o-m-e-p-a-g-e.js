import React from 'react'
import './h-o-m-e-p-a-g-e.css'
import Chef from './Chef.jpeg';
import rectangle from './rectangle.png';
import background1 from './background1.png'
import { Link } from 'react-router-dom';
const HOMEPAGE = (props) => {
  return (
    <div className="h-o-m-e-p-a-g-e-container">
        <title>project</title>
      <div className="h-o-m-e-p-a-g-e-h-o-m-e-p-a-g-e">
        <img
          alt="spicesblackbackgroundspacetext194"
          src={background1}
          className="h-o-m-e-p-a-g-e-spicesblackbackgroundspacetext1"
        />
        <img
          alt="WhatsAppImage20221125at1906195"
          src={Chef}
          className="h-o-m-e-p-a-g-e-whats-app-image20221125at19061"
        />
        <img
          alt="Rectangle196"
          src={rectangle}
          className="h-o-m-e-p-a-g-e-rectangle1"
        />
        <img
          alt="Rectangle297"
          src={rectangle}
          className="h-o-m-e-p-a-g-e-rectangle2"
        />
        <img
          alt="Rectangle398"
          src={rectangle}
          className="h-o-m-e-p-a-g-e-rectangle3"
        />
        <img
          alt="Rectangle499"
          src={rectangle}
          className="h-o-m-e-p-a-g-e-rectangle4"
        />
        <span className="h-o-m-e-p-a-g-e-text">
          <span>
          <Link to="/desktop6">ABOUT</Link></span>
        </span>
        <span className="h-o-m-e-p-a-g-e-text2">
          <span>
          <Link to="/desktop1">MENU</Link></span>
        </span>
        <span className="h-o-m-e-p-a-g-e-text4">
          <span>
            <Link to="/desktop4">CONTACT</Link>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="h-o-m-e-p-a-g-e-text6">
          <span>
          <Link to="/frame1">FEEDBACK</Link></span>
        </span>
      </div>
    </div>
  )
}

export default HOMEPAGE