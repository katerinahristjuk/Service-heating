import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { request } from '../actions/InterventionsActions';


export function Request(){

    const [req, setReq] = useState({
        name: "",
        street: "",
        number: "",
        entrance: "",
        appartment: "",
        phone: "",
        email: "",
        description: ""
    });
    const [redirect, setRedirect] = useState(false)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(request(req))
        setRedirect(true)
    }

    if(redirect) {
        return <Redirect to={'/interventions/request/done'}/>
    }

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
                        <p>Full name</p>
                        <input 
                            type='text' 
                            placeholder='John Smith'
                            value={req.name}
                            onChange={(e) => setReq({...req, name: e.target.value})}
                            ></input>
                        <p>Your address</p>
                        <input 
                            type='text' 
                            placeholder='Street'
                            value={req.street}
                            onChange={(e) => setReq({...req, street: e.target.value})}
                            ></input>
                        <input 
                            type='text' 
                            placeholder='Number'
                            value={req.number}
                            onChange={(e) => setReq({...req, number: e.target.value})}
                            ></input>
                        <input 
                            type='text' 
                            placeholder='Entrance'
                            value={req.entrance}
                            onChange={(e) => setReq({...req, entrance: e.target.value})}
                            ></input>
                        <input 
                            type='text' 
                            placeholder='Appartment'
                            value={req.appartment}
                            onChange={(e) => setReq({...req, appartment: e.target.value})}
                            ></input>
                        <p>Email</p>
                        <input 
                            type='email' 
                            placeholder='email@email.com'
                            value={req.email}
                            onChange={(e) => setReq({...req, email: e.target.value})}                          
                            ></input>
                        <br/><br/>
                        <button className='redButton' onClick={handleSubmit}>REQUEST AN APPOINTMENT</button>
                    </form> 
                    </div>
                    <div className="leftPart">
                    <form className='form'>
                    <p>Phone number</p>
                        <input 
                            type='text' 
                            placeholder='(+389)xx-xxx-xx-xx'
                            value={req.phone}
                            onChange={(e) => setReq({...req, phone: e.target.value})}                          
                            ></input>
                        <p>Describe your problem</p>
                        <textarea
                            placeholder='Please describe us your problem...'
                            value={req.description}
                            onChange={(e) => setReq({...req, description: e.target.value})}
                        />
                    </form>
                    </div>
                </div>              
            </div>
        </div>
    )
}