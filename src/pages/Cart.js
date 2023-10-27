import React from 'react';  
import { UseSelector } from 'react-redux/es/hooks/useSelector';

const Cart = () => {
  const DataItem=useSelector((state)=>state.cart)
  return (
    <div>
      
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          DataItems.map((data)=>{
            
          })
        }

      </div>
    </div>
  );
}

export default Cart;
