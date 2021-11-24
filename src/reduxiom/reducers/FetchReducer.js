import { Fetch_types } from "../actionTypes/FetchTypes";

const init_state ={
    loading :"",
    data : [],
    single:"",
    error : ""
}


export const fetch_reducer = (state = init_state , action)=>{

    switch (action.type) {
        case Fetch_types.MSG_REQUEST:
            
            return {
                ...state ,
                loading : true
            }
        case Fetch_types.MSG_SUCCESS:
            return {
                ...state ,
                loading : false,
                data    : action.payload,
                error   : ""
            }
          case Fetch_types.MSG_SINGLE_SUCCESS:
            return {
                ...state ,
                loading : false,
                single : action.payload,
                error   : ""
            }
        case Fetch_types.MSG_FAILUR:
            return {
                ...state ,
                loading : false,
                data    : [],
                error   : action.payload
            }
         case Fetch_types.CLEAR_FETCH:
            return {
                ...state ,
                loading : true,
                data    : [],
                error   : "",
                single  : ""
            }

        default:
            return state;
    }
}