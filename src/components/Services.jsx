import React from 'react'
import '../assets/css/service.css'

import sec1 from '../assets/img/sec1.jpg'
import sec2 from '../assets/img/sec2.jpg'
import sec3 from '../assets/img/sec3.jpg'
const Services = () => {
  return (
    <section className='service'>
      <div className="services-section container full-lg-screem">
        <div className="service-title">
          <h2 className='h2-service'>
            Acerca de nosotros
          </h2>
        </div>
        <article>
          <a className='service-card'>
            <img src={sec1} />
            <aside className="service-card-info">
              <div>
                <h3>Misión</h3>
                <p className='service-card-p'>
                  Nuestra misión es crear soluciones de software personalizadas e innovadoras. Trabajando con ética y profesionalismo, ofreciendo un servicio excepcional y brindando un valor real a nuestros clientes.
                </p>
              </div>
            </aside>
          </a>
        </article>
        <article>
          <a className='service-card'>
            <img  src={sec2} />
            <aside className="service-card-info">
              <div>
                <h3>Visión</h3>
                <p className='service-card-p'>
                  Nuestra visión es ser líderes en la industria de desarrollo de software, reconocidos por nuestra capacidad de crear soluciones de software de alta calidad y transformadoras.
                </p>
              </div>
            </aside>
          </a>
        </article>
        <article>
          <a className='service-card'>
            <img  src={sec3} />
            <aside className="service-card-info">
              <div>
                <h3>Cultura de Empresa</h3>
                <p className='service-card-p'>
                  En nuestra empresa, creemos en una cultura de innovación, colaboración y crecimiento continuo. Buscamos fomentar un ambiente de trabajo donde nuestros empleados se sientan valorados y respetados, y donde se les dé la oportunidad de alcanzar su máximo potencial.
                </p>
              </div>
            </aside>
          </a>
        </article>
      </div>
    </section>
  )
}

export default Services




{/*<article>
 <div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article> */}