import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children}){

return(

<div className="app-layout">

<Navbar/>

<div className="main-container">

<Sidebar/>

<div className="content">

{children}

</div>

</div>

</div>

)

}

export default Layout;