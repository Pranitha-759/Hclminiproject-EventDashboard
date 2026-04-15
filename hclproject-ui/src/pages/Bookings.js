// import { useEffect, useState } from "react";
// import API from "../services/api";

// function Bookings(){

// const [bookings,setBookings]=useState([]);

// useEffect(()=>{

// API.get("/booking")
// .then(res=>setBookings(res.data));

// },[]);

// return(

// <div>

// <h2>Booked Events</h2>

// {
// bookings.map(b=>(

// <div key={b.id}>

// <p>Booking ID: {b.id}</p>
// <p>User ID: {b.userId}</p>
// <p>Event ID: {b.eventId}</p>

// </div>

// ))
// }

// </div>

// )

// }

// export default Bookings;

import { useEffect,useState } from "react";
import API from "../services/api";

function Bookings(){

const [bookings,setBookings]=useState([]);

useEffect(()=>{

fetchBookings();

},[]);

const fetchBookings=async()=>{

const res = await API.get("/booking");

setBookings(res.data);

}

return(

<div className="page-container">

<div className="table-card">

<h2>Booked Events</h2>

<table>

<thead>

<tr>

<th>Booking ID</th>
<th>User ID</th>
<th>Event ID</th>

</tr>

</thead>

<tbody>

{bookings.map(b=>(

<tr key={b.id}>

<td>{b.id}</td>
<td>{b.userId}</td>
<td>{b.eventId}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Bookings;