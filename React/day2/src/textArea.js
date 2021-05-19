import React from 'react'

class EssayForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 'Please vent your feelings here: '
        }
        this.formChange = this.formChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }
    formChange(e){
        this.setState({value: e.target.value})
    }
    formSubmit(e){
        alert('someone has expressed themselves: ' + this.state.value)
        e.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Express:
                    <textarea value={this.state.value} onChange={this.formChange}/>
                </label>
                <input type='submit' value='submit'/>
            </form>
        )
    }
}
export default EssayForm