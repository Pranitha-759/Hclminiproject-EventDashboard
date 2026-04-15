function Navbar(){

return(

<div className="navbar">

<h2>EventFlow</h2>

<button onClick={()=>{

localStorage.clear();

window.location="/";

}}>

Logout

</button>

</div>

)

}

export default Navbar;