import * as api from '../api/users';
import { FETCH_USERS, REGISTER, LOGIN } from '../constants/UserConstants';

export const fetchUsers = () => async (dispatch) => {
    try {
        const {data} = await api.getUsers();

        dispatch({
            type: FETCH_USERS,
            payload: data.users
        });
    } catch (error) {
        console.log(error);
    }
};

export const register = (newUser) => async (dispatch) => {
    try {
        const {data} = await api.register(newUser);
        dispatch({
            type: REGISTER,
            payload: data.newUser
        });         
    } catch (error) {
        console.log(error);
    }
};    

export const login = (user) => async (dispatch) => {
    try {
        const { data } = await api.login(user)
        
        dispatch({
            type: LOGIN,
            payload: data
        });
    } catch (error) {
        console.log(error);        
    }
};

// export const deleteUser =() => async (dispatch) => {
//     try {
//         const {data} = await api.deleteUser();

//         dispatch({
//             type: DELETE_USER,
//             payload: data.deletedUser
//         })          
//     } catch (error) {
//         console.log(error);
//     }
// };