import React, { Children, createContext, useContext,useState } from 'react'

const CartContext=createContext();

export const useCart = () =>{
    return useContext(CartContext);
}

export default function CartProvider({children}) {
    const [cart,setCart] = useState([]);
    const [warning,setWarning] = useState(false);


    const addToCart=(item) =>{
        let isPresent = false;
        cart.forEach((product) =>{
          if(item.id === product.id)
          isPresent= true;
        })
    
        if(isPresent){
          setWarning(true);
          setTimeout(()=>{
            setWarning(false);
          },2000);
          return;
        }
        setCart([...cart,item]);
      }
    
      const changeCartItemAmount = (item,delta) => {
        let ind = -1;
        cart.forEach((data,index) => {
          if(data.id === item.id)
          ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount +=delta;
        console.log(tempArr);
    
        if(tempArr[ind].amount === 0){
          tempArr[ind].amount =1;
          
        }
        setCart([...tempArr])
      }
    

return (
    <CartContext.Provider value={{cart,addToCart,changeCartItemAmount,warning,setWarning,setCart}}>
        {children}
    </CartContext.Provider>
  );
};
