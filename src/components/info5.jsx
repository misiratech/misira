import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ConcentradoCuVal from '../assets/img/concentradoCuVal.png'
import valo1 from '../assets/img/valo1.png'  
import valo2 from '../assets/img/valo2.png'  
import valo3 from '../assets/img/valo3.png'  
import valo4 from '../assets/img/valo4.png'  
import { EffectCoverflow, Autoplay, Navigation } from "swiper";
const Info5 = () => {
    return (
        <section class="section-details">
            <div class="sd-header-content">
                <div className='sd-header container'>
                    <div class="sd-text-header">
                        <h2>VALORIZACIÓN DE CONCENTRADOS</h2>
                        <p>La valorización de concentrados se refiere al proceso de determinar el valor económico de un concentrado mineral producido en una operación minera o metalúrgica. El concentrado es un producto intermedio obtenido después del procesamiento de un mineral, donde se han eliminado parte de los minerales indeseables y se ha enriquecido el contenido de los minerales valiosos.</p>
                    </div>
                    <div className="sd-image">
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
                                <img src={valo1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={valo2} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={valo3} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={valo4} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={valo1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={valo2} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={valo3} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={valo4} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='sd-content container'>
                <div className="sd-text-content">
                    <p>
                        La valorización de concentrados es esencial para evaluar la rentabilidad y el potencial económico de una operación minera. Implica determinar el valor de los minerales valiosos presentes en el concentrado, considerando su contenido, calidad, precio de mercado y las condiciones de venta. El objetivo es determinar cuánto valen los minerales recuperados en el concentrado y, por lo tanto, cuánto contribuyen a los ingresos generados por la operación.
                    </p>
                    <p>El proceso de valorización de concentrados puede involucrar la determinación de los precios de los metales o minerales contenidos en el concentrado, utilizando referencias de precios en los mercados internacionales o acuerdos comerciales establecidos. También se pueden considerar los costos de tratamiento y refinación adicionales que puedan ser necesarios para obtener productos finales de mayor valor.</p>
                    <p>
                        El proceso de valorización de concentrados puede involucrar la determinación de los precios de los metales o minerales contenidos en el concentrado, utilizando referencias de precios en los mercados internacionales o acuerdos comerciales establecidos. También se pueden considerar los costos de tratamiento y refinación adicionales que puedan ser necesarios para obtener productos finales de mayor valor.
                    </p>
                    <p>
                        Es importante destacar que la valorización de concentrados puede verse afectada por factores como las fluctuaciones en los precios de los metales, los costos de transporte y logística, los impuestos y regalías aplicables, así como los acuerdos contractuales con los compradores. Por lo tanto, es necesario realizar análisis periódicos de valorización para adaptarse a las condiciones cambiantes del mercado y optimizar los ingresos generados por la venta de los concentrados.
                    </p>
                    <ul className='sd-list'>
                        <li>
                            <img className="list-img" src={ConcentradoCuVal} />
                            <h4 className='text-img'>Cálculo de la valorización de un concentrado de Cobre</h4>
                        </li>
                    </ul>
                </div>
                <div className='sd-aside'>
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

export default Info5