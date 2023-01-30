import { Link } from 'react-router-dom'
import React from 'react'
import './desktop4.css'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import rec1 from './rec1.png'

const Desktop4 = (props) => {
  return (
    <div className="desktop4-container">
        <title>project</title>
      <div className="desktop4-desktop4">
        <img
          src={pic2}
          alt="hotspicybbqchickenwingsgreensaladleafsteamsmokebla949"
          className="desktop4-hotspicybbqchickenwingsgreensaladleafsteamsmokebla"
        />
        <img
          src={pic1}
          alt="chickenmeatbannerrawchickenlegsandfriedspicychicke950"
          className="desktop4-chickenmeatbannerrawchickenlegsandfriedspicychicke"
        />
        <img
          src={rec1}
          alt="Rectangle1951"
          className="desktop4-rectangle1"
        />
        <img
          src={rec1}
          alt="Rectangle2952"
          className="desktop4-rectangle2"
        />
        <img
          src={rec1}
          alt="Rectangle3953"
          className="desktop4-rectangle3"
        />
        <img
          src={rec1}
          alt="Rectangle4954"
          className="desktop4-rectangle4"
        />
        <span className="desktop4-text">
          <span>
            <span>Goldwins Branch</span>
            <br></br>
            <span>opp:Ramalakshmi Mahal</span>
            <br></br>
            <span> 96777 15111</span>
            <br></br>
            <span> 99431 9997</span>
            <br></br>
            <span> 99436 7808</span>
          </span>
        </span>
        <span className="desktop4-text11">
          <span>
            <span>Avinashi - L&amp;T</span>
            <br></br>
            <span>Highway Branch</span>
            <br></br>
            <span> 77089 10002</span>
            <br></br>
            <span> 99436 99995</span>
            <br></br>
            <span> 97513 711119</span>
          </span>
        </span>
        <span className="desktop4-text22">
          <span>Get in touch with us</span>
        </span>
        <img
          src={pic3}
          alt="WhatsAppImage20221125at19061958"
          className="desktop4-whats-app-image20221125at19061"
        />
        <span className="desktop4-text24">
          <span>
            <span>GandhiPuram Branch</span>
            <br></br>
            <span>Tel : 0426 11558</span>
            <br></br>
            <span>0426 885577</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="desktop4-text33">
          <span> 
          <Link to="/">BACK</Link></span>
        </span>
        <span className="desktop4-text35">
          <span>CONTACT US</span>
        </span>
      </div>
    </div>
  )
}

export default Desktop4