import React, {useState} from 'react'
import FlashcardList from './flashcardList'

export default function SampleCards() {
    const [flashcards, setFlashcards] = useState(SampleFlashCards)
    return (
        <div>
            <FlashcardList flashcards={flashcards}/>
        </div>
    )
}
const SampleFlashCards = [
    {
    id: 1,
    english: 'Double check',
    frysk: 'Neigeist',
  },
  {
    id: 2,
    english: 'I assume',
    frysk: 'Nim ik oan',
  }
  ]