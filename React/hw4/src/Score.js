import {useState, useEffect} from 'react'
import GetFetch from './App2'

const GetScore = (props) => {
    const[score, setScore] = useState(0)
    // let questionAmount = props.value

    // console.log(typeof(questionAmount))

    const addScore = () => {
        setScore(score + 100)
    }

    const subtractScore = () => {
        setScore(score - 100)
    }

    const reset = () => {
        setScore(0)
    }
    // console.log(questionAmount)
    // console.log(questionValue)
    
    return(
        <div>
            <div className='box'>
                <h1 className='ScoreName'>Score: </h1>
                <p className='ScoreValue'> {score}</p>
            </div>
            <div className='box'>
                <button className='pinkbtn' onClick={subtractScore}>Decrease</button>
                <button className='bluebtn' onClick={addScore}>Increase</button>
                <button className='redbtn' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default GetScore