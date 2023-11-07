import React from 'react';
import './cart.css'
const Cart = ({cart}) => {

console.log(cart);

   let total=0;
   let Totalshipping=0;
   let quantity=0;
   for(const product of cart){
    product.quantity= product.quantity || 1;
    total= total+product.price*product.quantity;
    Totalshipping= Totalshipping+product.shipping;
    // new
    quantity = quantity+ product.quantity;
   }    
     
   const tax= total*5.5/100;
   const toalGrand= tax+total+Totalshipping

   
  function linkpage(){

    console.log('Hey This is clicked');
    window.location.href ='https://65480205b9207a11fe40ac15--melodious-florentine-a7895e.netlify.app/';
  }
    return (
        <div className='cart'>
            <h3> Order Summary</h3>
                <p>Item ordered: <span className='newitem'>{quantity}</span> </p>
                <p>Total Price: <span className='newitem'>$ {total}</span></p>
                <p>Total Shipping: ${Totalshipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${toalGrand.toFixed(2)}</h4>
                <a  ></a>
                <button target='blanck' onClick={linkpage} className='btn_info1'>Please Order</button>
        </div>
    );
};

export default Cart;