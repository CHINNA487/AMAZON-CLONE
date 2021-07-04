import { ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_3000x1200_SVA._CB667240774_.jpg" alt=""/>
<div className="checkout__right">
                <Subtotal/>
                </div>
            
            <div>
                <h2 className="checkout__title"> Shopping Cart</h2>
                {basket.map(item=>(
                    <CheckoutProduct className="checkout__details"
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                <div className="checkout__right">
                <Subtotal/>
                </div>
            </div>
            
            </div>

        </div>
            
    ) 
}

export default Checkout;
