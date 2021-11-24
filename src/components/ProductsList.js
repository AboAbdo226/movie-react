import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Edit } from '../reduxiom/actions/Actions';

export default function ProductsList() {

    const {name,num} = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [state , setState] = useState();
    const submit =() =>
    {
        console.log(state);
        dispatch(Edit(state));
        setState("");
    }

    return (
        <div>
            {name} + {num}
            <h1>change random name</h1>
            <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />
            <button onClick={submit} >submit</button>
            <h1>add new product</h1>
            <span>enter the name : </span>
            <input type="text" value={state} onChange={(e)=>setState(e.target.value)}  />    
            <div style={{display:'block'}}>
            <span>enter the count : </span>        
            <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />
            </div>
            <button onClick={submit} >submit</button>

            <h3>list of all of my products </h3> 
       </div>
    )
}
