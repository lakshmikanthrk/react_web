import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

const[openLinks,setOpenLinks] = useState(false);

const toggleNavbar = () => {
    setOpenLinks(!openLinks);
};
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo}></img>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon />
            </button>
        </div>
      
    </div>
  )
}

export default Navbar;
