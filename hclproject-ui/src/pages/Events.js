// // // import { useEffect,useState } from "react";
// // // import API from "../services/api";

// // // function Events(){

// // // const [events,setEvents]=useState([]);

// // // useEffect(()=>{

// // // API.get("/events")

// // // .then(res=>setEvents(res.data));

// // // },[]);

// // // const bookEvent = async(id)=>{

// // // await API.post("/booking",{

// // // userId:1,
// // // eventId:id

// // // });

// // // alert("Event booked");

// // // }

// // // return(

// // // <div>

// // // <h2>Events</h2>

// // // {

// // // events.map(e=>(

// // // <div key={e.id} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

// // // <h3>{e.title}</h3>

// // // <p>{e.description}</p>

// // // <p>{e.date}</p>

// // // <p>{e.location}</p>

// // // <button onClick={()=>bookEvent(e.id)}>

// // // Book Event

// // // </button>

// // // </div>

// // // ))

// // // }

// // // </div>

// // // )

// // // }

// // // export default Events;

// // import { useEffect,useState } from "react";
// // import API from "../services/api";

// // function Events(){

// // const [events,setEvents]=useState([]);

// // useEffect(()=>{

// // API.get("/events")
// // .then(res=>setEvents(res.data));

// // },[]);


// // const deleteEvent=async(id)=>{

// // await API.delete("/events/"+id);

// // alert("Event deleted");

// // window.location.reload();

// // }


// // return(

// // <div>

// // <h2>Events</h2>

// // {

// // events.map(e=>(

// // <div key={e.id}>

// // <h3>{e.title}</h3>

// // <p>{e.description}</p>

// // <p>{e.date}</p>

// // <p>{e.location}</p>

// // <button onClick={()=>deleteEvent(e.id)}>

// // Delete

// // </button>

// // </div>

// // ))

// // }

// // </div>

// // )

// // }

// // export default Events;

// import { useEffect, useState } from "react";
// import API from "../services/api";

// function Events(){

// const [events,setEvents]=useState([]);

// useEffect(()=>{
//     fetchEvents();
// },[]);

// const fetchEvents=async()=>{
//     const res = await API.get("/events");
//     setEvents(res.data);
// };

// const deleteEvent=async(id)=>{
//     await API.delete(`/events/${id}`);
//     fetchEvents();
// };

// return(

// <div className="page-container">

// <div className="table-card">

// <h2>All Events</h2>

// <table>

// <thead>
// <tr>
// <th>Title</th>
// <th>Description</th>
// <th>Date</th>
// <th>Location</th>
// <th>Actions</th>
// </tr>
// </thead>

// <tbody>

// {events.map(e=>(

// <tr key={e.id}>

// <td>{e.title}</td>
// <td>{e.description}</td>
// <td>{e.date}</td>
// <td>{e.location}</td>

// <td>

// <button
// onClick={()=>window.location=`/update/${e.id}`}
// style={{marginRight:"10px"}}
// >
// Edit
// </button>

// <button
// onClick={()=>deleteEvent(e.id)}
// style={{background:"red"}}
// >
// Delete
// </button>

// </td>

// </tr>

// ))}

// </tbody>

// </table>

// </div>

// </div>

// )

// }

// export default Events;

import { useEffect,useState } from "react";
import API from "../services/api";

function Events(){

const [events,setEvents]=useState([]);

const user = JSON.parse(localStorage.getItem("user"));
const role = user?.role;

useEffect(()=>{

fetchEvents();

},[]);

const fetchEvents=async()=>{

const res = await API.get("/events");

setEvents(res.data);

};

const deleteEvent=async(id)=>{

await API.delete(`/events/${id}`);

fetchEvents();

};

const bookEvent=async(id)=>{

await API.post("/booking",{

userId:1,
eventId:id

});

alert("Event booked");

};

return(

<div className="page-container">

<div className="table-card">

<h2>Events</h2>

<table>

<thead>

<tr>

<th>Title</th>
<th>Description</th>
<th>Date</th>
<th>Location</th>
<th>Action</th>

</tr>

</thead>

<tbody>

{events.map(e=>(

<tr key={e.id}>

<td>{e.title}</td>

<td>{e.description}</td>

<td>{e.date}</td>

<td>{e.location}</td>

<td>

{/* USER */}

{role==="USER" && (

<button onClick={()=>bookEvent(e.id)}>

Book

</button>

)}


{/* ADMIN */}

{role==="ADMIN" && (

<>

<button
onClick={()=>window.location=`/update/${e.id}`}
>

Edit

</button>

<button
onClick={()=>deleteEvent(e.id)}
style={{background:"red"}}
>

Delete

</button>

</>

)}

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Events;