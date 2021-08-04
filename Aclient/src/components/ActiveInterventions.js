import React from 'react';
import '../assets/index.css';
import { Link } from 'react-router-dom'

export function ActiveInterventions(){

    return(
        <div id="activeInterventions">
            <div class="infoBlock">
                <h2><span>Active Interventions</span></h2>
            </div>
            <div className='infoBlock'>
                <table>
                    <thead>
                        <th>ID-request</th>
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
                    </thead>
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
                        <td><button className='redButton'>ORDER</button></td>
                        <td><button className='redButton'>done</button></td>
                    </tr>
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
                        <td><button className='redButton'><Link to=''></Link>ORDER</button></td>
                        <td><button className='redButton'>done</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}