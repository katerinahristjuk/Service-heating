import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/index.css';

export function Nav() {

    return (
        <div id="nav">
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
                <li><Link to="/request" className="liNav">REQUEST AN INTERVENTION</Link></li>
                {/* <li><Link to="/cake">Cakes</Link></li>
                <li><Link to="/comments">Comments</Link></li> */}
            </ul> 
            {/* <ul id="navList">
                <li><Link to="/users" className="liNav">Users</Link></li>
                <li><Link to="/consumers" className="liNav">Consumers</Link></li>
                <li><Link to="/" className="redNav">Log Out</Link></li>
            </ul>                     */}
        </div>

        
    )
}