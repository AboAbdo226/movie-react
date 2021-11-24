import { types } from "../actionTypes/types";
const initialState = {
    name : "a" , 
    num  : "2"
}


export const ProductReducer = (state = initialState , action) =>{

    switch (action.type) {
        case types.BUY_BRODUCT :
            return {...state , num : state.num - 1 }
        case types.EDIT_BRODUCT :
            return {...state , num : 1 , name : action.payload }
            
    
        default:
            return state;
    }
}