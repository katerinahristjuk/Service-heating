import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake,restockCakes } from './../actions/CakeActions';

export function Cake() {

    const cakes = useSelector(state => state.CakeReducer.cakes);
    const errorMessage = useSelector(state => state.CakeReducer.message)
    const dispatch = useDispatch();

    return (
        <div id="cake">
            <h2>Cakes Available: {cakes} </h2>
            {errorMessage && <h2>{errorMessage}</h2>}
            <button onClick={() => { dispatch(buyCake(1)) }}>Buy 1 Cake</button>
            <button onClick={() => { dispatch(buyCake(2)) }}>Buy 2 Cakes</button>
            <button onClick={() => { dispatch(buyCake(3)) }}>Buy 3 Cakes</button>
            <button onClick={()=>{dispatch(restockCakes())}}>Restock Cakes</button>
        </div>
    )
}