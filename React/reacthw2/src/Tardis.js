import React, { Component } from 'react'

export default class Tardis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tardis: {
                name: 'Time and Relative Dimension in Space',
                caps: false,

            }
        }
    }
    // this.changeIt = this.changeIt.bind(this)


    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: this.state.tardis.name.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: this.state.tardis.name.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() {
        return (
            <div>
                <h3>
                    {this.state.tardis.name}
                </h3>
            </div>
        )
    }
}

// import React, {useState} from 'react'

// function Hooks(){
//     const[name, setCount] = useState(0)
//         return(
//             <div>
//                 <h3>
//                     {name}
//                 </h3>
//             </div>
//         )
// }

// export default Hooks

