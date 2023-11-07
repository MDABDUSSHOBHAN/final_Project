import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

  const [product,setProduct] =  useState([]);
const [cart,setCart] = useState([]);


 useEffect(()=>{
 const url ='https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
 fetch(url)
 .then(response=> response.json())
 .then(data=>setProduct(data))
    
 },[])
// For display backend Data....
 useEffect(()=>{

let storedCard= getShoppingCart();
const savecart=[];
   console.log(storedCard);
// step :1 Get Id
for(const Id in storedCard){
    console.log(Id);
    // step:2 Get the product by using id 
    const addProduct= product.find(products=> products.id === Id);
   console.log('added Product',addProduct);
    // get quantity of the priduct 
    // const  quantity= storedCard[Id];

    // add quantity
  if(addProduct){
    const  quantity= storedCard[Id];
    addProduct.quantity = quantity;
    // add the added cart to the 
    savecart.push(addProduct)
  }

     
    //   addProduct.quantity = quantity;

     console.log(addProduct);
}
setCart(savecart)





 },[product])

 const handelAddToCart= (product)=>{

    const newCart =[...cart,product];
    setCart(newCart);
    console.log(product);
    addToDb(product.id);
    // const newCart = [...cart,product];
    // setCart(newCart);
   }


    return (

        
        <div className='shop_container'>
             
            <div className="product_container">
                
                 {/* Add Map Mathoad for individual Data */}
                 {
                product.map(products=> <Product
                
                key ={products.id}
                products={products}
                handelAddToCart ={handelAddToCart}
                ></Product>)
            } 
               
            </div>
             
            {/* This is Cart Contaier  */}

            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;