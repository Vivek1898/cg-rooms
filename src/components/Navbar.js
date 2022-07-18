import React from "react";
import{ useState, useEffect } from "react";
import { render } from 'react-dom'
import {BrowserRouter as Router, Route, Link ,useHistory} from 'react-router-dom'
import Mess from "../screens/MessScreen"

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const history = useHistory();
  function Logout() {
  
    localStorage.removeItem("currentUser");
   // history.push("/login")
    window.location.href = "/login";
  }

  // async function fetchMyData(){

  // }

  const navAction = () => {
    if (user) {
      return (
        <ul className="navbar-nav mr-5">
         
        
           <li class="nav-item">
           <Link className="nav-link" to="/maid">
           Maid
          </Link>
      </li>
      <li class="nav-item">
           <Link className="nav-link" to="/mess">
           Mess
          </Link>
      </li>

      <li className="nav-item active">
          <Link className="nav-link" to="/home">
           Rooms
          </Link>
          </li>
           <li className="nav-item active">
          <Link className="nav-link" to="/laundary">
           Laundary
          </Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link" to="/gym">
           Gym
          </Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link" to="/bookurpg">
           Owner
          </Link>
          </li>

          <li className="nav-item active">
          <Link className="nav-link" to="/roomates">
           Room mates
          </Link>
          </li>


         
          
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user mr-2"></i>
              {user.name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>

              <Link className="dropdown-item" to="#" onClick={Logout}>
                Logout
              </Link>
            </div>
          </div>
        </ul>
      );
    }

    return (
      
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/roomates">
           Room mates
          </Link>
          </li>

<li className="nav-item active">
          <Link className="nav-link" to="/bookurpg">
           Owner
          </Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link" to="/home">
           Rooms
          </Link>
          </li>
           <li className="nav-item active">
          <Link className="nav-link" to="/laundary">
           Laundary
          </Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link" to="/gym">
           Gym
          </Link>
          </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/mess">
           Mess
          </Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link" to="/maid">
           Maid
          </Link>
        </li>


        <li className="nav-item active">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
  };

  return (
 
 <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
        College Grahasthi
        </Link>
       
          {/* <Link to="/maid">Linked Maid</Link> */}
         
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i class="fas fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>
    

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          {navAction()}
        </div>
       
      </nav>
      {/* <Route path='/mess' component={Mess} /> */}
    </div>
    
  
   
  );
}

export default Navbar;
