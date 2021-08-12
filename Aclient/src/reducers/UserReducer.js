/* eslint-disable import/no-anonymous-default-export */
import {FETCH_USERS, REGISTER, LOGIN, UPDATE_USER, DELETE_USER } from '../constants/UserConstants';


export default (state = [], action) => {
    switch (action.type) {

        case LOGIN:
            return {
                users: action.payload.user,
                token: action.payload.token
            }

        case REGISTER:
            return { users: [...state, action.payload]}

        case FETCH_USERS:
            return action.payload 

        case UPDATE_USER:
            return [...state, action.payload]

        case DELETE_USER:
            return state.users.filter( user => user._id !== action.payload._id)

        default: return state;
    }
} 