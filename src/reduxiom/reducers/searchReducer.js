import { search_types } from "../actionTypes/searchTypes";

const init_state = {
    moviesList   :[],
    selectedMovie:""
}

export const search_Reducer = (state = init_state , action ) => {
    switch (action.type) {
        case search_types.ADD_SEARCHED:
            return {...state , moviesList : action.payload};
        case search_types.SELECT_SEARCHED:
            return {...state , selectedMovie:action.payload};
        
        default:
            return state;
    }
}