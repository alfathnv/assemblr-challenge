import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import { signOutGoogle } from '../../google-auth';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <header>
      <div className='left-wrapper'>
        <Link to="/home" className="link">
          <span className="links_name">Home</span>
        </Link>
        <Link to="/detail" className="link">
          <span className="links_name">Detail</span>
        </Link>
      </div>
      
      {/* <button onClick={() => signOutGoogle(navigate)}></button> */}
      <div className="right-wrapper">
      </div>
    </header>
  )
}

export default Navbar
