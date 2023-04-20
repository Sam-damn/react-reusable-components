/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { ReactComponent as  ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as  BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as  BellIcon } from "./icons/bell.svg";
import { ReactComponent as  MessengerIcon } from "./icons/messenger.svg";
import {ReactComponent as CarretIcon } from "./icons/caret.svg";
import {ReactComponent as CogIcon } from "./icons/cog.svg";
import {ReactComponent as ChevronIcon } from "./icons/chevron.svg";



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

function Menu(props) {

  function MenuItem (props) {
    return (
      
      <a href ='#' className="menu-item">
        <span className="icon-button"> {props.leftIcon} </span>
        <span className="menu-title"> {props.children} </span> 
        {/*<span className="right-icon"> {props.rightIcon} </span>*/}
      </a>
    );
    
  }
  return (
    <div className="dropdown">
        <MenuItem leftIcon = {<BoltIcon/> }> Profile </MenuItem>
        <MenuItem leftIcon = {<CogIcon/> } rightIcon = {<BoltIcon/>}> Settings </MenuItem>
        <MenuItem leftIcon = {<MessengerIcon/> } > Quit </MenuItem>

    </div>
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
        <Menu/>
      </NavItem>


    </NavBar>
  );
}


export default App;
