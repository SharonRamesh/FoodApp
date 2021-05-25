import React,{ useState, useContext} from "react";
import meals from './MealsDummy'
import classes from "./MealsList.module.css";
import InputComponent from '../UI/InputComponent'
import CartContext from '../../Store/cart-context'

const MealsList = (props) => {
    const [numberofItem,updateItem] = useState(0);

    const handleChange = (event) => {
        updateItem(+event.target.value)
    }

    const addCart = (id,price,name,numberofItem) => { 
        if(+numberofItem > 0){
            // contxt.cart = [...contxt.items,{id:id,no:numberofItem}];
            contxt.addItem({
                id:id,
                price:price,
                name:name,
                totalAmount:numberofItem
            })
            updateItem(0);
        }
    }

    const contxt = useContext(CartContext);

    return(
        meals.map((meal) => {
            return <li key={meal.id}>
                <h4>{meal.name}</h4>
                <p>{meal.description}</p>
                <span className={classes.mealPrice}>${meal.price}</span>
                <div className={classes.catAdd}>
                    <span className={classes.inputStyle}>
                        <h4>Amount</h4>
                        <InputComponent type='number' styleClass={classes.inputClass} value={numberofItem !==0  ? numberofItem : ''} onChangeHandler={handleChange}/>
                    </span>
                    <button onClick={() => addCart(meal.id,meal.price,meal.name,numberofItem)} className={classes.addButton}>+Add</button>
                </div>
            </li>
        })
    )
}

export default MealsList;