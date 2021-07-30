import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchCommentsRequest} from './../actions/CommentsActions';

export function Comments(){

    const comments = useSelector(state=> state.CommentsReducer.comments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCommentsRequest())
    },[dispatch])


    return(
        <div id="comments">
            <h2>Comments</h2>
        </div>
    )
}