import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="new-footer" >
      <div className="bg-dark text-light p-3">
        <h1 className="text-center">All rights reserved</h1>
        <p className="text-center mt-3 footer-links"> {/* Added a new class */}
          <Link to="/About">About</Link>
          |
          <Link to="/Contact">Contact</Link>
          |
          <Link to="/Policy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;