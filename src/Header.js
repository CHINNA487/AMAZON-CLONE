import React from 'react';
import './Header.css'
import indianFlag from './indianFlag.jpg'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

// Hello this is demo_main

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
                <img
                    className='header__logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" />
            </Link>

            <Link to="/">
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello</span>
                    <span className='header__optionLineTwo'>
                        <LocationOnOutlinedIcon className='header__LocationOnOutlinedIcon' />
                        Select Your Address</span>
                </div></Link>

            <Link to="/">
                <div className='header__search'>
                    <input className="header__searchInput" type="text" />
                    <SearchIcon className="header__searchIcon" />
                    {/* LOGO */}
                </div></Link>

            <div className='header__indianFlag'>
                <img src="indianFlag.jpg" alt="" />
            </div>

            <Link to="/Sign in">
                <div className="header__nav">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Hello, Sign In</span>
                        <span className='header__optionLineTwo'>Account & Lists</span>
                    </div>
                </div></Link>

            <Link to="/">
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div></Link>

            <Link to="/">
                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div></Link>

            <Link to="/Checkout">
                <div className="header__optionBasket">Cart
                    <ShoppingCartOutlinedIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>

    )
}
export default Header;