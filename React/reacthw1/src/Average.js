import React, {useState} from 'react'
import Review, {totalCount, count} from './Review'

// class Average extends React.Component{
//     render(){
//         return(
//             <div className="Average">
//                 <h1>Average</h1>
//                 <h3>{this.props.average}</h3>
//             </div>
//         )
//     }
// }

// export default Average;

function Average(props) {
    console.log(count)
    console.log(totalCount)
    return(
        <div className='Average'>
            <h1>Average</h1>
            <h3>{props.count / props.totalCount}</h3>
            <br />
        </div>
    )
}

export default Average;