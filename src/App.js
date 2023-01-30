import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import './style.css'
import Desktop1 from './views/desktop1'
import HOMEPAGE from './views/h-o-m-e-p-a-g-e'
//import Desktop2 from './views/desktop2'
import Frame1 from './views/frame1'
import Desktop4 from './views/desktop4'
import Desktop5 from './views/desktop5'
import Desktop6 from './views/desktop6'
import Desktop7 from './views/desktop7'
import Desktop8 from './views/desktop8'
import Desktop9 from './views/desktop9'
import Desktop10 from './views/desktop10'
import Paymentcard from './views/Paymentcard'
import PaymentUpi from './views/PaymentUpi'
import PaymentCash from './views/PaymentCash'
import Cart from './views/Cart'
import Address from './views/Address'
import Success from './views/Success'
function App (){
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HOMEPAGE/>}/>
    <Route path='Desktop1' element={<Desktop1/>}/>
    <Route path="Frame1" element={<Frame1/>}/>
    <Route path='Desktop4' element={<Desktop4/>}/>
    <Route path='Desktop6' element={<Desktop6/>}/>
    <Route path='Desktop5' element={<Desktop5/>}/>
    <Route path='Desktop7' element={<Desktop7/>}/>
    <Route path='Desktop8' element={<Desktop8/>}/>
    <Route path='Desktop9' element={<Desktop9/>}/>
    <Route path='Desktop10' element={<Desktop10/>}/>
    <Route path="/payment" element={<Paymentcard />}></Route>
      <Route path="/paymentupi" element={<PaymentUpi />}></Route>
      <Route path="/paymentcash" element={<PaymentCash />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="/success" element={<Success />}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;



