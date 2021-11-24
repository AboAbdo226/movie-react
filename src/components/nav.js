import React, {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { search_actions } from '../reduxiom/actions/searchAction';
import "../style/css/navStyle.css";
import "../style/fonts/LibreBaskerville-Bold.ttf"



export default function Nav() {
    const list = useSelector((state)=> state.moviesObj.data);
    const hints = useSelector(state => state.searched.moviesList);
    const dispatch = useDispatch();

    const search = (e) =>{
       //const results = list.filter((movie)=>movie.Title.toUpperCase() === e.target.value.toUpperCase());
        var input = e.target.value;
        var reg = new RegExp(input,'i');
        let results = [];
        
        if(input !== "" && input !== " " && input !== "  "){
         results = list.filter((movie)=>{ 
            const m = movie.Title;
            return m.match(reg);
        });
        setTimeout(() => {
            dispatch(search_actions.addSearched(results));
        }, 300);
        console.log(hints);
    }
        else
         setTimeout(() => {
            dispatch(search_actions.addSearched([]));
        }, 300);
    }

    const hintsShow = () => {
        
        if(hints.length >= 1)
        {
            return ( hints.map((movie) => {
                        return(
                            <h4 onClick={()=>{
                                dispatch(search_actions.selectSearched(movie));
                                document.getElementsByClassName("card")[0].scrollIntoView();
                            }}>{movie.Title}</h4>
                        )
                    })
                 )
        }
        else return <h4>there is no results , sorry !! </h4>


    }
    function hide(){
        setTimeout(() => {
            document.getElementsByClassName("hints")[0].style.display="none";
        }, 111);
    }
    function showw(){
        document.getElementsByClassName("hints")[0].style.display="block";
    }





    return (
        <div className="scroll cover" >
            <div className="navBar">
                <h1 id="nav_brand" onClick={()=>dispatch(search_actions.selectSearched(""))}> <span className="red">Raghad</span><span className="black">Movies</span></h1>
                <div className="searchDiv" onBlur={hide}  onFocus={showw}>
                    <input onChange={(e)=>{search(e)}} type="text" className="search" placeholder="search for your favourite Movie..."/>
                    <div className="hints">
                        {hintsShow()}
                    </div>
                </div>
                <button>signUp</button>
                <button>signIn</button>
            </div>
            <div className=" brand_cover" >
                <h1 className="brand" style={{backgroundColor : "none"}} > <span className="red">Raghad</span><span className="black">Movies</span></h1>
            
             </div>
        </div>
    )
}
