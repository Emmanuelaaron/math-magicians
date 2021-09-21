import React from 'react';
import '../styles/App.css';

const Header = () => (
  <header className="header">
    <div className="HeaderLeft">
      <h3>Math Magicians</h3>
    </div>
    <ul className="headerRight">
      <li>Home</li>
      <li>Calculator</li>
      <li>Quote</li>
    </ul>
  </header>
);

export default Header;
