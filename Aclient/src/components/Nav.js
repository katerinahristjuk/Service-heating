import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link, Redirect } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { LOGOUT } from '../constants/UserConstants';
import '../assets/index.css';
// import decode from 'jwt-decode';

export function Nav() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    useEffect(() => {
        const token = user?.token;
        console.log(token)    
        setUser(JSON.parse(localStorage.getItem('profile')));       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // const [user, setUser] = useState(null);
    // const [redirect, setRedirect] = useState(false);

    // const user = null;
    // const dispatch = useDispatch();
    const logout = () => {
        // dispatch({type: LOGOUT});
        // setUser(undefined);
        // setRedirect(true);
    }

    useEffect(() => {
        const token = user?.token;
        console.log(token)

        // if (token) {
        //     const decodedToken = decode(token);
      
        //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        // }
      
        setUser(JSON.parse(localStorage.getItem('profile')));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // if(redirect) {
    //     return <Redirect to={'/'}/>
    // }

    return (
        <div id="nav">
            { user ? (
            <div className='nav'>
            <ul className="navList">
                <li><Link to="/" className="redNav">HOME</Link></li>
                {/* <li><Link to="/" className="liNav"><image src='logo.jpg' alt='logo'/></Link></li> */}
            </ul>
            <ul className="navList">
                <li><Link to="/login" className="redNav">LOGIN</Link></li>
                <li><Link to="/register" className="redNav">REGISTER</Link></li>
                {/* <li><Link to="/users" className="liNav">USERS</Link></li>
                <li><Link to="/consumers" className="liNav">CONSUMERS</Link></li> */}
                <li><Link to="/contact" className="liNav">CONTACT</Link></li>
                <li><Link to="/interventions/request" className="liNav">REQUEST AN INTERVENTION</Link></li>
                {/* <li><Link to="/cake">Cakes</Link></li>
                <li><Link to="/comments">Comments</Link></li> */}
            </ul> 
            {/* <ul id="navList">
                <li><Link to="/users" className="liNav">Users</Link></li>
                <li><Link to="/consumers" className="liNav">Consumers</Link></li>
                <li><Link to="/" className="redNav">Log Out</Link></li>
            </ul>                     */}                
            </div> ) : (
            <div className='nav'>
            <ul className="navList">
                <li><Link to="/" className="redNav">HOME</Link></li>
            </ul>
            <ul className="navList">
                {/* <li><Link to="/" className="redNav">LOG OUT <span>{user.firstName}</span></Link></li> */}
                <li><button onClick={logout}>LOG OUT</button></li>
                <li><Link to="/" className="redNav">LOG OUT</Link></li>
                <li><Link to="/users" className="liNav">EMPLOYEES</Link></li>
                <li><Link to="/consumers" className="liNav">CONSUMERS</Link></li>
                <li><Link to="/interventions" className="liNav">ACTIVE INTERVENTIONS</Link></li>
            </ul>              
            </div>            
            )}
        </div>
    )
}