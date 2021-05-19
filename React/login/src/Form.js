import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            item: '',
            units: '',
            isPurchased: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // package info into an item object 
        let newItem = {
            item: this.state.item,
            units: this.state.units,
            isPurchased: this.state.isPurchased
        }

        // reset the input values of form
        this.setState({
            item: '',
            units: ''
        })

        // add item to list
        this.props.addItem(newItem)
    }

    render() {
        return (
            <div className='form'>

            <form onSubmit={this.handleSubmit}>

                <label htmlFor='item'>Item</label> <br />
                <input 
                    id='item' 
                    onChange={this.handleChange} 
                    value={this.state.item} 
                    name='item' 
                />
                
                <br /><br />

                <label htmlFor='units'>Units</label> <br />
                <input 
                    id='units' 
                    onChange={this.handleChange} 
                    value={this.state.units} 
                    name='units' 
                />

                <br /><br />

                <input type='submit' />

            </form>

            </div>
        )
    }
}

export default Form