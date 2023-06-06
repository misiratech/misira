import React from 'react'
import BalanceMetalurgico from '../assets/img/balanceMetalurgico.png'
import { Link } from 'react-router-dom'
const AboutUs2 = () => {
    return (
        <section className='about'>
            <div className="section-about container full-lg-screem">
                <article className='img-content-about'>
                    <div className='img-card-about'>
                        <img className="img-about" src={BalanceMetalurgico} alt="img-about" />
                    </div>
                </article>
                <article className='text-lg-left-about'>
                    <aside className="text-center-about text-lg-left-about">
                        <h2>Balance Metalúrgico</h2>
                    </aside>
                    <p>El módulo de balance metalúrgico es similar al balance de masa, pero se enfoca específicamente en los elementos o compuestos de interés en la metalurgia. Permite realizar un seguimiento de los flujos de los metales o minerales de valor en un proceso y determinar cómo se distribuyen.</p>
                    <div className="text-center-about text-lg-left-about">
                    <Link className="btn" to="/informacion3">Más información</Link>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AboutUs2




