import axios from "axios"
import { Fetch_types } from "../actionTypes/FetchTypes"


export const Fetch_Actions = {
      fetch_request : 
      ()=> {
        return {
          type : Fetch_types.MSG_REQUEST
        }},
      fetch_success : 
      (data)=> {return {
          type : Fetch_types.MSG_SUCCESS,
          payload : data
        }},
       fetch_single_success : 
      (data)=> {return {
          type : Fetch_types.MSG_SINGLE_SUCCESS,
          payload : data
        }},
      fetch_failur : 
      (err)=> {return {
          type : Fetch_types.MSG_FAILUR,
          payload:err
        }},
      fetch_Movies : 
      () => { return (dispatch) => {
        dispatch(Fetch_Actions.fetch_request());
        axios.get("moviesDB.json")
        .then ((response) =>  { dispatch(Fetch_Actions.fetch_success(response.data) )})
        .catch((error)    =>  {dispatch(Fetch_Actions.fetch_failur(error.message)   )})

      }},
      fetch_single_movie : 
      (targetMovie) => { return (dispatch) => {
        dispatch(Fetch_Actions.fetch_request());
        axios.get("../moviesDB.json")
        .then ((response) =>  { 
          const movie = response.data.find(movie => {return movie.Title === targetMovie});
          dispatch(Fetch_Actions.fetch_single_success(movie));
        })
        .catch((error)    =>  {dispatch(Fetch_Actions.fetch_failur(error.message)   )})

      }},
      clear_fetch : ()=>{
        return {
          type:Fetch_types.CLEAR_FETCH
        }}
         











}