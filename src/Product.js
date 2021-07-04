import { Button } from '@material-ui/core';
import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id, title, image, price, rating}) {
 const [{basket}, dispatch] = useStateValue();

    console.log("this is the basket ")
    const addToBasket=()=>{
        //dispatch the item into the Data Layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div className='product'>
            <div className='product__info'>
            <div>
                <img src={image} alt=""/>
                </div>
                
                <div>
                <p>{title}</p>
                <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i)=>(<p>🌟</p>
                    ))}

                </div>
                <button onClick={addToBasket}>Add to Cart</button>

                </div>
                
                
            </div>

        </div>
    )
}

export default Product;

