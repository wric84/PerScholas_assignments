import React from 'react'

class DisplayList extends React.Component {
    render() {

        let renderedList;
        let { currentList, groceries } = this.props

        if (currentList === 'Grocery List') 
            renderedList = groceries.filter(item => !item.isPurchased ? true : false)
        else if (currentList === 'Purchased List')
            renderedList = groceries.filter(item => item.isPurchased ? true : false)

        return (
            <div>
                {renderedList.map((grocery, index) =>
                        <ul key={index}>
                            <li>{grocery.item}</li>
                            <li>{grocery.units}</li>
                            <li onClick={this.props.togglePurchase} id={grocery.id}>
                                {grocery.isPurchased ? 'Remove' : 'Purchase'}
                            </li>
                        </ul>
                )}
            </div>
        )
    }
}

export default DisplayList