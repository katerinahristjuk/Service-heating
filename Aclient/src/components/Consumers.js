import React, {useEffect, useState} from 'react';

export function Consumers(){

    const [consumers, setConsumers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(json=>setConsumers(json))
        .catch(err=>alert(err))
    },[])

    return(
        <div id="consumers">
            <div class="infoBlock">
                <h2><span>Database of consumers</span></h2>
             </div>
            <div className='infoBlock'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Street</th>
                            <th>Suite</th>
                            <th>Phone</th>
                            <th>e-mail</th>                            
                        </tr>
                    </thead>
                    <tbody>
                    {consumers.map(consumer => {
                        return(
                            <tr key={consumer._id}>
                                <td>{consumer.id}</td>
                                <td>{consumer.name}</td>
                                <td>{consumer.address.street}</td>
                                <td>{consumer.address.suite}</td>
                                <td>{consumer.phone}</td>
                                <td>{consumer.email}</td>
                            </tr>
                        )
                    })}                   
                    {consumers.map(consumer => {
                        return(
                            <tr key={consumer._id}>
                                <td>{consumer.id}</td>
                                <td>{consumer.name}</td>
                                <td>{consumer.address.street}</td>
                                <td>{consumer.address.suite}</td>
                                <td>{consumer.phone}</td>
                                <td>{consumer.email}</td>
                            </tr>
                        )
                    })}                   
                    </tbody>
                </table>
            </div>
        </div>
    )
}