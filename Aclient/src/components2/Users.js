import React, { useEffect,useState } from 'react';

export function Users() {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => setUsers(json))
            .catch(err => alert(err))
    }, [])

    return (
        <div id="users">
            <h2>Users</h2>
            { users.length > 0 ?
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Street</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user=>{
                            return(
                                <tr key={user.id}>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.address.street}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            
            : <h2>Loading...</h2>

            }
        </div>
    )
}