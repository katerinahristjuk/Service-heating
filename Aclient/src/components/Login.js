import React from 'react';

export function Login(){

    return(
        <div id="login">
            <div className='columns'>
                <div className='leftPart'>
                    <h2>Welcome to <span >Heating Service</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Curabitur ut dui ac risus auctor ornare. 
                        Nam congue ligula quis venenatis auctor. Praesent 
                        justo risus, aliquet eu elit id, sollicitudin pharetra 
                        lacus. Aenean feugiat hendrerit dolor, ullamcorper 
                        sollicitudin mi ullamcorper id. Nulla vel tortor sapien.</p>
                </div>
                <div className='leftPart'>
                    <form className='form'>
                        <p>Email</p>
                        <input 
                            type='email' 
                            className='input' 
                            placeholder='user@domain.com'
                            // value={user.email}
                            // onChange={(e) => setUser({...user, email: e.target.value})}
                            ></input>
                        <p>Password</p>
                        <input 
                            type='password' 
                            className='input' 
                            placeholder='**********'
                            // value={user.password}
                            // onChange={(e) => setUser({...user, password: e.target.value})}
                            ></input>
                        <br/><br/>
                        <button className='redButton'>LOG IN</button>
                        {/* <button className='greenBtn' onClick={handleSubmit}>LOG IN</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}