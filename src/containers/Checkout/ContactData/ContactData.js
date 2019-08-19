import React, { Component } from 'react'
import axios from '../../../axiosOrders'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {

    state = { 
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'Your name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                     type: 'email',
                     placeholder: 'email'
                },
                value: ''
            }, 
            street: {
                elementType: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'Street'
                },
                value: ''
            },
            postcode: {
                elementType: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'Postcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                     type: 'text',
                     placeholder: 'Country'
                },
                value: ''
            },         
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'fastest', displayValue: 'Fastest'}
                    ]
                },
                value: ''
            },
        }
    }

     orderHandler = (e) => {
         e.preventDefault()
                this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,

        }
        axios.post('/orders.json', order)
            .then(response => this.setState({ loading: false }))
            .catch(err => this.setState({ loading: false  }))
        this.props.history.push('/')
     }
    render() { 

        const outputArray = []
        for (let key in this.state.orderForm){
            outputArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        

        let form = (
            <form>
            {outputArray.map(outputElement =>(
                <Input 
                elementType={outputElement.config.elementType}
                elementConfig={outputElement.config.elementConfig}
                value={outputElement.config.value}
                key={outputElement.id} />
                ))}
            <Button 
                btnType='Success' 
                clicked={this.orderHandler}>ORDER NOW    
            </Button>

        </form>
        )

        if(this.state.loading){
            form = <Spinner />
        }
        return ( 
            <div className={classes.ContactData}>
                <h3>Enter your contact details</h3>
                {form}
            </div>
         )
    }
}
 
export default ContactData;