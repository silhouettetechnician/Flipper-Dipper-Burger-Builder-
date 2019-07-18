import React from 'react'
import Modal from '../../../src/components/UI/Modal/Modal'
import Aux from '../../HOC/Aux'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1.5,
    bacon: 1
}
class BurgerBuilder extends React.Component {
    constructor( props ){
        super( props )
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }
    }
    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((a,b) => a + b, 0)
            this.setState({purchasable: sum > 0 })            
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice + priceAddition
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    deleteIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0){
        return
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
    
        updatedIngredients[type] = updatedCount
        const priceDelete = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice - priceDelete
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        alert('you continue')
    }

    render() { 
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
           <Aux>
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                    />
               </Modal>
               <Burger ingredients={this.state.ingredients} />
               <BurgerControls 
               ingredientAdd = {this.addIngredientHandler}
               ingredientDelete = {this.deleteIngredientHandler}
               disabledInfo={disabledInfo}
               price={this.state.totalPrice}
               purchasable={this.state.purchasable}
               ordered={this.purchaseHandler}/>
           </Aux>
        );
    }
}
 
export default BurgerBuilder;