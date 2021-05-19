import Form from "./Form"
import React from 'react'
import DisplayList from './DisplayList'
import GroceryListTwo from './GroceryListTwo'

import { connect } from 'react-redux'

class Groceries extends React.Component {
    constructor() {
        super()
        this.state = {
            currentList: 'Grocery List' 
        }
    }

    addItem = (item) => {
        // item.id = this.state.groceries.length
        /*
        this.setState({
            groceries: [...this.state.groceries, item]
        })
        */
       this.props.dispatch({
           type: 'ADD_ITEM',
           payload: item
       })
    }

    togglePurchase = (event) => {
        
        // this.setState({ groceries })
        this.props.dispatch({
            type: 'TOGGLE_PURCHASE',
            payload: event.target.id
        })
    }

    toggleList = () => {

        let { currentList } = this.state

        if (currentList === 'Grocery List')
            this.setState({ currentList: 'Purchased List' })
        else if (currentList === 'Purchased List')
            this.setState({ currentList: 'Grocery List' })
    }

    render() {

        let listName = this.state.currentList === 'Grocery List' ? 'Purchase List' : 'Grocery List'
        
        return (
            <div className='content'>

                <div>
                    <button onClick={this.toggleList}>{listName}</button>
                </div>

                <div className='lists'>
                    <h3>{this.state.currentList}</h3>

                    <DisplayList 
                        groceries={this.props.groceries} 
                        togglePurchase={this.togglePurchase} 
                        currentList={this.state.currentList}
                    />
                
                    <GroceryListTwo />
                </div>

                <div>
                    <Form addItem={this.addItem}/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    groceries: state.groceries
})

export default connect(mapStateToProps)(Groceries);