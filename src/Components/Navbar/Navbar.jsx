import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt="Logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>About</Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link>
        </li>
        <li>
          <button><Link to='contact' smooth={true} offset={-200} duration={500} className='button'>Contact Us</Link></button>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
