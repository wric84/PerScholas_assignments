export const logReducer = (state=false, action) =>{
    switch (action.type){
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state
    }
}
export const flashcardReducer = (state=[], action) =>{
    console.log(state)
    switch (action.type){
        case 'ADD_CARD':
            state.push(action.payload.flashcard)
            return [...state];
        case 'REMOVE_CARD':
            //remove everything that is the action.payload
            return state.filter(n=>n.id==action.payload.flashcard.id);
        default:
            return state
    }
}