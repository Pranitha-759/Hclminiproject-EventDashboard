import { useState } from "react";
import API from "../services/api";

function CreateEvent(){

const [event,setEvent]=useState({

title:"",
description:"",
date:"",
location:""

});

const handleChange=e=>{

setEvent({...event,[e.target.name]:e.target.value});

}

const createEvent=async()=>{

await API.post("/events",event);

alert("Event created");

}

return(

<div className="page-container">

<div className="dashboard-form">

<h2>Create Event</h2>

<div className="form-grid">

<input
name="title"
placeholder="Event Title"
onChange={handleChange}
/>

<input
name="description"
placeholder="Description"
onChange={handleChange}
/>

<input
type="date"
name="date"
onChange={handleChange}
/>

<input
name="location"
placeholder="Location"
onChange={handleChange}
/>

</div>

<button onClick={createEvent}>

Create Event

</button>

</div>

</div>

)

}

export default CreateEvent;