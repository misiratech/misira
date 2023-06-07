import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import TanqueAgitador from '../assets/img/tanqueAgitador.png'
import { EffectCoverflow, Autoplay, Navigation } from "swiper";
import Equipos1 from '../assets/img/equipos1.png'
import Equipos2 from '../assets/img/equipos2.png'
import Equipos3 from '../assets/img/equipos3.png'
import Equipos4 from '../assets/img/equipos4.png'

const Info4 = () => {
    return (
        <section class="section-details">
            <div class="sd-header-content">
                <div className='sd-header container'>
                    <div class="sd-text-header">
                        <h2>DIMENSIONAMIENTO DE EQUIPOS</h2>
                        <p>El dimensionamiento de equipos se refiere al proceso de determinar las especificaciones y características necesarias para seleccionar y diseñar un equipo adecuado para cumplir con los requisitos de un determinado proceso o sistema. Es un aspecto crucial en la ingeniería, ya que garantiza que los equipos utilizados sean capaces de funcionar de manera eficiente y segura.</p>
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
                                <img src={Equipos1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Equipos2} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Equipos3} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Equipos4} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Equipos1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Equipos2} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Equipos3} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Equipos4} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='sd-content container'>
                <div className="sd-text-content">
                    <p>El dimensionamiento de equipos implica considerar varios factores, como la capacidad de producción requerida, las propiedades físicas y químicas de los materiales a procesar, las condiciones de operación, los estándares de calidad, la disponibilidad de energía y recursos, entre otros. Algunos ejemplos de equipos que requieren dimensionamiento son bombas, compresores, intercambiadores de calor, reactores químicos, tanques de almacenamiento, entre otros.</p>
                    <p>El proceso de dimensionamiento generalmente implica realizar cálculos y análisis para determinar parámetros clave, como el caudal, la presión, la temperatura, la capacidad de tratamiento, la eficiencia, la potencia requerida, la superficie de transferencia de calor, entre otros. Estos cálculos se basan en modelos y ecuaciones específicas para cada tipo de equipo y proceso.</p>
                    <ul className='sd-list'>
                        <li>
                            <img className="list-img" src={TanqueAgitador} />
                            <h4 className='text-img'>Cálculos metalúrgicos de un tanque con agitador mécanico</h4>
                        </li>
                    </ul>
                </div>
                <div className='sd-aside'>
                    <div className='sd-aside-step'>
                        <ul className='custom-list'>
                            <li>Implicaciones del dimensionamiento de equipos
                            </li>
                            <li>Proceso de dimensionamiento</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info4