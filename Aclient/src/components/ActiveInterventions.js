import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { interventions, done } from '../actions/InterventionsActions';
import '../assets/index.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

export function ActiveInterventions(){

    const dispatch = useDispatch();
    const activeInterventions = useSelector(state => state.InterventionsReducer);

    // const doneI = (id) => {
    //     dispatch(done(id))
    // }

    useEffect(() => {
        dispatch(interventions());
        dispatch(done())
        // console.log(activeInterventions)
    },[dispatch]);

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
                                    {/* <td><button className='redButton' onClick={doneI(int._id)}>done</button></td> */}
                                    <td><button className='redButton' onClick={()=>dispatch(done(int._id))}>done</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}