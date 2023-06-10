import React, { useState, useEffect } from 'react';
import Home from './Home'
import Projects from './Projects'
import Software from './Software'
import Features from './Features'
import About from './About';
import Contact from './Contact';
import '../assets/css/sectionDetails.css'

const MainContent = () => {
    return (
        <>
            <Home />
            <About />
            <Software />
            <Features />
            <Projects />
            <Contact />
        </>
    )
}

export default MainContent