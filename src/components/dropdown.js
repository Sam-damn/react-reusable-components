import './dropdown.css';
import React from 'react';

const MenuItem = ({ leftIcon, rightIcon, children }) => (
  <a href="#" className="menu-item">
    <span className="icon-button">{leftIcon}</span>
    <span className="menu-title">{children}</span>
    <span className="right-icon">{rightIcon}</span>
  </a>
);

const Menu = ({ items }) => (
  <div className="dropdown">
    {items.map((item) => (
      <MenuItem leftIcon={item.Icon}>
        {item.title}
      </MenuItem>
    ))}
  </div>
);
export default Menu;
