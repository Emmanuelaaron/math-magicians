import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/Quote',
      text: 'Quote',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/',
      text: 'Home',
    },
  ];

  return (
    <header className="header">
      <div className="HeaderLeft">
        <h3>Math Magicians</h3>
      </div>
      <ul className="headerRight">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
