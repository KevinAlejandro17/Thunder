import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './components/LandingPage/Home';
import About from './components/LandingPage/About';
import Contact from './components/LandingPage/Contact';

import Login from './components/Adminlogin/AdminLogin';
import Register from './components/AdminRegister/AdminRegister';
import Form from "./components/UserData/UserData";
import UserList from "./components/UserList/UserList";

import Sidebar from './components/DashboardPage/Sidebar';
import Topbar from './components/DashboardPage/Topbar';
import Dashboard from './components/DashboardPage/Dashboard/index';



function App() {
  return ( 
  
  <Router>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Topbar" element={<Topbar/>} />
      <Route path="/Sidebar" element={<Sidebar/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/UserList" element={<UserList />} />
      <Route path="/update/:id" element={<Form />} />
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
  
    </Routes>
  </Router>
  );
}

export default App;