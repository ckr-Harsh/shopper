import React from 'react'
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import { selectTotalItems } from '../features/cart/cartSlice';
import {useSelector} from 'react-redux';

const Navbar = () => {
    const itemsInCart = useSelector(selectTotalItems);
    
    return (
        <div className={styles.navbar}>
                <NavLink exact to="/"><h2>Shopper</h2></NavLink>
            <div>
                <NavLink exact to="/cart"><h4>Cart <span>({`${itemsInCart}`})</span></h4></NavLink>
            </div>
                
        </div>
    )
}

export default Navbar;
