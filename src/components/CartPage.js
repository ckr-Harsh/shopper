import React from 'react'
import styles from './CartPage.module.css'
import CartItem from './CartItem'
import {useSelector} from 'react-redux';
import {selectCart, selectTotalItems} from '../features/cart/cartSlice';

const CartPage = () => {
    const cartData = useSelector(selectCart);
    const counting = useSelector(selectTotalItems);
    
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
        total = total + cartData[i].price;
    }

    return (
        <div className={styles.cart}>
                {cartData.length === 0 ? (
                    <h2>Your Cart Is Empty, Go Purchase Something!!!</h2>
                ) : (
                    <div className={styles.cart__items}>
                        {
                            cartData.map(cart => <CartItem id={cart.id} title={cart.title} 
                                              description={cart.description} image={cart.image} price={cart.price} />)
                        }
                    </div>
                     )}
                
                <div className={styles.cart__summary}>
                    <h4 className={styles.summary__title}>Cart Summary</h4>
                    <div className={styles.summary__price}>
                    <span>{`TOTAL: ${counting} items`}</span>
                    <span>{`Rs ${total}`}</span>
                    </div>
                    <button className={styles.summary__checkoutBtn}>
                    Proceed To Checkout
                    </button>
                </div>
        </div>
    )
}

export default CartPage;