import React from 'react'

 function UserList({users}) {
    const renderUsers = users.map(user =>{
        return (
					<tr key={user.name}>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				);
    })
  return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody data-testid='users'>{renderUsers}</tbody>
			{/* <tbody>{renderUsers}</tbody> */}
		</table>
	);
}

export default UserList;
