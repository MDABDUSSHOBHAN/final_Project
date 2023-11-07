import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = (props) => {
    // console.log(props);

    const {img,name,seller,quantity,price,ratings} = props.products;
    const handelAddToCart = props.handelAddToCart;

//    const handelAddToCart= (product)=>{

//     console.log('Card is added',product.id);
//    }


    return (
        <div className='product'>
            
            <img src={img} alt="No product view" />
           <div className='customize'>
           <h6 className='product_name' >{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Star </p>
           </div>
            <button onClick={() =>handelAddToCart(props.products)} className='btn_info'>
                Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
   

        </div>
    );
};

export default Product;