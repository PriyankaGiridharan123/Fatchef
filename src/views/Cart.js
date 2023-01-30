import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Cart.css'
import paybg from './paybg.jpeg'
import Paymentcard from './Paymentcard';
import { Link } from 'react-router-dom';

function Cart() {
    const [count1,setCount1]=useState(1);
    const [count2,setCount2]=useState(1);
    const inc1 =()=>{
        setCount1(count1+1)
    }
    const inc2 =()=>{
        setCount2(count2+1)
    }
    const dec1 =()=>{
        setCount1(count1-1)
    }
    const dec2 =()=>{
        setCount2(count2-1)
    }
    const f1price=110.00;
    const f2price=45.00;
	const navigate=useNavigate();
	let navaddress=()=>{
		navigate('/address')
	}
  return (
    <div class="body">
    <div class="CartContainer">
   	   <div class="Header">
   	   	<h3 class="Heading">Shopping Cart</h3>
   	   	<h5 class="Action">Remove all</h5>
   	   </div>

   	   <div class="Cart-Items">
   	   	  <div class="image-box">
   	   	  	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlf4CNB5jI3nhF0vs9CPqocj9Ov9jTmAn4vQ&usqp=CAU" style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title1">Chicken65 </h1>
   	   	  	<h3 class="subtitle">approx 15pcs</h3>
   	   	  	<img className="red" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKMbXJVy4lubxZ8ST4aWbHN81s36Ism3ljQ&usqp=CAU" style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn"  onClick={inc1}> + </div>
   	   	  	<div class="count">{count1}</div>
   	   	  	<div class="btn" onClick={dec1}>-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">Rs: {count1*f1price}</div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	   <div class="Cart-Items pad">
   	   	  <div class="image-box1">
	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrdSpc4RVqkTI6h4dcquQEFMYAqWZC-jPeQ&usqp=CAU"  style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title2">Butter Naan</h1>
   	   	  	<h3 class="subtitle">2pcs</h3>
   	   	  	<img className="green" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ239Zo9cNimCavHbLvlhLg8mD_tRLV_lTMrUmYQqRy7ILUc8Fu_XxIZPi6jAoIiRMcuiE&usqp=CAU" style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn" onClick={inc2}> + </div>
   	   	  	<div class="count">{count2}</div>
   	   	  	<div class="btn"onClick={dec2} >-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">Rs: {count2*f2price}</div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>
   	 <hr/> 
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Total:</div>
   	 		<div class="items">2 items</div>
   	 	</div>
   	 	<div class="total-amount">Rs: {(count1*f1price)+(count2*f2price)}</div>
   	 </div>
	 <br></br>
   	 <button class="button" onClick={navaddress}>Place Order</button></div>
   </div>
   </div>
  )
}

export default Cart