/* eslint-disable import/no-anonymous-default-export */
import {FETCH_USERS, REGISTER, LOGIN, LOGOUT, DELETE_USER } from '../constants/UserConstants';


export default (state = [], action) => {
    switch (action.type) {

        case LOGIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload}));
            return {
                user: action?.payload.user,
                token: action?.payload.token
            }

        case LOGOUT:
            localStorage.clear();
            return{
                user: null,
                token: null
            }

        case REGISTER:
            return { users: [...state, action.payload]}

        case FETCH_USERS:
            return action.payload 

        case DELETE_USER:
            return state.users.filter( user => user._id !== action.payload._id)

        default: return state;
    }
} 