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
              <a href='#contact' className='btn'>
                Contáctanos
              </a></div>
          </div>
        </aside>
      </article>
    </section>
  )
}

export default Home
