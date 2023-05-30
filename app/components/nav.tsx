import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUp, CloudCog } from 'lucide-react';
import '../style.css';
import LogoComponent from './logo';

const handleSlide = (slideId: string) => {
  console.log(slideId);
  const slide = document.getElementById(slideId);
  if (slide) {
    slide.scrollIntoView({ behavior: 'smooth' });
  }
};


const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / scrollHeight) * 100;
      const isScrolled = scrollTop > window.innerHeight * 0.86; // Change the value here
      setScrolled(isScrolled);
      setScrollProgress(progress);
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header className={`navbar-fixed-top animate-fade-in ${scrolled ? 'scrolled' : ''}`}>
      <div className="visio-logonav">
        <LogoComponent scrolled={ scrolled } />
      </div>
      <div className={`fixed inset-x-0 z-999`}>
        <div className="container  flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <button className="duration-200 cursor-pointer" onClick={() => handleSlide('works')}>
              WORKS
            </button>
            <button className="duration-200 cursor-pointer" onClick={() => handleSlide('about')}>
              ABOUT
            </button>
            <button className="duration-200 cursor-pointer" onClick={() => handleSlide('contact')}>
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
export { handleSlide };