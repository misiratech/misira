import React from 'react'
import ValorizacionConcentrados from '../assets/img/valorizacionConcentrados.png'
import { Link } from 'react-router-dom'
const AboutUs3 = () => {
    return (
        <section className='about'>
            <div className="section-about container full-lg-screem">
                <article className='img-content-about'>
                    <div className='img-card-about'>
                        <img className="img-about" src={ValorizacionConcentrados} alt="img-about" />
                    </div>
                </article>
                <article className='text-lg-left-about'>
                    <aside className="text-center-about text-lg-left-about">
                        <h2>Valorización de concentrados</h2>
                    </aside>
                    <p>El módulo de valorización de concentrados se utiliza para evaluar el valor económico de los concentrados minerales obtenidos en un proceso de beneficio. Permite ingresar los datos de las leyes o concentraciones de los diferentes metales presentes en el concentrado, así como los precios actuales de los metales en el mercado, y realiza cálculos para determinar el valor total del concentrado.</p>
                    <div className="text-center-about text-lg-left-about">
                        <Link className="btn" to="/misira/informacion5">Más información</Link>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AboutUs3