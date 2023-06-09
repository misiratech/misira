import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../assets/css/proyect.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import card1 from '../assets/img/simulacion.png'
import card2 from '../assets/img/bombaCentrifuga.png'
import card3 from '../assets/img/fajaTransportadora.png'
import card4 from '../assets/img/celdasFlotacion.png'
const Projects = () => {
    return (
        <section className='proyect'>
            <div className="section-proyect">
                <h2 className='section-title'>PRÓXIMOS PROYECTOS</h2>
                <article className='slide-proyects'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
            
                        }}
                        navigation={false}
                        loop={true}
                        speed={5000}
                        grabCursor={true}
                        modules={[Autoplay]}
                        className='swiper-container-free-mode'
                    >
                        <SwiperSlide className="swiper-card">
                            <img src={card1} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={card2} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={card3} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={card4} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={card1} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={card2} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={card3} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={card4} />
                        </SwiperSlide>
                    </Swiper>
                </article>
  
            </div>
        </section>
    )
}

export default Projects

