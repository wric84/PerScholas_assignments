import React from 'react'

class Player extends React.Component {
    render () {
      return (
        <div className={this.props.whichPlayer}>
          <h2>Player {this.props.whichPlayer} </h2>
          <h3>Wins: </h3>
        </div>
      )
    }
  }

  export default Player;//Player needs to be capital in order for the component in lie 3 to work 