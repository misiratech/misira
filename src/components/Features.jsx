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
const title1="50% DESCUENTO"
const description1="Si eres estudiantes, no pierdas la oportunidad de acceder a nuestro software que te ayudará a destacar en tu vida académica. Recuerda, esta oferta es por tiempo limitado, así que asegúrate de aprovecharla mientras puedas."
const Features = () => {
  return (
    < section id='features' className='features'>
      <div className="section-features container">
        <h2 className="section-title">CARACTERÍSTICAS</h2>
        <div className='img-p ' >
          <img src={img9} alt="img-about" />
        </div>
        <article className='features-content'>
          <aside className='features-info'>
            <h3>Análisis de Tamaño de Partícula</h3>
            <p>
            El módulo proporciona herramientas para cargar los datos de tamaño de partícula obtenidos mediante técnicas como tamizado, y ofrece funciones de análisis estadístico para calcular parámetros como el tamaño promedio, el coeficiente de determinación y la distribución granulométrica.</p>
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
            <p>El módulo de balance metalúrgico es similar al balance de masa, pero se enfoca específicamente en los elementos o compuestos de interés en la metalurgia. Permite realizar un seguimiento de los flujos de los metales o minerales de valor en un proceso y determinar cómo se distribuyen.</p>
            <Link className="btn" to="/misira/informacion3">Más información</Link>
          </aside>
          <div className='img-s '>
            <img src={balanceMetalurgico} alt="img-about" />
          </div>
        </article>


        <article className='features-content'>
          <aside className='features-info order-2'>
            <h3>Dimensionamiento de Equipos</h3>
            <p>El módulo dimensionamiento de equipos se refiere al proceso de determinar el tamaño y la capacidad adecuada de los equipos utilizados en un proceso metalúrgico. Estos equipos pueden incluir trituradoras, molinos, tamices, separadores, tanques de lixiviación, espesadores, entre otros..</p>
            <Link className="btn" to="/misira/informacion4">Más información</Link>
          </aside>
          <div className='img-s order-1'>
            <img src={dimensionamientoEquipo} alt="img-about" />
          </div>
        </article>


        <article className='features-content'>
          <aside className='features-info'>
            <h3>Valorización de concentrados</h3>
            <p>El módulo de valorización de concentrados se utiliza para evaluar el valor económico de los concentrados minerales obtenidos en un proceso de beneficio. Permite ingresar los datos de las leyes o concentraciones de los diferentes metales presentes en el concentrado, así como los precios actuales de los metales en el mercado, y realiza cálculos para determinar el valor total del concentrado.</p>
            <Link className="btn" to="/misira/informacion5">Más información</Link>
          </aside>
          <div className='img-s'>
            <img src={valorizacionConcentrados} alt="img-about" />
          </div>
        </article>
   
      </div>
      <FooterSection title={title1} description={description1} imgFooter={metso}/>
    </section >
  )
}

export default Features







