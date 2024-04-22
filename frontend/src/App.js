//Jeremy Granizo
//04/22/2024 IT302-002
//Phase 5 Assignment
//jag254@njit.edu
import React, { useState, useCallback } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Basketball from './components/basketball.js';
import AddFeedback from "./components/addFeedback.js";
import BasketballList from './components/basketballList.js'
import Nav from "react-bootstrap/Nav";
import Login from "./components/login.js";

import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [user, setUser] = useState(null);

  const loginSetter = useCallback(user => {
    setUser(user);
  },[setUser]);

  async function logout() {
    setUser(null);
  }

  return (
   <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Basketball Teams</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={"/jag254_basketballs"}>Basketballs</Nav.Link>
            <Nav.Link as={NavLink} to={user? "" :"/jag254_login"}>{user ? "Logout User" : "Login"}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
    <Route path="/" element={<BasketballList />}></Route>
    <Route path="/jag254_basketballs" element={<BasketballList />}></Route>
    <Route path="/jag254_basketballs/:id/feedback" element={<AddFeedback user={user}/>}></Route>
    <Route path="/jag254_login" element = {<Login user={user} loginSetter={loginSetter}/>}></Route>
    <Route path="/jag254_basketballs/:id/" element={<Basketball user={user} />}></Route>

    
      </Routes>

    </div>
  );
}

export default App;
