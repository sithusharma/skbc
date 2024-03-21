import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links left">
        <a href="/" className="nav-link">Home</a>
        <a href="/services" className="nav-link">Services</a>
      </div>
      <div className="nav-brand">SkinCare<br/>Beauty Spa</div>
      <div className="nav-links right">
        <a href="/book" className="nav-link">Book</a>
        <a href="/about" className="nav-link">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
