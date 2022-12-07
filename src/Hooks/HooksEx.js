import React, {useEffect, useState} from 'react'
import PrimarySearchAppBar from '../components/Mui'

function HooksEx() {
  const[count,anka]=useState(100)
  const[count1,priya]=useState(10)
  const[count2,bow]=useState(0)
  let inc=()=>{
    anka(count+1)
  }
  let incre=()=>{
    priya(count1+5)
  }
  useEffect(()=>{
    bow(count2+1);
    document.title="BOWBOW"
    console.log({count2})
  })
  return (
    <div>
    <h1>{count2}</h1>
    <button onClick={inc}>KISSME{count}</button>
    <button onClick={incre}>KISSME{count1}</button>
    </div>
  )
}
export default HooksEx
