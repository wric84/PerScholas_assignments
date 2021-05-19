import React, {Component} from 'react'
// import ReactDOM from 'react-dom'

class nameForm extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
        
        this.changingForm = this.changingForm.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }
    changingForm(e){
        this.setState({value:e.target.value})
    }
    formSubmit(e){
        alert('The function changing form has been altered with ' + this.state.value)
        e.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <label>
                    Favorite Cartoon as a kid:
                    <input type="text" value={this.state.value} onChange={this.changingForm} />
                </label>
            </form>
        )
    }
}

export default nameForm