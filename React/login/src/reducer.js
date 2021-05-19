export const initialState = {
    groceries: [
        {
          item: 'banana',
          units: '1',
          isPurchased: false,
          id: 0
        },

        {
          item: 'apple',
          units: '2',
          isPurchased: false,
          id: 1
        },

        {
          item: 'orange',
          units: '3',
          isPurchased: false,
          id: 2
        }
    ]
}

/*

action = {
    type: ...  
    payload: ...
}

*/

export default function reducer(state = initialState, action) {

    switch(action.type) {

        case 'ADD_ITEM': 
            // some logic
            return { groceries: [...state.groceries, action.payload] }
        
        case 'TOGGLE_PURCHASE':

            let newGroceries = state.groceries.slice()
            let id = action.payload
            newGroceries[id].isPurchased = !newGroceries[id].isPurchased  

            return { groceries: newGroceries }

        default: 
            return state
    }

}

// if (action.type === 'ADD_ITEM') {
// else if (action.type === 'TOGGLE_PURCHASE') {
// else 