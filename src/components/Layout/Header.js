import React from 'react'
import classes from './Header.module.css'
import meals  from "../../Assets/meals.jpg";
import HeaderCart from '../Cart/HeaderCartButton'

const Header = (props) => {
    return(
        <React.Fragment>
          <header className={classes.header}>
              <h1>ReactMeals</h1>
              <HeaderCart />
          </header>  
          <div className={classes['main-image']}>
              <img src={meals} alt='React meals'/>
          </div>
        </React.Fragment>
    )
}

export default Header