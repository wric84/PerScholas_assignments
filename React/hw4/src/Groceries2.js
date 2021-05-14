import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import AddingGroceries, {finalGrocery} from './Groceries2adding'


const Grocery = (props) => {
    const groceryList = props.currentList.map(grocery => {
    return(
    <div key={grocery.id}>{grocery.key} {grocery.item} {grocery.quantity} {grocery.units} 
        <button value={grocery.id} onClick={props.removeItem}>Remove</button>
    </div>) 
    })
    return(
        <div>
            <h2>{groceryList}</h2>
        </div>
    )
}


export default Grocery