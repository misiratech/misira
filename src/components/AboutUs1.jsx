import React from 'react'
import AnalisisParticula from '../assets/img/analisisParticula.png'
import '../assets/css/about.css'
import { Link } from 'react-router-dom'


const AboutUs1 = () => {
  return (
    <section  className='about'>
      <div className="section-about container full-lg-screem">
        <article className='img-content-about'>
          <div className='img-card-about'>
            <img className="img-about" src={AnalisisParticula} alt="img-about" />
          </div>
        </article>
        <article className='text-lg-left-about'>
          <aside className="text-center-about text-lg-left-about">
            <h2>Análisis de Tamaño de Partícula</h2>
          </aside>
          <p>El módulo proporciona herramientas para cargar los datos de tamaño de partícula obtenidos mediante técnicas como tamizado, y ofrece funciones de análisis estadístico para calcular parámetros como el tamaño promedio, el coeficiente de determinación y la distribución granulométrica.</p>
          <div className="text-center-about text-lg-left-about">
            <Link className="btn" to="/misira/informacion1">Más información</Link>
          </div>
        </article>
      </div>
    </section>

  )
}

export default AboutUs1