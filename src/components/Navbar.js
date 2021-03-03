import React, {useState, useEffect} from 'react'
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import { selectCart } from '../features/cart/cartSlice';
import {useSelector} from 'react-redux';

import { IconButton, Badge} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'


const Navbar = () => {
        const [cartCount, setCartCount] = useState(0);
        const cart = useSelector(selectCart);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
        count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);
    
    return (
        <div className={styles.navbar}>
                <NavLink exact to="/"><h2>Shopper</h2></NavLink>
            <div>
                <NavLink exact to="/cart">
                    <IconButton aria-label="Cart Items" color="inherit">
                        <Badge badgeContent={cartCount} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </NavLink>
            </div>
                
        </div>
    )
}

export default Navbar;
