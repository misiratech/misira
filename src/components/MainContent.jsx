import React, { useState, useEffect } from 'react';
import Home from './Home'
import Projects from './Projects'
import AboutUs1 from './AboutUs1'
import AboutDetails1 from './AboutDetails1'
import AboutUs2 from './AboutUs2'
import AboutDetails2 from './AboutDetails2'
import AboutUs3 from './AboutUs3'
import img11 from '../assets/img/img11.jpg'
import '../assets/css/sectionMain.css'
import Services from './Services';
import Contact from './Contact';


const MainContent = () => {
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
        <div className='section-main'>
            <div
                className="image-overlay"
                style={{
                    backgroundImage: `url(${img11})`,
                    filter: `saturate(${saturation}%)`,
                }}
            />
            <Home />
            <Services />
            <AboutUs1 />
            <AboutDetails1 />
            <AboutUs2 />
            <AboutDetails2 />
            <AboutUs3 />
            <Projects />
            <Contact />
        </div>
    )
}

export default MainContent