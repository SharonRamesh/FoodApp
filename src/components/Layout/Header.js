import React from 'react'
import classes from './Header.module.css'
import meals  from "../../Assets/meals-new.jpg";
import HeaderCart from '../Cart/HeaderCartButton'

const Header = (props) => {

    const navClass = props.ifScrolled ? classes.scrolled : '';

    return(
        <React.Fragment>
          <header className={classes.header +" "+ navClass}>
              <h1>ReactMeals</h1>
              <HeaderCart showCart={props.showCart}/>
          </header>  
          <div className={classes['main-image']}>
              <img src={meals} alt='React meals'/>
          </div>
        </React.Fragment>
    )
}

export default Header