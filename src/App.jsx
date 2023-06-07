import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import NavMenu from './components/NavMenu'
import MainContent from './components/MainContent'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/Footer';
import './assets/css/root.css'
import { register } from 'swiper/element/bundle';
// import SectionDetail from './components/SectionDetail';
import './assets/css/sectionDetails.css'
import ScrollToTop from './components/ScrollToTop'
import Info1 from './components/info1'
import Info2 from './components/info2'
import Info3 from './components/info3'
import Info4 from './components/info4'
import Info5 from './components/info5'
import { MathJaxContext } from 'better-react-mathjax'


// register Swiper custom elements
register();
function App() {


  return (
    <>
      <MathJaxContext>
        <BrowserRouter>
          <ScrollToTop />
          <NavMenu />
          <Routes>
            <Route path='/misira' element={<MainContent />} />
            {/* <Route path='/informacion' element={<SectionDetail />} /> */}
            <Route path='/misira/informacion1' element={<Info1 />} />
            <Route path='/misira/informacion2' element={<Info2 />} />
            <Route path='/misira/informacion3' element={<Info3 />} />
            <Route path='/misira/informacion4' element={<Info4 />} />
            <Route path='/misira/informacion5' element={<Info5 />} />
            {/* <Route path='/misira/contacto' element={<Contact />} /> */}
            {/* <Route path='/misira/nosotros' element={<Services />} /> */}
            <Route path="*" element={<Navigate to="/misira" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MathJaxContext>

    </>
  )
}

export default App

