import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/index.css';

export function ThankYouNote(){

    return(
        <div id="thankYouNote">
            <div className="infoBlock">
                <h2><span>Your request has been sent!</span></h2>
                <p className="info"><span>THANK YOU FOR YOUR REQUEST:    </span>Your information is proceeding and our teams will contact you as soon as possible. :)</p>
                <button className="redButton"><Link to="/" className='link'>OK</Link></button>
            </div>
        </div>
    )
}