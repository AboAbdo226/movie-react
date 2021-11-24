
import MoviesList from './MoviesList';
import "../style/css/mainPageStyle.css";
import Nav from './nav';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { search_actions } from '../reduxiom/actions/searchAction';
import { useLocation } from 'react-router';

export default function Index() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(search_actions.selectSearched(""));
    document.getElementsByClassName("main_page")[0].onwheel =  ()=> {

        console.log(document.querySelector(".main_page").scrollTop);
        if((document.querySelector(".main_page").scrollTop) > 686)
               document.getElementsByClassName("main_page")[0].style.scrollSnapType = "none";
        else
               document.getElementsByClassName("main_page")[0].style.scrollSnapType = "y mandatory";
 
    
        }
    }, [])


    return (
        <div className="main_page">
                <Nav />
            <div id="moviesList" className="scroll container">
                <MoviesList />
            </div>

             

        </div>
    )
}
