import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../constants/UserConstants';
import '../assets/index.css';

export function Nav() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();    

    useEffect(() => {
        const token = user?.token; 
        if(token) {
            setUser(JSON.parse(localStorage.getItem('profile')));             
        }    
    }, [location]);

    const logout = () => {
        dispatch({type: LOGOUT});
        history.push('/');
        setUser(null);
    }

    return (
        <div id="nav">
            { !user ? (
            <div className='nav'>
                <ul className="navList">
                    <li><Link to="/" className="redNav">HOME</Link></li>
                </ul>
                <ul className="navList">
                    <li><Link to="/login" className="redNav">LOGIN</Link></li>
                    <li><Link to="/register" className="redNav">REGISTER</Link></li>
                    <li><Link to="/contact" className="liNav">CONTACT</Link></li>
                    <li><Link to="/interventions/request" className="liNav">REQUEST AN INTERVENTION</Link></li>
                </ul>          
            </div> ) : (
            <div className='nav'>
                <ul className="navList">
                    <li><Link to="/" className="redNav">HOME</Link></li>
                </ul>
                <ul className="navList">
                    <li><span>{user.user.firstName} {user.user.lastName}</span></li>
                    <li><button className='redButton' onClick={logout}>LOG OUT</button></li>
                    <li><Link to="/users" className="liNav">EMPLOYEES</Link></li>
                    <li><Link to="/consumers" className="liNav">CONSUMERS</Link></li>
                    <li><Link to="/interventions" className="liNav">ACTIVE INTERVENTIONS</Link></li>
                </ul>              
            </div>            
            )}
        </div>
    )
}