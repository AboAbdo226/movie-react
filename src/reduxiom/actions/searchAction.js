import {search_types} from '../actionTypes/searchTypes.js'
export const search_actions = {


    addSearched : (data) => {
        return {
            type : search_types.ADD_SEARCHED ,
            payload : data
        }
    },
   selectSearched:(data) => {
        return {
            type : search_types.SELECT_SEARCHED ,
            payload : data
        }
    },
    
}