import React from 'react'

class Sentiment extends React.Component{
    render(){
        return(
            <div className='Sentiment'>
                <h1>Sentiments</h1>
                <h3>{this.props.sentiment2}</h3>
                <h3>{this.props.sentiment1}</h3>
            </div>
        )
    }
}

export default Sentiment