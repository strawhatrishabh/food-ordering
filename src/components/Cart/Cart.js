import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartModal = (props) => {
  const ctx = useContext(CartContext);

  const onRemove = (item) => {
    ctx.onRemove(item);
  } 

  const onAdd = (item) => {
    ctx.onAdd(item);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onRemove={onRemove.bind(null, item.id)}
            onAdd={onAdd.bind(null, item.id)}
          />
      ))}
    </ul>
  );

  const onHideCart = () => {
    props.onHideCart();
  }

  return (
  <Modal>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHideCart}>
          Close
        </button>
        {<button className={classes.button}>Order</button>}
      </div>
  </Modal>
  )
};

export default CartModal;
