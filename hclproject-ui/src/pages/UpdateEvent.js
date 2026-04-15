import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function UpdateEvent(){

const {id}=useParams();

const [event,setEvent]=useState({

title:"",
description:"",
date:"",
location:""

});

useEffect(()=>{

const loadEvent=async()=>{
try {
const res = await API.get("/events");
const selected = res.data.find(e=>String(e.id)===String(id));
if(selected) {
setEvent(selected);
}
} catch (error) {
console.error("Failed to load events", error);
}
}

loadEvent();

},[id]);

const handleChange=e=>{

setEvent({...event,[e.target.name]:e.target.value});

}

const updateEvent=async()=>{

await API.put(`/events/${id}`,event);

alert("Event Updated");

window.location="/events";

}

return(

<div className="page-container">

<div className="dashboard-form">

<h2>Update Event</h2>

<input
name="title"
value={event.title}
onChange={handleChange}
/>

<input
name="description"
value={event.description}
onChange={handleChange}
/>

<input
type="date"
name="date"
value={event.date}
onChange={handleChange}
/>

<input
name="location"
value={event.location}
onChange={handleChange}
/>

<button onClick={updateEvent}>

Update Event

</button>

</div>

</div>

)

}

export default UpdateEvent;