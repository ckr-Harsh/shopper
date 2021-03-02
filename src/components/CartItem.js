import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { removeItemFromCart } from "../features/cart/cartSlice";
import styles from "./CartItem.module.css";


const CartItem = ({id, title, image, description, price}) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    
  const deleteFunc = () => {
      dispatch(removeItemFromCart(id))
  }

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={image}
        alt={title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{title}</p>
        <p className={styles.details__desc}>{description}</p>
        <p className={styles.details__price}>{price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={qty}
            onChange={(e)=> setQty(e.target.value)}
          />
        </div>
        <button
          className={styles.actions__deleteItemBtn}
          onClick={deleteFunc}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt="delete_button"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;