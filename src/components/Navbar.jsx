import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css'
import {Link} from 'react-router-dom';

import { useCart } from '../CartContext';

const Navbar = ({size,setShow}) => {

    const {cart} = useCart()

  return (
    <nav>
        <div className='nav_box'>
            <Link to='/' className='my_shop'>
                Book Shop
            </Link>
            {
                /*
            <span className='my_shop' onClick={()=> setShow(true)}>
                Book Shop
            </span>
                */
            }
            {/*<div className='cart' onClick={()=> setShow(false)}>*/}
                <Link to='/cart' className='cart'>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{/*size*/cart.length}</span>
            {/*</div>*/}
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
