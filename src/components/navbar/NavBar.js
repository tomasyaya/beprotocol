import React from 'react';

import './navbar.css';

const Navbar = () => {
  return(
    <div className="navbar">
      <p>Tutormatch</p>
      <div>
        <a href="#">Become a Tutor</a>
        <a className="signin-link" href="#"> Sign In</a>
      </div>
    </div>
  )
}

export default Navbar;