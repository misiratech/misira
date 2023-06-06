import React from 'react'
import '../assets/css/home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section  className="section-home">
      <article className='hero-image'>
        <aside className='hero-image-opacity'>
          <div className='hero-image-content'>
            <h3 className="home-subtitle">Compañia</h3>
            <h1 className="home-title">MISIRA</h1>
            <h2 className="description">“Desarrolladores de software metalúrgico”</h2>
            <div className='content-btn-home'>
              <Link  to="/misira/nosotros"className='btn-home'>
                Saber más
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
              </Link></div>
          </div>
        </aside>
      </article>
    </section>
  )
}

export default Home
