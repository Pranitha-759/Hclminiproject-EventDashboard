import { useEffect,useState } from "react";
import API from "../services/api";

function Users(){

const [users,setUsers]=useState([]);

useEffect(()=>{

API.get("/users")
.then(res=>setUsers(res.data));

},[]);

return(

<div>

<h2>Users List</h2>

<table border="1" cellPadding="10">

<thead>

<tr>

<th>ID</th>
<th>Username</th>
<th>Email</th>
<th>Role</th>

</tr>

</thead>

<tbody>

{
users.map(u=>(

<tr key={u.id}>

<td>{u.id}</td>
<td>{u.username}</td>
<td>{u.email}</td>
<td>{u.role}</td>

</tr>

))
}

</tbody>

</table>

</div>

)

}

export default Users;