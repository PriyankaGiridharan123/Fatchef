import React from 'react'
import './desktop6.css'
import abt1 from './abt1.png'
import Chef from './Chef.jpeg'
import { Link } from 'react-router-dom'
const Desktop6 = (props) => {
  return (
    <div className="desktop6-container">
        <title>project</title>
      <div className="desktop6-desktop6">
        <img
          src={abt1}
          alt="WhatsAppImage123"
          className="desktop6-whats-app-image20221212at12081"
        />
        <img
          src={Chef}
          alt="Line29811"
          className="desktop6-chef1"
        />
        <span className="desktop6-text">
          <span className="desktop6-text01">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="desktop6-about1"><b><u>ABOUT US</u></b></span>
        </span>
        <span className="desktop6-text03">
          <span className="desktop6-text04">
            <span>`</span>
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
          </span>
          <span>
            <span>
              {' '}
              <i>Fatchef has a range of unique treats created</i>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              {' '}
              <i>just to satiate your taste buds. From wholesome healthy</i>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <i>options to exquisite sweets, we have innovated and</i>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <i>reinvented the celebrated South Indian Cuisine for some.</i>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <i>Special delicacies available exclusively at our outlets.</i>
            </span>
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
        <span className="desktop6-text28">
          <span><b><i> WELCOME TO FATCHEF!!</i></b></span>
        </span>
        <span className="desktop6-arrow3">
        <span>
        <Link to="/">BACK</Link></span>
        </span>
      </div>
    </div>
  )
}

export default Desktop6