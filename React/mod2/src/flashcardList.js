import React, {useState, useEffect} from 'react'
import SampleCards from './flashcardSample'
import {nanoid} from 'nanoid'
import {addCard, removeCard} from './redux/actions'
import {useDispatch, useSelector} from 'react-redux'
//useSelector means you want to read something from store, dispatch is to use something from store
import Flashcard from './flashcard'

export default function FlashcardList(){
    const [flip, setFlip] = useState(false)
    //in order to dispatch an event you must define a dispatch
    const dispatch = useDispatch()
    //get entire store, and return the entire store
    const {flashcards} = useSelector(s=>s)
    const[flashcard, setFlashcard] = useState({english: '', frysk:'', category:'', isflipped:false, id:nanoid()})
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCard({flashcard}))
    }
    const handleChange = (e) =>{
        const{name,value} = e.target
        let newFlashcard = {...flashcard}
        newFlashcard[name]=value//changing object
        setFlashcard(newFlashcard)//changing state to new object
    }
    useEffect(()=>{
        console.log(flashcards)
    })
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                    <label>
                    Name:
                    <input className='fixInput' name='english'
                        value={flashcard.english}
                        type='text'
                        onChange={handleChange}
                        english=''
                        />
                    <div className='divider'/>
                    Frisian:
                    <input className='fixInput' name='frysk'
                        value={flashcard.frysk} 
                        type="text"
                        onChange={handleChange}
                        frysk=''
                    />
                    <div className='divider'/>
                    Category:
                    <input className='fixInput' name='category'
                        value={flashcard.category} 
                        type="text"
                        onChange={handleChange}
                        category='' 
                    />
                    </label>
                    <br></br>
                    <input className='btn' type='submit' value="Add"/>
                </form>
                <div className='flashcard-box'>
                    {(flashcards || []).map(flashcard=><Flashcard english={flashcard.english} frysk={flashcard.frysk} category={flashcard.category} key={flashcard.id}/>)}
                </div>
        </div>
    )
}



// className={`card ${flip ? 'flip' : ''}`} 
// onClick={()=>setFlip(!flip)}>
//   <div className='front'>
//     {flashcard.english}
//    </div>
// <div className='back'>{flashcard.frysk}</div>
// {flip?flashcard.english:flashcard.frysk}

