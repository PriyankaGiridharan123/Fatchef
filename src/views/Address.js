import React from 'react'
import './Address.css';
import bgimage from './bgimage.jpeg'
import { Link } from 'react-router-dom';
export default function Address() {
  return (
    <div className='Container'>
    <div className='image'>
    <img src="https://undsgn.com/wp-content/uploads/2018/04/ltotbngnzzu.jpg"></img>
    <br></br>
    </div>
    <Link to='/cart'>BACK</Link>
    <h2 id='abc'>ADDRESS DETAILS</h2>
    <label className='ad'><b>DoorNo/Street  : </b> </label>
    <input type="text" id="address" align="center"></input>
    <br></br>
    <br></br>
    <br></br>
    <label className='ci'><b>City:</b></label>
    <input type="text" id="city"></input>
    <br></br>
    <br></br>
    <label className='st'><b>State:</b></label>
    <input type="text" id="state"></input>
    <br></br>
    <label className='pi'><b>Pincode:</b></label>
    <input type="text" id="pincode"></input>
    <br></br>
    <br></br>
    <label className='cn'><b>Contact Number:</b> </label>
    <input  type="text" id="number" align="center"></input>
    <br></br>
    <br></br>
    <br></br>
    <Link to ='/payment' ><button id='br'>Proceed To Pay</button></Link>
    </div>
  )
}