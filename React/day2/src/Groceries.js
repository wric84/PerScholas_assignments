import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const items = [
    {
        item: 'dog food',
        units: 'lbs',
        quantity: 1,
        isPurchased: false    
    },{
        item: 'Busch Lite',
        units: '30pk',
        quantity: 3,
        isPurchased: false    
    },{
        item: 'Microwave dinner',
        units: '12pk',
        quantity: 2,
        isPurchased: false    
    }
]

export default class Groceries extends Component {
    constructor(props){
        super(props)

        this.state = {
            item: '',
            units: '',
            quantity: 0,
            isPurchased: false
        }

        this.changingForm = this.changingForm.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }
    changingForm(e){
        this.setState({value:e.target.items})
    }
    formSubmit(e){
        alert(this.state.item + ' has been added to your grocery list')
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <label>
                    Add Groceries:
                    <input type="text" value={this.state.items} onChange={this.changingForm} />
                    <h3></h3>
                </label>
            </form>
        )
    }
}
