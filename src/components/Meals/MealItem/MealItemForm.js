import React, { useContext, useEffect, useRef } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context';

// const ref = React.createRef();

const MealItemForm = (props) => {
    const ref = React.createRef();
    const cartCtx = useContext(CartContext);
    const onAddHandler = (event) => {
        event.preventDefault();
        cartCtx.onAddItem(props.items, +ref.current.value);
    }

    // useEffect(() => {
    //     console.log(cartCtx.items)
    // }, props)
    return (
        <form className={classes.form}>
            <Input
                label='Quantity'
                input={{
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
                id: props.items.id
                }}
                ref={ref}
            />
            <button onClick={onAddHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm