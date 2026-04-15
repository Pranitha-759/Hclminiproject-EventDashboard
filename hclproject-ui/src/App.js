// // // // import logo from './logo.svg';
// // // // import './App.css';

// // // // function App() {
// // // //   return (
// // // //     <div className="App">
// // // //       <header className="App-header">
// // // //         <img src={logo} className="App-logo" alt="logo" />
// // // //         <p>
// // // //           Edit <code>src/App.js</code> and save to reload.
// // // //         </p>
// // // //         <a
// // // //           className="App-link"
// // // //           href="https://reactjs.org"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           Learn React
// // // //         </a>
// // // //       </header>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
// // // import { BrowserRouter,Routes,Route }
// // // from "react-router-dom";

// // // import Register from "./pages/Register";
// // // import Login from "./pages/Login";
// // // import Events from "./pages/Events";
// // // import CreateEvent from "./pages/CreateEvent";

// // // function App(){

// // // return(

// // // <BrowserRouter>

// // // <Routes>

// // // <Route path="/" element={<Login/>}/>

// // // <Route path="/register" element={<Register/>}/>

// // // <Route path="/events" element={<Events/>}/>

// // // <Route path="/create" element={<CreateEvent/>}/>

// // // </Routes>

// // // </BrowserRouter>

// // // )

// // // }

// // // export default App;

// // import React from "react";

// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // /* pages */
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Dashboard from "./pages/Dashboard";
// // import Events from "./pages/Events";
// // import CreateEvent from "./pages/CreateEvent";
// // import UpdateEvent from "./pages/UpdateEvent";
// // import Users from "./pages/Users";
// // import Bookings from "./pages/Bookings";


// // /* layout */
// // import Layout from "./components/Layout";

// // /* css */
// // import "./App.css";

// // function App(){

// // return(

// // <BrowserRouter>

// // <Routes>

// // {/* without sidebar layout */}

// // <Route path="/" element={<Login/>} />

// // <Route path="/register" element={<Register/>} />


// // {/* with sidebar layout */}

// // <Route path="/dashboard" element={
// // <Layout>
// // <Dashboard/>
// // </Layout>
// // } />

// // <Route path="/events" element={
// // <Layout>
// // <Events/>
// // </Layout>
// // } />

// // <Route path="/create" element={
// // <Layout>
// // <CreateEvent/>
// // </Layout>
// // } />

// // <Route path="/update" element={
// // <Layout>
// // <UpdateEvent/>
// // </Layout>
// // } />

// // <Route path="/users" element={
// // <Layout>
// // <Users/>
// // </Layout>
// // } />

// // <Route path="/bookings" element={
// // <Layout>
// // <Bookings/>
// // </Layout>
// // } />

// // <Route path="/update/:id" element={<UpdateEvent/>}/>
// // </Routes>

// // </BrowserRouter>

// // )

// // }

// // export default App;


// import React from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Events from "./pages/Events";
// import CreateEvent from "./pages/CreateEvent";
// import UpdateEvent from "./pages/UpdateEvent";
// import Users from "./pages/Users";
// import Bookings from "./pages/Bookings";

// import Layout from "./components/Layout";

// function App(){

// const role = localStorage.getItem("role");

// return(

// <BrowserRouter>

// <Routes>

// <Route path="/" element={<Login/>} />

// <Route path="/register" element={<Register/>} />

// <Route path="/dashboard" element={
// <Layout>
// <Dashboard/>
// </Layout>
// } />

// <Route path="/events" element={
// <Layout>
// <Events/>
// </Layout>
// } />

// <Route path="/create" element={
// role==="ADMIN" ?
// <Layout><CreateEvent/></Layout>
// :
// <h2>Access Denied</h2>
// } />

// <Route path="/update/:id" element={
// role==="ADMIN" ?
// <Layout><UpdateEvent/></Layout>
// :
// <h2>Access Denied</h2>
// } />

// <Route path="/users" element={
// role==="ADMIN" ?
// <Layout><Users/></Layout>
// :
// <h2>Access Denied</h2>
// } />

// <Route path="/bookings" element={
// <Layout>
// <Bookings/>
// </Layout>
// } />

// </Routes>

// </BrowserRouter>

// )

// }

// export default App;


import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import UpdateEvent from "./pages/UpdateEvent";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";

import Layout from "./components/Layout";
import "./App.css";

function App(){

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (user?.role === "ADMIN") {
    return children;
  }
  return <h2 style={{textAlign:"center", marginTop: "50px"}}>Access Denied (Admin only)</h2>;
};

return(

<BrowserRouter>

<Routes>

{/* public routes */}

<Route path="/" element={<Login/>} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />


{/* protected routes */}

<Route path="/dashboard" element={

<Layout>

<Dashboard/>

</Layout>

} />


<Route path="/events" element={

<Layout>

<Events/>

</Layout>

} />


{/* ADMIN only */}

<Route path="/create" element={
<AdminRoute>
<Layout><CreateEvent/></Layout>
</AdminRoute>
} />

<Route path="/update/:id" element={
<AdminRoute>
<Layout><UpdateEvent/></Layout>
</AdminRoute>
} />

<Route path="/users" element={
<AdminRoute>
<Layout><Users/></Layout>
</AdminRoute>
} />


{/* normal user allowed */}

<Route path="/bookings" element={

<Layout>

<Bookings/>

</Layout>

} />


</Routes>

</BrowserRouter>

)

}

export default App;