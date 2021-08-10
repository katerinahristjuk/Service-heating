/* eslint-disable import/no-anonymous-default-export */
import { INTERVENTIONS, REQUEST, ORDER, DONE_INTERVENTION } from '../constants/InterventionsConstants';


export default (state = [], action) => {
    switch (action.type) {

        case INTERVENTIONS:
            return action.payload 

        case REQUEST:
            return [...state, action.payload]

        case ORDER:
            return action.payload

        case DONE_INTERVENTION:
            return state.filter( int => int._id !== action.payload._id)

        default: return state;
    }
} 