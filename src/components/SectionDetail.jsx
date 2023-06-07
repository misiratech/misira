import React from 'react'
import '../assets/css/sectionDetails.css'
import { Swiper, SwiperSlide } from "swiper/react";
import portada2 from '../assets/img/met4.jpg'
import img1 from '../assets/img/img1.jpg'
import { EffectCoverflow, Autoplay, Navigation } from "swiper";

const SectionDetail = () => {
    return (
        <section class="section-details">
            <div class="sd-header-content">
                <div className='sd-header container'>
                    <div class="sd-text-header">
                        <h2>Desarrollador web vs Site Builder ¿cuáles son las diferencias?</h2>
                        <p>¿Quieres crear un sitio web pero no sabes cómo hacerlo? Luego de leer este blog, sabrás qué método se adapta mejor a ti: ¿Site Builder o desarrollo web?</p>
                        <div className='sd-summary'>
                            <div className='card-summary'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 32 32" class="s-mr-1 fill yellow-400 svg-icon" fill="currentColor"><path d="M20 19.8C17.9 19.8 16.2 18.1 16.2 16C16.2 13.9 17.9 12.2 20 12.2C22.1 12.2 23.8 13.9 23.8 16C23.8 18.1 22.1 19.8 20 19.8ZM20 14.2C19 14.2 18.2 15 18.2 16C18.2 17 19 17.8 20 17.8C21 17.8 21.8 17 21.8 16C21.8 15 21 14.2 20 14.2Z"></path><path d="M24.7 26H0V6H24.7L32 16L24.7 26ZM2 24H23.7L29.6 16L23.7 8H2V24Z"></path></svg>
                                <span class="summary-text">Diseño web</span>
                            </div>
                            <div className='card-summary'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 32 32" class="s-mr-1 fill yellow-400 svg-icon" fill="currentColor"><path d="M20 19.8C17.9 19.8 16.2 18.1 16.2 16C16.2 13.9 17.9 12.2 20 12.2C22.1 12.2 23.8 13.9 23.8 16C23.8 18.1 22.1 19.8 20 19.8ZM20 14.2C19 14.2 18.2 15 18.2 16C18.2 17 19 17.8 20 17.8C21 17.8 21.8 17 21.8 16C21.8 15 21 14.2 20 14.2Z"></path><path d="M24.7 26H0V6H24.7L32 16L24.7 26ZM2 24H23.7L29.6 16L23.7 8H2V24Z"></path></svg>
                                <span class="summary-text">Diseño web</span>
                            </div>
                            <div className='card-summary'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 32 32" class="s-mr-1 fill yellow-400 svg-icon" fill="currentColor"><path d="M20 19.8C17.9 19.8 16.2 18.1 16.2 16C16.2 13.9 17.9 12.2 20 12.2C22.1 12.2 23.8 13.9 23.8 16C23.8 18.1 22.1 19.8 20 19.8ZM20 14.2C19 14.2 18.2 15 18.2 16C18.2 17 19 17.8 20 17.8C21 17.8 21.8 17 21.8 16C21.8 15 21 14.2 20 14.2Z"></path><path d="M24.7 26H0V6H24.7L32 16L24.7 26ZM2 24H23.7L29.6 16L23.7 8H2V24Z"></path></svg>
                                <span class="summary-text">Diseño web</span>
                            </div>`
                        </div>
                    </div>
                    <div className="sd-image">
                        {/* <img src={img1} /> */}
                        <Swiper
                            effect={"coverflow"}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: false,

                            }}
                            navigation={false}
                            speed={4000}
                            loop={true}
                            grabCursor={true}
                            modules={[EffectCoverflow, Autoplay, Navigation]}
                            className="sd-swiper swiper-container-free-mode"
                        >
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={img1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={img1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={img1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={img1} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='sd-content container'>
                <div className="sd-text-content">
                    <p>Tener una página web es indispensable para cualquier negocio porque se convertirá en su cara digital y además, le permitirá llegar a más clientes y aumentar sus ventas. Sin embargo, crear una página web puede ser un proceso complejo, o muy sencillo, depende del camino que tomes.</p>
                    <p>Tener una página web es indispensable para cualquier negocio porque se convertirá en su cara digital y además, le permitirá llegar a más clientes y aumentar sus ventas. Sin embargo, crear una página web puede ser un proceso complejo, o muy sencillo, depende del camino que tomes.</p>
                    <h2>1. Conocimientos y habilidades técnicas.</h2>
                    <p>Tener una página web es indispensable para cualquier negocio porque se convertirá en su cara digital y además, le permitirá llegar a más clientes y aumentar sus ventas. Sin embargo, crear una página web puede ser un proceso complejo, o muy sencillo, depende del camino que tomes.</p>
                    <p>Tener una página web es indispensable para cualquier negocio porque se convertirá en su cara digital y además, le permitirá llegar a más clientes y aumentar sus ventas. Sin embargo, crear una página web puede ser un proceso complejo, o muy sencillo, depende del camino que tomes.</p>
                    <img src={img1} />
                    <h2>1. Conocimientos y habilidades técnicas.</h2>
                    <p>Tener una página web es indispensable para cualquier negocio porque se convertirá en su cara digital y además, le permitirá llegar a más clientes y aumentar sus ventas. Sin embargo, crear una página web puede ser un proceso complejo, o muy sencillo, depende del camino que tomes.</p>
                    <p>Tener una página web es indispensable para cualquier negocio porque se convertirá en su cara digital y además, le permitirá llegar a más clientes y aumentar sus ventas. Sin embargo, crear una página web puede ser un proceso complejo, o muy sencillo, depende del camino que tomes.</p>
                    <img src={img1} />
                </div>
                <div className='sd-aside'>
                    <article className='sd-aside-autor'>
                        <h3>Autor del artículo</h3>
                        <div className='author-info'>
                            <img src={portada2} alt='Imagen del autor' className='author-image' />

                            <div className='author-details'>
                                <p className='author-name'>Yamada Anna 🔴</p>
                                <a href='enlace-al-perfil-de-facebook' className='author-link'>Ver perfil</a>
                            </div>
                        </div>
                    </article>
                    <div className='sd-aside-step'>
                        <ul className='custom-list'>
                            <li>1. Conocimientos y habilidades técnicas.</li>
                            <li>2. Flexibilidad y personalización.</li>
                            <li>3. Escalabilidad y mantenimiento.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionDetail