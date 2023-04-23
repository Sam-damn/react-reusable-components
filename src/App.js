/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { ReactComponent as  ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as  BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as  BellIcon } from "./icons/bell.svg";
import { ReactComponent as  MessengerIcon } from "./icons/messenger.svg";
import {ReactComponent as CarretIcon } from "./icons/caret.svg";
import {ReactComponent as CogIcon } from "./icons/cog.svg";
import {ReactComponent as ChevronIcon } from "./icons/chevron.svg";

import Menu from "./components/dropdown";

const menuItems = [
  {title: 'Profile', Icon: <BoltIcon/>},
  {title: 'Info', Icon: <MessengerIcon/>},
  {title: 'About', Icon: <BellIcon/>},
  
]

let NavBar = (props) =>  {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href = '#' className ="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children }
    </li>
  );
}

function App() {
  return (
    <NavBar>
      <NavItem icon = {<ArrowIcon/>}/>
      <NavItem icon = {<BoltIcon/>}/>
      <NavItem icon = {<MessengerIcon/>}/>
      <NavItem icon = {<BellIcon/>}/>
      <NavItem icon = {<CarretIcon/>}> 
        <Menu items={menuItems}/>
      </NavItem>


    </NavBar>
  );
}


export default App;
