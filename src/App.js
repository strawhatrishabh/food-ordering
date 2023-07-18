import React, { useState } from "react";

import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealSummary"
import AvailableMeals from "./components/Meals/AvailableMeals";

import Cart from './store/Cart'
import CartModal from "./components/Cart/Cart";

function App() {

  const [showCart, setShowCart] = useState(false);

  const onShowCart = () => {
    setShowCart(true)
  }

  const onHideCart = () => {
    setShowCart(false)
  }

  return (
    <Cart>
      {showCart && <CartModal onHideCart={onHideCart} />}
      <Header onShowCart={onShowCart} />
      <MealsSummary />
      <AvailableMeals />
    </Cart>
  );
}

export default App;
