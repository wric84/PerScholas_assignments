export const initialState = {
    flashCards: [
        {
          englishWord: '',
          frisianWord: '',
          category: '',
          flip: false,
          id: 0
        },

    ]
}

export default function reducer(state = initialState, action) {

    switch(action.type) {

        case 'ADD_ITEM': 
            return { flashCards: [...state.flashCards, action.payload] }
        
        case 'FLIP_CARD':

            let newFlashCard = state.flashCards.slice()
            let id = action.payload
            newFlashCard[id].showFrysk = !newFlashCard[id].showFrysk

            return { flashCards: newFlashCard }

        default: 
            return state
    }

}
