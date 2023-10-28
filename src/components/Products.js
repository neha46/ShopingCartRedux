import React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {add} from '../redux/CartSlice.js'

const Products = () => {
 const dispatch =useDispatch();
    const [products,setProducts]=useState([]);
    useEffect(()=>{
      // api fetch

      const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);

        // set data
        setProducts(data);
        };
        fetchProducts();
    },[])

console.log("products are",products)

// dispatch action---
const handleAdd=(product)=>{
dispatch(add(product))
};
   
  return (
    <div className="productsWrapper">
      {
        products.map(product=>(
          <div className='card' key={product.id}>
            
              <img src={product.image} alt="" />
              <h2>{product.title}</h2>
              <h3>{product.price}</h3>
              <button className='btn' onClick={()=>handleAdd(product)}>AddCart</button>
             
            
          </div>
        ))
      }
    </div>
  );
}

export default Products;
