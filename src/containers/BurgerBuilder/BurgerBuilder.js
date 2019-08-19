import React from 'react'
import Modal from '../../../src/components/UI/Modal/Modal'
import Aux from '../../HOC/Aux'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler'
import axios from '../../axiosOrders'


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
            ingredients: null,
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
            loading: false
        }
    }

    componentDidMount(){
        axios.get('https://burger-builder-3654d.firebaseio.com//ingredients.json')
            .then(response => this.setState({ ingredients: response.data}))
            .catch(error => console.log(error))
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
        const queryParams = []
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' 
            + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice)
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })



    }

    render() { 
        const disabledInfo = {
            ...this.state.ingredients   
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null

        let burger = this.state.error ? <p>Ingredients can't be loaded...</p> : <Spinner />

        if(this.state.ingredients){
        burger = (         
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls 
                ingredientAdd = {this.addIngredientHandler}
                ingredientDelete = {this.deleteIngredientHandler}
                disabledInfo={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}/>
        </Aux>  )
        orderSummary = <OrderSummary 
                            ingredients={this.state.ingredients} 
                            price={this.state.totalPrice} 
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinue={this.purchaseContinueHandler}/>
        }
        if(this.state.loading){
            orderSummary =  <Spinner />
        }
        return (
           <Aux>
                    {burger}
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
               </Modal>
           
           </Aux>
        );
 
    }
}
 
export default withErrorHandler(BurgerBuilder, axios) 