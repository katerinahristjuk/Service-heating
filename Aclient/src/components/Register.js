import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../actions/UsersActions';

export function Register(){

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        position: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [redirect, setRedirect] = useState(false)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(register(user))
        setRedirect(true)
    }

    if(redirect) {
        return <Redirect to={'/login'}/>
    }

    return(
        <div id="register">
            <div className="columns">
                <div className='leftPart'>
                    <h2>Create your <span >account</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Curabitur ut dui ac risus auctor ornare. 
                        Nam congue ligula quis venenatis auctor. Praesent 
                        justo risus, aliquet eu elit id, sollicitudin pharetra 
                        lacus. Aenean feugiat hendrerit dolor, ullamcorper 
                        sollicitudin mi ullamcorper id. Nulla vel tortor sapien. 
                        Proin tristique erat bibendum felis sollicitudin finibus. 
                        Integer ut euismod risus, in semper nisl. Nam congue pharetra aliquet.</p>
                </div>
                <div className="columns">
                    <div className="leftPart">
                    <form className='form'>
                        <p>First Name</p>
                        <input 
                            type='text' 
                            placeholder='John'
                            value={user.firstName}
                            onChange={(e) => setUser({...user, firstName: e.target.value})}
                            ></input>
                        <p>Email</p>
                        <input 
                            type='email' 
                            placeholder='john@smith.com'
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}                            
                            ></input>
                        <p>Password</p>
                        <input 
                            type='password' 
                            placeholder='**********'
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}                            
                            ></input>
                        <br/><br/>
                        <button className='redButton' onClick={handleSubmit}>CREATE ACCOUNT</button>
                    </form> 
                    </div>
                    <div className="leftPart">
                    <form className='form'>
                        <p>Last Name</p>
                        <input 
                            type='text' 
                            placeholder='Smith'
                            value={user.lastName}
                            onChange={(e) => setUser({...user, lastName: e.target.value})}                            
                            ></input>
                        <p>Position</p>
                        <input 
                            type='text'
                            placeholder='Maintenance assistant'
                            value={user.position}
                            onChange={(e) => setUser({...user, position: e.target.value})}                            
                            ></input>
                        <p>Repeat Password</p>
                        <input 
                            type='password' 
                            placeholder='**********'
                            value={user.confirmPassword}
                            onChange={(e) => setUser({...user, confirmPassword: e.target.value})}                            
                            ></input>
                    </form>
                    </div>
                </div>                
            </div>
        </div>
    )
}