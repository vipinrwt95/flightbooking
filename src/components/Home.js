import React, { useState } from "react";
import {useSelector} from 'react-redux';
import FlightsPage from "./FlightsPage";
import AdminPage from "./AdminPage";

const Home=()=>{

const details=useSelector(state=>state.auth.role)

let content;

if(details=='User')
{  
    content=<div><h1>Welcome to User Dashboard</h1><FlightsPage/></div>
}
else if(details=='Admin'||details=='admin') {
    content=<div><b>Welcome to Admin Dashboard</b><AdminPage/></div>
}
else if(!details)
{
    content=<div>Access Denied///Kindly login to start booking flights</div>
}

   return (
    <div>{content}</div>
   )


}

export default Home;