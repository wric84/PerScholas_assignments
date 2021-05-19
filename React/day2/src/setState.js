import React, {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            message: 'Hello!'
        }
    }
    increment(){
        this.setState({
            count:this.state.count + 1
        }, ()=>{
            console.log('callback value ' + this.state.count)
        })
    }
    render(){
        return(
            <div>
                <div> {this.state.count}</div>
                <button onClick={()=> this.increment()} >Increment</button>
            </div>
        )
    }
}
export default Counter