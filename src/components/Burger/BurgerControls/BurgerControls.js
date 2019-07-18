import React from 'react'
import classes from '../BurgerControls/BurgerControls.css'
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Meat', type: 'meat' },
    {label: 'Cheese', type: 'cheese' },
    {label: 'Salad', type: 'salad' },
    {label: 'Bacon', type: 'bacon' }
]
controls.forEach(item => {
    return 
})
const BurgerControls = ( props ) => {

    return ( 
        <div className={classes.BurgerControls}>
        <p>Current Price: <strong>£{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>
            <BurgerControl 
            added={() => props.ingredientAdd(ctrl.type)}
            deleted={() => props.ingredientDelete(ctrl.type)}
            disabled={props.disabledInfo[ctrl.type]}
            key={ctrl.label}
            label={ctrl.label}
            />
        )}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
            >
            ORDER NOW
        </button>
        </div>
     );
}
 
export default BurgerControls;