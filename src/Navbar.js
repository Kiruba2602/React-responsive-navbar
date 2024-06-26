import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.svg'
import './App.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-left'>
                <img className='react-logo' src={Logo} alt="" />
                <Link to='/' className='navbarLogo'>
                    MyWebsite
                </Link>
            </div>
            <div className='menu-icon' onClick={toggleMenu}>
                <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;