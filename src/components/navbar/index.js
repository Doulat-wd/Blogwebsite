import React, { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {getFirestore,collection,onSnapshot} from "firebase/firestore"
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth"
import { Link } from "react-router-dom";
import "./navbar.css"
import emptyProfile from "./download__1_-removebg-preview.png"
const Navbar = () => {
let navigation=useNavigate()
let NavigationCourses=(e)=>{
if(e.target.value==="App Development"){
  navigation("/appdevelopment")
}else if(e.target.value==="Web Development"){
  navigation("/webdevelopment")
}else if(e.target.value==="Wordpress"){
  navigation("/wordpress")
}else if(e.target.value==="FreeLancing"){
  navigation("/freelancing")
}
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div id="ImageDiv">
          <img
            src={emptyProfile}
            alt=""
            style={{ width: "120px",height:"70px" }}
          />
          
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p className="nav-link" aria-current="page" onClick={()=>navigation("/")}>
                  Home
                </p>
              </li>
              <li className="nav-item">
              
                <select name="" id="navbar-options" onChange={(e)=>NavigationCourses(e)}>
                  <option value="Select Category" id="Navbar_Options" > Select Category</option>
                  <option value="App Development" id="Navbar_Options">App Development</option>
                  <option value="Web Development" id="Navbar_Options" >Web Development</option>
                  <option value="Wordpress" id="Navbar_Options" >Wordpress</option>
                  <option value="FreeLancing" id="Navbar_Options" >FreeLancing</option>
                </select>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={()=>navigation("/about")}>
                  About
                </p>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
