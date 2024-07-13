import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaReact, FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

export default function Navbar({ onHandleNavbarClick, activeTab, onHandleDarkModeClick, isDarkBg, handleClickNavMobileIcon, toggledIcon }) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 600);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <nav className={`${isDarkBg ? 'nav-yellow-bg' : 'nav-blue-bg'}`}>
      <Link href="/" id="home" legacyBehavior>
        <a className="navbar_container_logo">
          <img
            src={isDarkBg ? 'https://port2bucket.s3.amazonaws.com/yellow-jo-logo.svg' : 'https://port2bucket.s3.amazonaws.com/jo_logo.svg'}
            className='logo-div'
            onClick={() => onHandleNavbarClick('logo')}
            alt="Logo"
          />
        </a>
      </Link>
      <ul className={`${toggledIcon ? 'nav-mobile-active nav-mob-inac' : 'nav-mobile-active nav-mob-ac'}`}>
        <li
          className={`${activeTab === 'home' ? 'active-nav' : ''} navbar_container_menu`}
          id="home"
          onClick={() => onHandleNavbarClick('home')}
        >
          <a className="navbar_menu_item">Home</a>
        </li>
        <li
          className={`${activeTab === 'about' ? 'active-nav' : ''} navbar_container_menu`}
          id="about"
          onClick={() => onHandleNavbarClick('about')}
        >
          <a className="navbar_menu_item">About & Skillset</a>
        </li>
        <li
          className={`${activeTab === 'projects' ? 'active-nav' : ''} navbar_container_menu`}
          id="projects"
          onClick={() => onHandleNavbarClick('projects')}
        >
          <a className="navbar_menu_item">Projects</a>
        </li>
        <li onClick={onHandleDarkModeClick} className='navbar_container_menu moon-logo'>
          {isDarkBg ? <IoIosSunny /> : <FaRegMoon />}
        </li>
      </ul>
      <div className="nav-mobile-icon" onClick={handleClickNavMobileIcon}>
        {toggledIcon ? <FaBars /> : <HiX />}
      </div>
    </nav>
  );
}

