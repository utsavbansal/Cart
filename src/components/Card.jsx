import React, { useContext } from 'react'
import '../styles/card.css'
import { useCart} from '../CartContext'

const Card = ({item/*, handleClick*/}) => {

    const {addToCart} =useCart();
    const {title,author,price,img} = item;
  return (
    <div className='cards'>
      <div className='image_box'>
        <img src={img} alt='image'/>
      </div>
      <div className='details'>
        <p>{title}</p>
        <p>{author}</p>
        <p> Price -  {price}Rs</p>
        <button onClick={()=> addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card
