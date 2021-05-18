import './App.css'
import GetScore from './Score.js';
import {useState, useEffect} from 'react'


function GetFetch() {
    const [state, setState] = useState([])
    const [showQuestion, setShowQuestion]= useState(false)
    const onClick = () => setShowQuestion(!showQuestion);
    useEffect(() =>{
        loadData()
    }, [])
    
    const loadData = () =>{
        const api ="http://jservice.io/api/random"
        fetch(api)
        .then(response=> response.json())
        .then(state => setState(state))
    }
    
    console.log(state)
    let map = state.map(jep =>{
        return (
            <div>
                <div className='box'>
                    <h1>Let's Play</h1>
                </div>
                <div className='box'>
                    <button className='randombtn' value={jep.id} onClick={() => { loadData(); setShowQuestion();}}>Random Question</button>
                </div>
                <div className='box'key={jep.id}>
                    <h2>Category:  </h2>
                    <p> {jep.category.title}</p>
                </div>
                <div className='box'>
                    <h2>Points:  </h2>
                    <p> {jep.value} </p>
                </div>
                <div className='box'>
                    <h2>Answer: </h2>
                    <p>{jep.question}</p>
                </div>
                <div className='box'>
                    { showQuestion ? <p>{jep.answer}</p>:<button className='revealbtn' onClick={onClick}>Click to Reveal Question</button> }
                </div>
            </div>)})

    // console.log(state)
    return(
        <div className='GetFetch'>
            <div className='title'>Welcome to Jeopardy!</div>
            <GetScore value={parseInt(state.value,10)}/>
            <div>{map}</div>

        </div>
    )
}


export default GetFetch

