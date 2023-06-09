import React from 'react'
import '../assets/css/about.css'
import sec1 from '../assets/img/sec1.jpg'
import sec2 from '../assets/img/sec2.jpg'
import sec3 from '../assets/img/sec3.jpg'
const About = () => {
  
  return (
    <section id="about" className='about'>
      <div className="about-section container">
        <div className="about-title">
          <h2 className='section-title'>
            ACERCA DE NOSOTROS
          </h2>
        </div>
        <article>
          <a className='about-card'>
            <img src={sec1} />
            <aside className="about-card-info">
              <div>
                <h3>Misión</h3>
                <p className='about-card-p'>
                  Nuestra misión es crear soluciones de software personalizadas e innovadoras. Trabajando con ética y profesionalismo, ofreciendo un servicio excepcional y brindando un valor real a nuestros clientes.
                </p>
              </div>
            </aside>
          </a>
        </article>
        <article>
          <a className='about-card'>
            <img  src={sec2} />
            <aside className="about-card-info">
              <div>
                <h3>Visión</h3>
                <p className='about-card-p'>
                  Nuestra visión es ser líderes en la industria de desarrollo de software, reconocidos por nuestra capacidad de crear soluciones de software de alta calidad y transformadoras.
                </p>
              </div>
            </aside>
          </a>
        </article>
        <article>
          <a className='about-card'>
            <img  src={sec3} />
            <aside className="about-card-info">
              <div>
                <h3>Cultura de Empresa</h3>
                <p className='about-card-p'>
                  En nuestra empresa, creemos en una cultura de innovación, colaboración y crecimiento continuo. Buscamos fomentar un ambiente de trabajo donde se les dé la oportunidad de alcanzar su máximo potencial.
                </p>
              </div>
            </aside>
          </a>
        </article>
      </div>
    </section>
  )
}

export default About




