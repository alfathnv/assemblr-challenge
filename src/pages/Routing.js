import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from './Login';
import Home from './Home';
import Detail from './Detail';
import {auth} from "../firebase-config"
import DetailPopup from "../components/DetailPopup"

const Routing = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    } 
    setIsUserSignedIn(false);
  })

  if (isUserSignedIn) {
    return (
      <Router>
        <Navbar></Navbar>
        <DetailPopup />
          <Routes>
            <Route path='/detail' element={<Detail />} />
            <Route path='/home' element={<Home />} />
          </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
      </Router>
    );
  }
  
};

export default Routing;
