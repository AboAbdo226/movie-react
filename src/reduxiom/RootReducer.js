import { combineReducers } from "redux";
import { ProductReducer } from "./reducers/Reducer";
import { fetch_reducer } from './reducers/FetchReducer'
import { search_Reducer } from "./reducers/searchReducer";

export const RootReducer = combineReducers({
    product : ProductReducer,
    moviesObj  : fetch_reducer,
    searched : search_Reducer
})