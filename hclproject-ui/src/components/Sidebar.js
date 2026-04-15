// import { Link } from "react-router-dom";

// function Sidebar(){

// return(

// <div className="sidebar">

// <Link to="/dashboard">Dashboard</Link>

// <Link to="/events">Events</Link>

// <Link to="/create">Create Event</Link>

// <Link to="/bookings">Bookings</Link>

// <Link to="/users">Users</Link>

// </div>

// )

// }

// export default Sidebar;

import { Link } from "react-router-dom";

function Sidebar(){

const user = JSON.parse(localStorage.getItem("user"));
const role = user?.role;

return(

<div className="sidebar">

<Link to="/dashboard">Dashboard</Link>

<Link to="/events">Events</Link>

<Link to="/bookings">Bookings</Link>

{/* admin only */}

{role==="ADMIN" && (

<>
<Link to="/create">Create Event</Link>

<Link to="/users">Users</Link>
</>

)}

</div>

)

}

export default Sidebar;