import React from 'react'
import analisisParticula from '../assets/img/analisisParticula.png'
import balanceMasa from '../assets/img/balanceMasa.png'
import balanceMetalurgico from '../assets/img/balanceMetalurgico.png'
import dimensionamientoEquipo from '../assets/img/dimensionamientoEquipo.png'
import valorizacionConcentrados from '../assets/img/valorizacionConcentrados.png'
import img9 from '../assets/img/img9.png'
import metso from '../assets/img/metso.jpg'
import { Link } from 'react-router-dom'
import FooterSection from './FooterSection'
import '../assets/css/features.css'
const Features = () => {
  return (
    < section className='features'>
      <div className="section-features container">
        <h2 className="section-title">CARACTERÍSTICAS</h2>
        <div className='img-p ' >
          <img src={img9} alt="img-about" />
        </div>
        <article className='features-content'>
          <aside className='features-info'>
            <h3>Análisis de Tamaño de Partícula</h3>
            <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
            <Link className="btn" to="/misira/informacion1">Más información</Link>
          </aside>
          <div className='img-s'>
            <img src={analisisParticula} alt="img-about" />
          </div>
        </article>

        <article className='features-content'>
          <aside className='features-info order-2'>
            <h3>Balance de Masa</h3>
            <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
            <Link className="btn" to="/misira/informacion2">Más información</Link>
          </aside>
          <div className='img-s order-1'>
            <img src={balanceMasa} alt="img-about" />
          </div>
        </article>


        <article className='features-content'>
          <aside className='features-info'>
            <h3>Balance Metalúrgico</h3>
            <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
            <Link className="btn" to="/misira/informacion3">Más información</Link>
          </aside>
          <div className='img-s '>
            <img src={balanceMetalurgico} alt="img-about" />
          </div>
        </article>


        <article className='features-content'>
          <aside className='features-info order-2'>
            <h3>Dimensionamiento de Equipos</h3>
            <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
            <Link className="btn" to="/misira/informacion4">Más información</Link>
          </aside>
          <div className='img-s order-1'>
            <img src={dimensionamientoEquipo} alt="img-about" />
          </div>
        </article>


        <article className='features-content'>
          <aside className='features-info'>
            <h3>Valorización de concentrados</h3>
            <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
            <Link className="btn" to="/misira/informacion5">Más información</Link>
          </aside>
          <div className='img-s'>
            <img src={valorizacionConcentrados} alt="img-about" />
          </div>
        </article>
   
      </div>
      <FooterSection imgFooter={metso}/>
    </section >
  )
}

export default Features








{/* < section className='features'>
<div className="section-features container">
  
  <h2 className="section-title order-1 item">CARACTERISTICAS</h2>

  <div className='img-p order-2 item' >
    <img src={img9} alt="img-about" />
  </div>


  <article className='features-info order-3 item'>
    <h3>Balance de Masa</h3>
    <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
    <Link className="btn" to="/misira/informacion2">Más información</Link>
  </article>

  <div className='img-s order-4 item'>
    <img src={img9} alt="img-about" />
  </div>

  <article className='features-info order-5 item'>
    <h3>Balance de Masa</h3>
    <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
    <Link className="btn" to="/misira/informacion2">Más información</Link>
  </article>

  <div className='img-s order-6 item'>
    <img src={img9} alt="img-about" />
  </div>


  <article className='features-info order-7 item' >
    <h3>Balance de Masa</h3>
    <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
    <Link className="btn" to="/misira/informacion2">Más información</Link>
  </article>

  <div className='img-s order-8 item'>
    <img src={img9} alt="img-about" />
  </div>

  
  <article className='features-info order-9 item' >
    <h3>Balance de Masa</h3>
    <p>El módulo de balance de masa se utiliza para determinar cómo se distribuyen los materiales en un sistema metalúrgico. Permite realizar un seguimiento de los flujos de entrada y salida de materiales en un proceso metalúrgico, y calcular las pérdidas o ganancias de masa en cada etapa.</p>
    <Link className="btn" to="/misira/informacion2">Más información</Link>
  </article>

  <div className='img-s order-10 item'>
    <img src={img9} alt="img-about" />
  </div>
</div>
</section >
 */}


