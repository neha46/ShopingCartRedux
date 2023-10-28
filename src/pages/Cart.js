import React from 'react';  
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {remove} from '../redux/CartSlice.js';
import {useSelector} from 'react-redux';


const Cart = () => {
  const dispatch=useDispatch();
  const DataItem=useSelector((state)=>state.cart)
  const handleRemove=(dataId)=>{
    dispatch(remove(dataId))
  }
  
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
         DataItem.map((data)=>(
          <div className='cartCard' key={data.id}>
            <img src={data.image} alt="" />
            <h2>{data.title}</h2>
            <h3>{data.price}</h3>
            <button className='btn' onClick={()=>handleRemove(data.id)}>remove Item</button>
             

          </div>
         ))
        }

      </div>
    </div>
  );
      }
export default Cart;
