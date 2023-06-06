import React from 'react'
import BalanceMasa from '../assets/img/balanceMasa.png'
import { Link } from 'react-router-dom'
const AboutDetails1 = () => {
  return (
    < section  className='about-details-1' >
      <div className="section-about container full-lg-screem ">
        <article className='text-lg-left-about'>
          <aside className="text-center-about text-lg-left-about">
            <h2>Balance de Masa</h2>
          </aside>
          <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
          <div className="text-center-about text-lg-left-about">
          <Link className="btn" to="/misira/informacion2">Más información</Link>
          </div>
        </article>
        <article className='img-content-about'>
          <div className='img-card-about'>
            <img className="img-about" src={BalanceMasa} alt="img-about" />
          </div>
        </article>
      </div>
    </section >
  )
}

export default AboutDetails1









