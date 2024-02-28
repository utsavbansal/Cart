import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import './App.css';
import Cart from './components/Cart';
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import CartProvider from './CartContext';
const App = () => {

  //const [cart,setCart] = useState([]);
  //const [warning,setWarning] = useState(false);
  const[show,setShow] = useState(true);

  // const handleClick=(item) =>{
  //   let isPresent = false;
  //   cart.forEach((product) =>{
  //     if(item.id === product.id)
  //     isPresent= true;
  //   })

  //   if(isPresent){
  //     setWarning(true);
  //     setTimeout(()=>{
  //       setWarning(false);
  //     },2000);
  //     return;
  //   }
  //   setCart([...cart,item]);
  // }

  // const handleChange = (item,d) => {
  //   let ind = -1;
  //   cart.forEach((data,index) => {
  //     if(data.id === item.id)
  //     ind = index;
  //   });
  //   const tempArr = cart;
  //   tempArr[ind].amount +=d;
  //   console.log(tempArr);

  //   if(tempArr[ind].amount === 0){
  //     tempArr[ind].amount =1;
      
  //   }
  //   setCart([...tempArr])
  // }

  return (
    <CartProvider>
    <BrowserRouter>
    <div>
      <Navbar /*size={cart.length} setShow={setShow}*//>
      <Routes>
        <Route path='/' element={<Shop /*handleClick={handleClick}*//>}></Route>
        <Route path='/cart' element={<Cart /*cart={cart} setCart={setCart} handleChange={handleChange}*//>}></Route>
      </Routes>
      
      {
        /*
        show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        */
      }
      
      {
        /*
        warning && <div className='warning'> Item is already in your cart </div>
        */
      }
    </div>
    
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
