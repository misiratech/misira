import React from 'react'
import DimensionamientoEquipo from '../assets/img/dimensionamientoEquipo.png'
import { Link } from 'react-router-dom'
const AboutDetails2 = () => {
    return (
        < section className='about-details-2' >
            <div className="section-about container full-lg-screem ">
                <article className='text-lg-left-about'>
                    <aside className="text-center-about text-lg-left-about">
                        <h2>Dimensionamiento de Equipos</h2>
                    </aside>
                    <p>El módulo dimensionamiento de equipos se refiere al proceso de determinar el tamaño y la capacidad adecuada de los equipos utilizados en un proceso metalúrgico. Estos equipos pueden incluir trituradoras, molinos, tamices, separadores, tanques de lixiviación, espesadores, entre otros.</p>
                    <div className="text-center-about text-lg-left-about">
                        <Link className="btn" to="/misira/informacion4">Más información</Link>
                    </div>
                </article>
                <article className='img-content-about'>
                    <div className='img-card-about'>
                        <img className="img-about" src={DimensionamientoEquipo} alt="img-about" />
                    </div>
                </article>
            </div>
        </section >
    )
}

export default AboutDetails2


{/* <article className='text-lg-left-about'>
<aside className="text-center-about text-lg-left-about">
    <h2>Dimensionamiento de Equipos</h2>
</aside>
<p>El módulo de balance metalúrgico es similar al balance de masa, pero se enfoca específicamente en los elementos o compuestos de interés en la metalurgia. Permite realizar un seguimiento de los flujos de los metales o minerales de valor en un proceso y determinar cómo se distribuyen..</p>
<div className="text-center-about text-lg-left-about">
    <a className="btn" href="" target="_blank" rel="noopener">Más información</a>
</div>
</article>
<article className='img-content-about'>
<div className='img-card-about'>
    <img className="img-about" src={imgPortada} alt="img-about" />
</div>
</article> */}