import React from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
  // get data from store---
  const items=useSelector((state)=>state.cart);
  return (

      <div style={{display:'flex', alignItems:"space-between", justifyContent:"space-between"}}>

      <span className='logo'>ReduxStore</span>
        <div >
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/cart'>Cart</Link>
            <span className='cartCount'>CartItems:{items.length}</span>
        </div>
      </div>
    

  );
}

export default Navbar;
