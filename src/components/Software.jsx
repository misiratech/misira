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


const Software = () => {
  return (
    <section className='software'>
      <div className="section-software container">
        <h2 className="section-title">SOFTWARE PROMITECH</h2>
        <article className='software-card'>
          <img src={img9} alt="img-software" />
          <div className='h3-hover'>
            <h3 >Sección Principal</h3>
          </div>
        </article>
        <article className='software-card'>
          <img src={particula} alt="img-software" />
          <div className='h3-hover'>
            <h3 >Análisis de Partícula</h3>
          </div>

        </article>
        <article className='software-card'>
          <img src={balMasa} alt="img-software" />
          <div className='h3-hover'>
            <h3 >Balance de Masa</h3>
          </div>

        </article>
        <article className='software-card'>
          <img src={balMet} alt="img-software" />
          <div className='h3-hover'>
            <h3 >Balance Metalúrgico</h3>
          </div>

        </article>
        <article className='software-card'>
          <img src={equipos} alt="img-software" />
          <div className='h3-hover'>
            <h3 >Dimensionamiento de Equipos</h3>
          </div>

        </article>
        <article className='software-card'>
          <img src={valConc1} alt="img-software" />
          <div className='h3-hover'>
            <h3 >Valorización de concentrados</h3>
          </div>

        </article>
        <h3 className="section-subtitle">ADQUIERE TU LICENCIA AHORA</h3>
      </div>
      <FooterSection imgFooter={metso2} />
    </section>

  )
}

export default Software