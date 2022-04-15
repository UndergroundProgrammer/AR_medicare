import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Products from './components/Products';
import SignIn from './components/SignIn';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import StakeholderMapper from './components/StakeholderMapper';

function App() {
  return (
    <Router>
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/doctors" element={<StakeholderMapper/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/products" element={<Products/>}/>
    <Route path="/" element={<SignIn/>}/>
    
    </Routes>
    </div>
    </Router>
  );
}

export default App;
