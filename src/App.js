import React, { useEffect, useState } from 'react'
import Header from "./components/Layout/Header";
import MealsList from './components/Meals/MealsList';
import MealSummary from './components/Meals/MealSummary'
import Card from "./components/UI/Card";
import Cart from './components/Cart/Cart'
import CartProvider from "./Store/CartProvider";
import Classes from "./App.module.css";

function App() {
  const [cartList,updateMeals] = useState([]);
  const [scrolled,updateScroll] = useState(false);

  const [modalShow,showCartModal] = useState(false);

  const hideCart = () => {
    showCartModal(false);
  }

  const showCart = () => {
    showCartModal(true);
  }

  const updateCart = (items) =>{
    console.log(items)
    const list = [...cartList,items]
    updateMeals(list)
    console.log(cartList)
    
  }

  const onPageScroll = () => {
    window.addEventListener('scroll', () => {
      if(window.scrollY != 0){
        updateScroll(true);
      }
      else{
        updateScroll(false);
      }
   });
  }


  return (
    <CartProvider>
      <Header showCart={showCart} ifScrolled={scrolled} onScroll={onPageScroll()}/>
      {modalShow && <Cart hideCart={hideCart}/>}
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
