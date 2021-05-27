export const login =()=>{
    return {type: 'LOGIN'}
}
export const logout =()=>{
    return {type: 'LOGOUT'}
}
export const addCard =(payload)=>{
    return{type: 'ADD_CARD', payload}
}
export const removeCard =(payload)=>{
    return{type: 'REMOVE_CARD', payload}
}