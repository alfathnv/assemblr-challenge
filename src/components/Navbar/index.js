import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import { signOutGoogle } from '../../google-auth';
import { useNavigate } from 'react-router-dom';
import './index.scss'

function Navbar() {
  const navigate = useNavigate();
  return (
    <header>
      <div className='left-wrapper'>
        <h1 className='text-logo'>Challenge.</h1>
        <Link to="/home" className="link">
          <span className="links_name">Home</span>
        </Link>
        <Link to="/detail" className="link">
          <span className="links_name">Detail</span>
        </Link>
      </div>
      <div className="right-wrapper">
        <button onClick={() => signOutGoogle(navigate)}>Sign Out</button>
      </div>
    </header>
  )
}

export default Navbar
