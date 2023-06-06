import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from '../assets/img/balance3Concentrados.png'
import Met1 from '../assets/img/met1.png'
import Met2 from '../assets/img/met2.png'
import Met3 from '../assets/img/met3.png'
import Met4 from '../assets/img/met4.png'
import { EffectCoverflow, Autoplay, Navigation } from "swiper";
const Info3 = () => {
    return (
        <section class="section-details">
            <div class="sd-header-content">
                <div className='sd-header container'>
                    <div class="sd-text-header">
                        <h2>BALANCE METALÚRGICO</h2>
                        <p>Un balance metalúrgico es un cálculo utilizado en la metalurgia y la ingeniería de procesos para evaluar la eficiencia de una operación metalúrgica y determinar la distribución de los elementos o compuestos de interés en un sistema. Es una herramienta fundamental en el diseño, la optimización y el control de los procesos metalúrgicos.</p>
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
                                <img src={Met1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Met2} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Met3} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Met4} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Met1} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Met2} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Met3} />
                            </SwiperSlide>
                            <SwiperSlide className='sd-content-swiper'>
                                <img src={Met4} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='sd-content container'>
                <div className="sd-text-content">
                    <p>
                        El balance metalúrgico se basa en el principio de conservación de la masa, que establece que la cantidad total de masa de un sistema cerrado permanece constante a lo largo de un proceso. En el contexto metalúrgico, el sistema puede ser una planta metalúrgica, una unidad de procesamiento o una etapa específica dentro de un proceso.
                    </p>
                    <p>El objetivo del balance metalúrgico es determinar la cantidad de material de entrada (alimentación) y la distribución del material de salida (productos, concentrados, relaves u otros subproductos) en el sistema. Para lograr esto, se recopila y analiza información sobre las corrientes de entrada y salida, y se aplican ecuaciones de balance basadas en las propiedades y composiciones químicas de los materiales involucrados.</p>
                    <p>El balance metalúrgico puede incluir variables como la masa, la composición química, el contenido de elementos valiosos, la recuperación y la eficiencia del proceso. Los resultados del balance metalúrgico pueden utilizarse para evaluar el rendimiento de una planta metalúrgica, identificar pérdidas o desviaciones en el proceso, determinar la calidad de los productos finales y realizar ajustes para mejorar la eficiencia y la rentabilidad del sistema.</p>
                    <ol className='sd-list'>
                        <li>
                            <img className="list-img" src={img2} />
                            <h4 className='text-img'>Balance Metalúrgico de 3 concentrados</h4>
                        </li>
                    </ol>
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

export default Info3