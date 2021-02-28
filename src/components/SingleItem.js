import React from 'react'
import styles from './SingleItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, addTotalItemsToCart, selectCart } from '../features/cart/cartSlice'

const SingleItem = ({title, image, description, price}) => {
    let count = 0;
    const dispatch = useDispatch();

    const cartData = useSelector(selectCart);

    for (let i = 0; i <= cartData.length; i++) {
        count++;
    }

    const myDispatches = () => {
        dispatch(addItemToCart(
            {
                title: title,
                image: image,
                description: description,
                price: price
             }
        ))

        dispatch(addTotalItemsToCart(count));
    }

    return (
        <div className={styles.singleItem}>
            <img src={image} alt={title}/>
            <p>{title}</p>
            <p>{description}</p>
            <p>price: {price}</p>
            <br/>
            <button onClick={myDispatches}>Add To Cart</button>
        </div> 
    )
}

export default SingleItem
