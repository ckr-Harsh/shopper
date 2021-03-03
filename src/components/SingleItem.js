import React from 'react'
import styles from './SingleItem.module.css'
import { useDispatch } from 'react-redux'
import { addItemToCart, adjustQty } from '../features/cart/cartSlice'

const SingleItem = ({id, title, image, description, price, qty}) => {

    const dispatch = useDispatch();

    const myDispatches = () => {
        dispatch(addItemToCart(
            {   id: id,
                title: title,
                image: image,
                description: description,
                price: price,
                qty: qty
             }
        ))

        dispatch(adjustQty(id));
    }

    return (
        <div className={styles.singleItem}>
            <img src={image} alt={title}/>
            <p>{title}</p>
            <p className={styles.desc}>{description}</p>
            <p className={styles.price}>price:  ₹{price}</p>
            <br/>
            <button onClick={myDispatches}>Add To Cart</button>
        </div> 
    )
}

export default SingleItem
