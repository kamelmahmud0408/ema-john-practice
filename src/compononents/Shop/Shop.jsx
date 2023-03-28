import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart=getShoppingCart();
        let savedCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=> product.id===id)
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    },[products])

    const handleAddtoCart=(product)=>{
      let newCart=[];
      const exists=cart.find(pd=> pd.id===product.id);
      if(!exists){
         product.quantity=1;
         newCart=[...cart,product]
      }
      else{
        exists.quantity=exists.quantity+1;
        const reamining=cart.filter(pd=> pd.id !== product.id);
        newCart=[...reamining,exists];
      }

       setCart(newCart);
       addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product=><Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
               }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;