import React from 'react'
import './Success.css'
import { Link } from 'react-router-dom'
import pay1 from './pay1.png'

export default function Order() {
  return (
    <div id="success">
    <div className='img1'>
   <img src={pay1} alt=""width="500"></img></div>
       <Link to='/'><button class='home'>Back</button></Link><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
  }