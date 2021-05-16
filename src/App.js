import React, { useState } from 'react'
import Header from "./components/Layout/Header";
import MealsList from './components/Meals/MealsList';
import MealSummary from './components/Meals/MealSummary'
import Card from "./components/UI/Card";
import classes from "./App.module.css";
import CartContext from './Store/cart-context'
import Cart from './components/Cart/Cart'
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartList,updateMeals] = useState([]);

  const updateCart = (items) =>{
    console.log(items)
    const list = [...cartList,items]
    updateMeals(list)
    console.log(cartList)
    
  }

  return (
    <CartProvider>
      <Header />
      <Cart />
      <MealSummary />
      <Card classToUse='whiteCard'>
        <ul>
          <MealsList onAddClick={updateCart}/>
        </ul>
      </Card>
    </CartProvider>
  );
}

export default App;
