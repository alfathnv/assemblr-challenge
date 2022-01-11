import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className='left'>
        <Link to="/home" className="link">
          <span className="links_name">Home</span>
        </Link>
        <Link to="/detail" className="link">
          <span className="links_name">Detail</span>
        </Link>
      </div>
      
      <div className="right">
        <a href='https://github.com/alfathnv'><i className="fa fa-github"></i></a>
        <a href='https://www.linkedin.com/in/alfathnv/'><i className="fa fa-linkedin"></i></a>
        <a href='https://www.artstation.com/alfathnoverio'><i className="fa fa-dribbble"></i></a>
      </div>
    </header>
  )
}

export default Navbar
