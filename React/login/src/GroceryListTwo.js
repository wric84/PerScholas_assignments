import { useDispatch, useSelector } from 'react-redux'

// useState

function GroceryListTwo() {

    const dispatch = useDispatch()
    const groceries = useSelector(state => state.groceries)

    console.log(groceries)
    addItem = (item) => {
        // item.id = this.state.groceries.length
        /*
        this.setState({
            groceries: [...this.state.groceries, item]
        })
        */
       dispatch({
           type: 'ADD_ITEM',
           payload: item
       })
    }

    togglePurchase = (event) => {
        
        // this.setState({ groceries })
        dispatch({
            type: 'TOGGLE_PURCHASE',
            payload: event.target.id
        })
    }

    return (
        
        <div>
            <h3>Grocery List 2</h3>
        </div>
    )
}

export default GroceryListTwo