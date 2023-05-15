import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { ArrowUp, CloudCog } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [disableScrollToSlide, setDisableScrollToSlide] = useState(false);
  const disableDuration = 1000; // 1 second

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleWorksClick = () => {
    // setDisableScrollToSlide(true);
    // setTimeout(() => {
    //   setDisableScrollToSlide(false);
    // }, disableDuration);
  };

  const handleSlide = (slideId: string) => {
    console.log(slideId);
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-zinc-900/500 border-zinc-800'
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <button
              className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('works')}
            >
              Works
            </button>
            <button
              // spy={true}
              // smooth={!disableScrollToSlide}
              // offset={-70}
              // duration={500}
              className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('about')}
            >
              About Us
            </button>
            <button
              className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('contact')}
            >
              Contact Us
            </button>
            <button
              className="duration-200 text-zinc-300 hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('title')}
            >
              <ArrowUp className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
