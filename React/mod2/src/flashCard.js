import React, {useState} from 'react'
import FlashcardList from './flashcardList'

export default function FlashCard({english, frysk, category}) {
    const [flip, setFlip] = useState(false)
    return (
        <div>
            <div
                className={`card ${flip ? 'flip' : ''}`}
                onClick={()=> setFlip(!flip)}>
                <div className='front'>
                    {english}
                </div>
                <div className='back'>{frysk}</div>
                {/* {flip? english: frysk} */}
            </div>
        </div>
    )
}
{/* <h3>{english} {frysk}</h3> */}