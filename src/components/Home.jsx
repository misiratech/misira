import React, { useEffect } from 'react'
import '../assets/css/home.css'
import { useState } from 'react';
import img11 from '../assets/img/img11.jpg'
import TypingText from './TypingText';
const Home = () => {



  const [scrollPosition, setScrollPosition] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const maxValue = 120
  const minValue = 70
  const handleScroll = () => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const saturationValue = (scrollPosition / window.innerHeight) * 100;
    const saturationPercentage = maxValue - saturationValue;
    if (saturationPercentage > minValue) {
      setSaturation(saturationPercentage);
    }

  }, [scrollPosition]);


  return (
    <section id="home" className="section-home">
      <div
        className="image-overlay"
        style={{
          backgroundImage: `url(${img11})`,
          filter: `saturate(${saturation}%)`,
        }}
      />
      <article className='hero-image'>
        <aside className='hero-image-opacity'>
          <div className='hero-image-content'>
            <TypingText/>
            <div className='content-btn-home'>
              <a href='#contact' className='btn-home'>
                Contáctanos
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </a></div>
          </div>
        </aside>
      </article>
    </section>
  )
}

export default Home
