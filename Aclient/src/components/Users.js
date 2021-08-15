import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchUsers } from '../actions/UsersActions';

export function Users(){

    const dispatch = useDispatch();
    const users = useSelector(state => state.UserReducer);
 
    useEffect(() => { 
        dispatch(fetchUsers());
        console.log("users:");
        console.log(users);
    },[dispatch, users]);

    return(
        <div id="users">
        <div className="infoBlock">
            <h2><span>List of employees</span></h2>
         </div>
        <div className='infoBlock'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Email</th>                       
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return(
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.position}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    )
}