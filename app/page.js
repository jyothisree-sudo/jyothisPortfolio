'use client';

import AboutPage from '../pages/about';
import HomeComponent from './homeComponent';
import Navbar from './navbar';
import Projects from '@/pages/projects';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  // Refs for elements
  const aboutParentDivRef = useRef(null);
  const projectsParentDivRef = useRef(null);

  const [isDarkBg, setIsDarkBg] = useState(true);
  const [showPage, setShowPage] = useState('home');
  const [activeTab, setActiveTab] = useState('home');
  const [toggledIcon, setToggledIcon] = useState(true);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClickNavMobileIcon = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Optional: Smooth scrolling animation
      });
    };
  
    // Scroll to top immediately
    setTimeout(() => {
      scrollToTop();
    }, 1000);
    setToggledIcon((prevState) => !prevState);
  };

  const onHandleDarkModeClick = () => {
    setIsDarkBg(!isDarkBg);
    setToggledIcon((prevState) => !prevState);
  };

  const onHandleNavbarClick = (optionId) => {
    if (optionId === 'home' || optionId === 'logo') {
      setShowPage('home');
      setActiveTab('home');
    } else if (optionId === 'about') {
      setShowPage('about');
      setActiveTab('about');
    } else if (optionId === 'skills') {
      setShowPage('skills');
      setActiveTab('skills');
    } else if (optionId === 'projects') {
      setShowPage('projects');
      setActiveTab('projects');
    }

    setToggledIcon((prevState) => !prevState);
  };

  // Cleanup event listeners when component unmounts
  useEffect(() => {
    return () => {
      if (aboutParentDivRef.current) {
        aboutParentDivRef.current.removeEventListener('click', scrollToTop);
      }
      if (projectsParentDivRef.current) {
        projectsParentDivRef.current.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <>
      <Navbar
        onHandleNavbarClick={onHandleNavbarClick}
        activeTab={activeTab}
        onHandleDarkModeClick={onHandleDarkModeClick}
        isDarkBg={isDarkBg}
        handleClickNavMobileIcon={handleClickNavMobileIcon}
        toggledIcon={toggledIcon}
      />
      {showPage === 'home' && <HomeComponent isDarkBg={isDarkBg} />}
      {showPage === 'about' && <AboutPage isDarkBg={isDarkBg} ref={aboutParentDivRef} />}
      {showPage === 'projects' && <Projects isDarkBg={isDarkBg} ref={projectsParentDivRef} />}
    </>
  );
}

