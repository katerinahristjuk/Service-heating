import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { interventions, done } from '../actions/InterventionsActions';
import '../assets/index.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

export function ActiveInterventions(){

    const dispatch = useDispatch();
    const activeInterventions = useSelector(state => state.InterventionsReducer);

    useEffect(() => {
        dispatch(interventions());
        dispatch(done())
        console.log(activeInterventions)
    },[activeInterventions, dispatch]);

    return(
        <div id="activeInterventions">
            <div class="infoBlock">
                <h2><span>Active Interventions</span></h2>
            </div>
            <div className='infoBlock'>
                <table>
                    <thead>
                        <tr>
                            <th>ID-request</th>
                            <th>Full name</th>
                            <th>Date</th>
                            <th>Street</th>
                            <th>No.</th>
                            <th>Entr.</th>
                            <th>App.No</th>
                            <th>Phone</th>
                            <th>e-mail</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Intervention order</th>
                            <th>Mark as done</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {activeInterventions.map(int => {
                            return(
                                <tr key={int._id}>
                                    <td>{int._id}</td>
                                    <td>{int.name}</td>
                                    <td>{moment(new Date(int.date)).format("YYYY-MM-DD HH:mm")}</td>
                                    <td>{int.street}</td>
                                    <td>{int.number}</td>
                                    <td>{int.entrance}</td>
                                    <td>{int.appartment}</td>
                                    <td>{int.phone}</td>
                                    <td>{int.email}</td>
                                    <td>{int.description}</td>
                                    <td>{int.status}</td>
                                    <td><button className='redButton'><Link className='link' to={`/interventions/${int._id}`} orderId={int._id}>ORDER</Link></button></td>
                                    <td><button className='redButton' onClick={()=>dispatch(done(int._id))}>done</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    {/* <tbody>
                        <tr>
                            <td>1</td>
                            <td>5-7-2021</td>
                            <td>Leninova</td>
                            <td>20</td>
                            <td>2</td>
                            <td>15</td>
                            <td>+38972365412</td>
                            <td>email@mail.com</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Curabitur ut dui ac risus auctor ornare. 
                            Nam congue ligula quis venenatis auctor.</td>
                            <td>Active</td>
                            <td><button className='redButton'><Link className='link' to='/active-interventions/:orderId'>ORDER</Link></button></td>
                            <td><button className='redButton'>done</button></td>
                        </tr>                    
                    </tbody> */}
                </table>
            </div>
        </div>
    )
}