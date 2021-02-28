import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  selectCart,
} from './cartSlice';

export function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="add to cart"
          onClick={() => dispatch(addItemToCart())}
        >
          add item to cart
        </button>
      </div>
    </div>
  );
}
