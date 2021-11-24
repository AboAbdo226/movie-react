import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Fetch_Actions } from '../../reduxiom/actions/FetchActions';
import "../../style/css/singleMovie.css";


export default function MovieInfo() {

    const {movieName} = useParams();
    const isLoading   = useSelector(state => state.moviesObj.loading);
    const movie       = useSelector(state => state.moviesObj.single);
    const dispatch    = useDispatch();

    useEffect(() => {
      dispatch(Fetch_Actions.fetch_single_movie(movieName));
      console.log("fffffff");
              return () => {
            dispatch(Fetch_Actions.clear_fetch());
        }
    }, [])
    function show()
    {
        return (
        <div className="movieInfo_container">
             <div className="content">  
                <div className="info">
                    <h1><span style={{color:"#212529"}}>Title :</span> {movie.Title}</h1>
                    <p> <h2 style={{lineHeight:"2.73rem"}}>story:</h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia reiciendilor sit amet consectetur adipisicing elit. Quibusdam mollitia reiciendilor sit amet consectetur adipisicing elit. Quibusdam mollitia reiciendis consequatur? Quaerat illum voluptatem quia possimus laboriosam natus iusto tempore enim! </p>

                </div>
                <div className="buttons">
                    <Link to={`/movie/${movie.Title}/play`}><button>see movie</button></Link>
                    <button>download movie</button>
                </div>
            </div>
            <div className="poster">
                <img src={movie.Poster} onError={(e)=>{e.target.src=require("../../style/imgs/2.png").default}} />
            </div>
           
        </div>
        )
    }
    console.log("single",movie.Title);
    return ( (isLoading && <img className="loading" src={require("../../style/imgs/loading.gif").default} />)||(show())
    )
}
