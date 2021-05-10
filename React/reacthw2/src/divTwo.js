import React from 'react'
import Tardis from './Tardis'
import DivThree from './divThree'

class DivTwo extends Tardis{
    render(){
        return(
            <div className="DivTwo">
                <DivThree/>
                <DivThree/>
            </div>
        )
    }
}

export default DivTwo;