import React from 'react';

export function Users(){

    return(
        <div id="users">
        <div class="infoBlock">
            <h2><span>List of employees</span></h2>
         </div>
        <div className='infoBlock'>
            <table>
                <thead>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Email</th>
                </thead>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>Smith</td>
                    <td>Foreman</td>
                    <td>js@mail.com</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>Smith</td>
                    <td>Foreman</td>
                    <td>js@mail.com</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>Smith</td>
                    <td>Foreman</td>
                    <td>js@mail.com</td>
                </tr>
            </table>
        </div>
        </div>
    )
}