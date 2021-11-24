import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Fetch_Actions } from "../reduxiom/actions/FetchActions";
import { useEffect } from "react";
import "../style/css/moviesListStyle.css";
import { Link } from "react-router-dom";
import { search_actions } from "../reduxiom/actions/searchAction";

export default function MoviesList() {
  const state = useSelector((state) => state.moviesObj);
  const selectedMovie = useSelector(state => state.searched.selectedMovie);

  console.log("searchedMovie.Title" , selectedMovie);
  const movies_list = state.data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetch_Actions.fetch_Movies());
  }, []);

  function showMovies() {

    if(selectedMovie)
    { const movie = selectedMovie ;
      return <Link  to={"/movie/"+movie.Title}> <div id="d" className="card" style={{marginTop:"100px"}}>
          <div className="card_inner">
            <div className="front">
              <img src={movie.Poster} onError={(e)=>{e.target.src=require("../style/imgs/2.png").default}} />
              <h3>{movie.Title}</h3>
            </div>
            <div className="back">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusantium a voluptates quam assumenda ut fugiat sed, soluta ab nulla sit neque, quibusdam odio maxime consequuntur aliquam. Obcaecati, illo.</p>
                <h3>Year : {movie.Year} </h3>
            </div>
          </div>
        </div></Link>
    }
    else {
    return movies_list.map((movie) => {
      return (<Link to={"/movie/"+movie.Title} onClick={()=>dispatch(search_actions.selectSearched(movie))}>
        <div className="card" key={movie.Title}>
          <div className="card_inner">
            <div className="front">
              <img src={movie.Poster} onError={(e)=>{e.target.src=require("../style/imgs/2.png").default}} />
              <h3>{movie.Title}</h3>
            </div>
            <div className="back">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusantium a voluptates quam assumenda ut fugiat sed, soluta ab nulla sit neque, quibusdam odio maxime consequuntur aliquam. Obcaecati, illo.</p>
                <h3>Year : {movie.Year} </h3>
            </div>
          </div>
        </div></Link>
      );
    });
  }}


  
  return <div className="cards_container">
    { (  state.loading && <img className="loading" src={require("../style/imgs/loading.gif").default} alt="fdsa"/>)
                                             || (!state.loading && showMovies())}
    </div>;
}
