import React from 'react';

export function Consumers(){

    return(
        <div id="consumers">
            <div class="infoBlock">
                <h2><span>Database of consumers</span></h2>
             </div>
            <div className='infoBlock'>
                <table>
                    <thead>
                        <th>Customer</th>
                        <th>Street</th>
                        <th>No.</th>
                        <th>Entr.</th>
                        <th>App.No</th>
                        <th>Phone</th>
                        <th>e-mail</th>
                    </thead>
                    <tr>
                        <td>John Smith</td>
                        <td>Leninova</td>
                        <td>20</td>
                        <td>2</td>
                        <td>15</td>
                        <td>+38972365412</td>
                        <td>email@mail.com</td>
                    </tr>
                    <tr>
                    <td>John Smith</td>
                        <td>Leninova</td>
                        <td>20</td>
                        <td>2</td>
                        <td>15</td>
                        <td>+38972365412</td>
                        <td>email@mail.com</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}