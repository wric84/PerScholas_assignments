import React from 'react'

class Average extends React.Component{
    render(){
        return(
            <div className="Average">
                <h1>Average</h1>
                <h3>{this.props.average}</h3>
            </div>
        )
    }
}

export default Average;