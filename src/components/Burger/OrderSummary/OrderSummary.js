import Aux from '../../../HOC/Aux'
import React from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends React.Component{
//could be a functional component

    render( props ){
        const ingredientSummary = Object.keys(this.props.ingredients).map((igKey, i) => {
            return <li key={i}><span style={{ textTransform: 'capitalize' }}>{igKey}:</span> {this.props.ingredients[igKey]}</li>
        })

        return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with the following ingredients</p>
            <ul>{ingredientSummary}</ul>
            <p>Total Price:£{this.props.price.toFixed(2)}</p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>)
    }
 

}
 
export default OrderSummary;

