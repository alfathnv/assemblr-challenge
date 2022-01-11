import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from './Login';
import Home from './Home';
import Detail from './Detail';

const Routing = () => {
  return (
    <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path='/detail' element={<Detail/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Login/>} />
        </Routes>
    </Router>
  );
};

export default Routing;
