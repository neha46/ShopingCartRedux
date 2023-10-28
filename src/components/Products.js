import React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../redux/CartSlice.js'
import ProductSlice from '../redux/ProductSlice.js';
import { fetchProducts } from '../redux/ProductSlice.js';
import { STATUSES } from '../redux/ProductSlice.js';
const Products = () => {
 const dispatch =useDispatch();
 const {data,status}=useSelector((state)=>state.product)
    // const [products,setProducts]=useState([]);
    useEffect(()=>{
      // api fetch
      dispatch(fetchProducts())

      // const fetchProducts = async () => {
            // const res = await fetch('https://fakestoreapi.com/products');
            // const data = await res.json();
            // console.log(data);
            // set data
        //     setProducts(data);
        // };
        // fetchProducts();
        // }
    },[])

    if(status===STATUSES.LOADING)
    {return <h2>Loading....</h2>
    }

    if(status===STATUSES.ERROR){
      return <h2>Something went wrong!..</h2>
    }
console.log("products are",data)

// dispatch action---
const handleAdd=(product)=>{
dispatch(add(product))
};
   
  return (
    <div className="productsWrapper">
      {
        data.map(prod=>(
          <div className='card' key={prod.id}>
            
              <img src={prod.image} alt="" />
              <h2>{prod.title}</h2>
              <h3>{prod.price}</h3>
              <button className='btn' onClick={()=>handleAdd(prod)}>AddCart</button>
          </div>
        ))
      }
    </div>
  );
}

export default Products;
