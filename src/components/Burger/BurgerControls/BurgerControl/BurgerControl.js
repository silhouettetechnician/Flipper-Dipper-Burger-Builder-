import React from 'react'
import classes from './BurgerControl.css'

const BurgerControl = ( props ) => {

    return ( 
        <div className={classes.BurgerControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                onClick={props.deleted}
                className={classes.Less} 
                disabled={props.disabled}>
                Less
            </button>
            <button 
                onClick={props.added} 
                className={classes.More}>
                More
            </button>
        </div>
     );
}
 
export default BurgerControl;