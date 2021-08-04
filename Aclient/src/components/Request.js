import React from 'react';

export function Request(){

    return(
        <div id="request">
            <div className="columns">
            <div className='leftPart'>
                    <h2>In case of any defect please <span >request an intervention</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Curabitur ut dui ac risus auctor ornare. 
                        Nam congue ligula quis venenatis auctor. Praesent 
                        justo risus, aliquet eu elit id, sollicitudin pharetra 
                        lacus. Aenean feugiat hendrerit dolor, ullamcorper 
                        sollicitudin mi ullamcorper id. Nulla vel tortor sapien. 
                        Proin tristique erat bibendum felis sollicitudin finibus. </p>
                    <div className="logoImg"></div>
                </div>  
                <div className="columns">
                    <div className="leftPart">
                    <form className='form'>
                        <p>Your address</p>
                        <input 
                            type='text' 
                            placeholder='Street'
                            // value={user.firstName}
                            // onChange={(e) => setUser({...user, firstName: e.target.value})}
                            ></input>
                        <input 
                            type='text' 
                            placeholder='Number'
                            // value={user.firstName}
                            // onChange={(e) => setUser({...user, firstName: e.target.value})}
                            ></input>
                        <input 
                            type='text' 
                            placeholder='Entrance'
                            // value={user.firstName}
                            // onChange={(e) => setUser({...user, firstName: e.target.value})}
                            ></input>
                        <input 
                            type='text' 
                            placeholder='Appartment'
                            // value={user.firstName}
                            // onChange={(e) => setUser({...user, firstName: e.target.value})}
                            ></input>
                        <p>Phone number</p>
                        <input 
                            type='text' 
                            placeholder='(+389)xx-xxx-xx-xx'
                            // value={user.email}
                            // onChange={(e) => setUser({...user, email: e.target.value})}                            
                            ></input>
                        <p>Email</p>
                        <input 
                            type='email' 
                            placeholder='email@email.com'
                            // value={user.password}
                            // onChange={(e) => setUser({...user, password: e.target.value})}                            
                            ></input>
                        <br/><br/>
                        <button className='redButton' >REQUEST AN APPOINTMENT</button>
                        {/* <button className='greenBtn' onClick={handleSubmit}>CREATE ACCOUNT</button> */}
                    </form> 
                    </div>
                    <div className="leftPart">
                    <form className='form'>
                        <p>Choose the type of intervention</p>
                        <input 
                            type='text' 
                            placeholder='repair'
                            // value={user.lastName}
                            // onChange={(e) => setUser({...user, lastName: e.target.value})}                            
                            ></input>
                        <p>Describe your problem</p>
                        <textarea
                            placeholder='Please describe us your problem...'
                        />
                    </form>
                    </div>
                </div>              
            </div>
        </div>
    )
}