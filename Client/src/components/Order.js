import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../assets/index.css';

export function Order(){

    const [int, setInt] = useState({
        name: "",
        street: "",
        number: "",
        entrance: "",
        appartment: "",
        phone: "",
        email: "",
        description: ""
    });

    const { orderId } = useParams();

    const intervention = useSelector(state => (orderId ? state.InterventionsReducer.find(i => i._id === orderId) : null));

    useEffect(() => {
        if (intervention) {
            setInt(intervention);
        }
    }, [intervention]);

    return(
        <div id="request">
            <div class="infoBlock">
                <h2><span>INTERVENTION ORDER</span></h2>
            </div>
            <div class="infoBlock">
                <h2>
                    <b>Please check if the following information is correct and print the Intervention Order</b>

                </h2>
            </div>
            <div className='infoBlock'>
                <table>
                    <thead>
                        <th></th>
                        <th><div className="logoImg"></div></th>
                        <th><h2><span>Intervention Order No. {int._id}</span></h2></th>
                    </thead>
                    <tr>
                        <td><span>Full name:</span></td>
                        <td>{int.name}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><span>Address:</span></td>
                        <td>{int.street} {int.number} {int.entrance}/{int.appartment}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><span>Phone number:</span></td>
                        <td>{int.phone}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><span>email:</span></td>
                        <td>{int.email}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><span>Installers from Heating Service:</span></td>
                        <td><span>Date: </span> __ __ / __ __ / __ __ __ __</td>
                    </tr>
                    <tr>
                        <td>signature:</td>
                        <td>signature:</td>
                        <td>signature:</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><span>Material calculation:</span></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>quantity:</td>
                        <td>unit:</td>
                        <td>price:</td>
                    </tr>
                    <tr>
                        <td>quantity:</td>
                        <td>unit:</td>
                        <td>price:</td>
                    </tr>
                    <tr>
                        <td>quantity:</td>
                        <td>unit:</td>
                        <td>price:</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><span>Total:</span></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><span>Provided services:</span></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>type of service:</td>
                        <td></td>
                        <td>price:</td>
                    </tr>
                    <tr>
                        <td>type of service:</td>
                        <td></td>
                        <td>price:</td>
                    </tr>
                    <tr>
                        <td>type of service:</td>
                        <td></td>
                        <td>price:</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><span>Total:</span></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><span>TOTAL COST :</span></td>
                    </tr>
                    <tr>
                        <td><span>Comment:</span></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><span>Status:</span></td>
                        <td>Done / Pending / Cancelled</td>
                        <td><span>CONSUMER`S SIGNATURE:</span></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Date: __ __ / __ __ / __ __ __ __</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}