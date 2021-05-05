import React from 'react'

class Review extends React.Component{
    render(){
        return(
            <div className='Review'>
                <h1>Reviews</h1>
                <h3>{this.props.review}</h3>
            </div>
        )
    }
}

export default Review