import { useContext, useEffect, useState } from 'react';
import CartContext from './cart-context';

const Cart = (props) => {

    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        onTotalChange();
    }, [items])

    const onTotalChange = () => {
        console.log('totals', items)
        let totals = 0;
        items.forEach(element => {
            totals = totals + (element.price * element.quantity)
            console.log(totals)
        })
        setTotal(totals)
    }

    const onQuantityChange = (item, quantity, index) => {
        item.quantity = quantity;
        let stateCpy = items;
        setItems([...stateCpy]);
    }

    const onAddItem = (itemData, quantity) => {
        let newItem = itemData;
        let checker = false;
        items.every((element,index) => {
            if(element.id === itemData.id) {
                checker = true;
                onQuantityChange(element, quantity,index)
                return false;
            } else {
                checker = false;
                return true;
            }
        })
        if(checker === false) {
            newItem = Object.assign({quantity: quantity}, newItem);
            setItems([...items, newItem])
        }
    }

    const removeItem = (item) => {
        let itemList = items.filter(element => {
            return element.id != item.id
        })
        setItems([...itemList])
    }

    const onRemove = (key) => {
        let isLoop = true;
        items.every((element) => {
            if(element.id === key) {
                if(element.quantity != 1) {
                    element.quantity--;
                    return true;
                } else {
                    isLoop = false;
                    removeItem(element)
                    return false;
                }
            }
            return true;
        })
        if(isLoop === true) {
            setItems([...items])
        }
    }

    const onAdd = (key) => {
        items.map((element) => {
            if(element.id === key) {
                element.quantity++
            }
        })
        setItems([...items])
        // onTotalChange();
    } 

    const cartContext = {
        items: items,
        onAddItem: onAddItem,
        onQuantityChange: onQuantityChange,
        onRemove: onRemove,
        onAdd: onAdd,
        total: total
    };

    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Cart;