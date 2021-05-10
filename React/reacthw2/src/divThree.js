import React from 'react'
// import DivTwo from './divTwo'
import Tardis from './Tardis'

class DivThree extends Tardis{
    render(){
        return(
            <div onClick={this.changeIt}>
                <h3>
                    {this.state.tardis.name}
                </h3>
            </div>
        )
    }
}

export default DivThree;