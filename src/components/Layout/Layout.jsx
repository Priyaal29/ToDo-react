import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"


function Layout(){
return(
    <div className="layout">
    <div className="title">
    <h1>To Do List</h1>

    <div className="hh">
      <button > <Link to="/"><span className="routeButton">Task</span></Link></button>
      <button className="routeButton"><Link to="/daily"><span className="routeButton">Daily</span></Link></button>
    </div>
    </div>


    <div className="route">

   
   <Outlet />
        
    </div>
</div>
)
}

export default Layout;