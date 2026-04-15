import { useEffect,useState } from "react";
import API from "../services/api";

function Dashboard(){

const [events,setEvents]=useState([]);
const [bookings,setBookings]=useState([]);

useEffect(()=>{

API.get("/events")
.then(res=>setEvents(res.data));

API.get("/booking")
.then(res=>setBookings(res.data));

},[]);

return(

<div style={{padding:"20px"}}>

<h2>Dashboard</h2>

<div style={styles.boxContainer}>

<div style={styles.box}>

<h3>Total Events</h3>
<p>{events.length}</p>

</div>

<div style={styles.box}>

<h3>Total Bookings</h3>
<p>{bookings.length}</p>

</div>

</div>

</div>

)

}

const styles={

boxContainer:{
display:"flex",
gap:"20px"
},

box:{
padding:"20px",
background:"#e3f2fd",
borderRadius:"8px"
}

}

export default Dashboard;