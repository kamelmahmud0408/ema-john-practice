import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import './Orders.css'

const Orders = () => {
    const savedCart=useLoaderData();
    // const [cart, setCart] =useState(savedCart);
    const [cart,setCart]=useState(savedCart);
    const handleRemovefromCart=(id)=>{
       const restItem = cart.filter(product=>product.id !== id);
       console.log(restItem)
        setCart(restItem) 
    }
    return (
        <div className='shop-container'>
            <div className='order-container'>
         {
            savedCart.map(product=><OrderReview key={product.id} product={product} handleRemovefromCart={handleRemovefromCart}></OrderReview>)
         }
            </div>
            <div className='cart-container'>
               <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;