import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    let result = ctx.items.map(a => a.quantity);
    let sumOfQuantity = result.reduce((pv, cv) => pv + cv, 0);

    const onShowCart = () => {
        props.onShowCart();
    }

    return (
        <Fragment>
            <button className={classes.button} onClick={onShowCart}>
                <span>Your Cart</span>
                <span className={classes.badge}>
                    {sumOfQuantity}
                </span>
            </button>
        </Fragment>
    )
}

export default HeaderCartButton