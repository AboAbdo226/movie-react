import { types } from "../actionTypes/types"

export const Add = (newOne) =>
{
return {
    type : types.ADD_BRODUCT,
    payload : newOne
}    
}
export const Buy = () =>
{
return {
    type : types.BUY_BRODUCT
}    
}
export const Edit = (name) =>
{
return {
    type : types.EDIT_BRODUCT,
    payload : name
}    
}
