import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'


const CheckoutSummary = ( props ) => {
  
return(
    <div className={classes.CheckoutSummary}>
        <h1 style={{textAlign: 'center'}}>We hope you enjoy your Burger!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
         <Burger ingredients={props.ingredients} />
        </div>
        <Button btnType='Danger' clicked={props.cancelSummary}>CANCEL</Button>
        <Button btnType='Success' clicked={props.continueSummary} >CONTINUE</Button>
    </div>

)
}

export default CheckoutSummary