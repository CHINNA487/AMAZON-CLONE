import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"

function CheckoutProduct({id, image, title, price, rating}) {
    const[{basket}, dispatch]=useStateValue();
    const removeFromBasket=()=>{
        //Remove From Basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })

    }
    return (
        <div className='checkoutProduct'>
            <img className='CheckoutProduct__ image' src={image}/>
            <div className='CheckoutProduct__info'>
                <p className='CheckoutProduct__title'>{title}</p>
                <p className='CheckoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i)=>(<p>🌟</p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct;
