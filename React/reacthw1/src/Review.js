
// class Review extends React.Component{
//     render(){
//         return(
//             <div className='Review'>
//                 <h1>Reviews</h1>
//                 <h3>{this.props.review}</h3>
//             </div>
//         )
//     }
// }
function Review(props) {
        return(
            <div className='Review'>
                <h1>Reviews</h1>
                <h3>{props.count}</h3>
                <button onClick={()=> {props.setCount(props.count + 1); props.setTotalCount(props.totalCount+ 1)}}> Likes </button><span> </span>
                <button onClick={()=> {props.setCount(props.count - 1); props.setTotalCount(props.totalCount+ 1)}}> Dislikes</button>
                <br />
                <form>
                    <br />
                    <label>
                        Review:
                        <input type="text" review="Review" />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        )
}

export default Review
export let totalCount
export let count