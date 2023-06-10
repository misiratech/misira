import React from 'react'
import img9 from '../assets/img/img9.png'
import balMasa from '../assets/img/balMasa.png'
import balMet from '../assets/img/balMet.png'
import equipos from '../assets/img/equipos.png'
import particula from '../assets/img/particula.png'
import valConc1 from '../assets/img/valConc1.png'
import '../assets/css/software.css'
import FooterSection from './FooterSection'
import metso2 from '../assets/img/metso2.jpg'
const title2="¿POR QUÉ DEBERIA COMPRARLO?"
const description2="Porque nuestro software es intuitivo y fácil de usar. No necesitas ser un experto en programación o metalurgia para aprovechar al máximo sus funciones. Te guiaremos paso a paso para que puedas empezar a utilizarlo de inmediato y obtener resultados tangibles en poco tiempo."

const Software = () => {
  return (
    <section className='software'>
      <div className="section-software container">
        <h2 className="section-title">SOFTWARE PROMITECH</h2>
        <article className='software-card'>
          <img src={img9} alt="img-software" />
          <div className='btn-card'>
            <h3>Sección Principal</h3>
          </div>
        </article>

        <article className='software-card'>
          <img src={particula} alt="img-software" />
          <div className='btn-card'>
            <h3>Análisis de Partícula</h3>
          </div>

        </article>
        <article className='software-card'>
          <img src={balMasa} alt="img-software" />
          <div className='btn-card'>
            <h3>Balance de Masa</h3>
          </div>
        </article>
        <article className='software-card'>
          <img src={balMet} alt="img-software" />
          <div className='btn-card'>
            <h3>Balance Metalúrgico</h3>
          </div>

        </article>
        <article className='software-card'>
          <img src={equipos} alt="img-software" />
          <div className='btn-card'>
            <h3>Dimensionamiento de Equipos</h3>
          </div>

        </article>
        <article className='software-card'>
          <img src={valConc1} alt="img-software" />
          <div className='btn-card'>
            <h3>Valorización de concentrados</h3>
          </div>

        </article>
        <div className="section-subtitle">
          <a href='#contact'>
          Adquiere tu licencia ahora
          </a>
        </div>
      </div>
      <FooterSection title={title2} description={description2} imgFooter={metso2} />
    </section>

  )
}

export default Software