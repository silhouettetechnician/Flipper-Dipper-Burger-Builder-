import React from 'react'
import classes from './Order.css'
const Order = ( props ) => {
    
    const ingredients = []

    for(let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName, 
            amount: props.ingredients[ingredientName]})
    }

    const ingredientsOutput = ingredients.map(ingredient => {
        return <span 
        style={{textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', padding: '10px', border: '1px solid #ccc'}}
        key={ingredient.name}>{ingredient.name} {ingredient.amount}</span>
    })

    return ( 
        <div className={classes.Order}>
             <p>Ingredients: {ingredientsOutput}</p>
             <p>Price: <strong>£{parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
     );
}
 
export default Order;