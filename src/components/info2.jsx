import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import if11 from '../assets/img/cerradoInverso.png'
import if12 from '../assets/img/circuitoCerradoDirecto.png'
import if13 from '../assets/img/cuadroComparativo.jpg'
import masa1 from '../assets/img/masa1.png'
import masa2 from '../assets/img/masa2.png'
import masa3 from '../assets/img/masa3.png'
import masa4 from '../assets/img/masa4.png'

import { EffectCoverflow, Autoplay, Navigation } from "swiper";
const Info2 = () => {
  return (
    <section class="section-details">
      <div class="sd-header-content">
        <div className='sd-header container'>
          <div class="sd-text-header">
            <h2>Balance de masa</h2>
            <p>La molienda en húmedo generalmente se usa en las operaciones de procesamiento de minerales de minerales, debido a las siguientes ventajas</p>
            <ol className='sd-list'>
              <li>1.	Consumo más bajo de energía por tonelada de producto.</li>
              <li>2.	Mayor capacidad por unidad de volumen del molino.</li>
              <li>3.	Se utiliza la clasificación para el estrecho control del producto.</li>
              <li>4.	Elimina el problema de polvo</li>
            </ol>
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
                <img src={masa1} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={masa2} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={masa3} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={masa4} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={masa1} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={masa2} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={masa3} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={masa4} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='sd-content container'>
        <div className="sd-text-content">
          <h2>Tipos de circuitos</h2>
          <ol className='sd-list'>
            <li>
              <h3>Circuito Abierto</h3>
              <p>
                En el circuito abierto de molienda, el mineral pasa a través de los molinos sin una etapa de clasificación. Se utiliza generalmente un molino de barras, cuya descarga constituye el alimento al circuito de molienda secundaria. A este circuito se le conoce también como molienda primaria.
              </p>
            </li>
            <li>
              <h3>Circuito Cerrado</h3>
              <p>
                En un circuito cerrado de molienda, el molino trabaja con un clasificador cuyo producto grueso retorna nuevamente al molino y el fino constituye el producto final de molienda. A este circuito se le conoce también como circuito de molienda secundaria, o cuando está dentro del circuito de concentración, se le denomina como circuito de remolienda, con la diferencia que es indirecto.
              </p>
            </li>
            <li>
              <h3>Circuito Cerrado Directo</h3>
              <p>
                {`La alimentación va a un equipo de fragmentación (Molino de Bolas) y el producto resultante (Descarga del Molino de Bolas) alimenta un clasificador (Hidrociclón). La salida del clasificador, >d95 (Underflow), vuelve al fragmentador mezclado con la alimentación, y el pasante en el clasificador, < d95 (Overflow), forma el producto de salida del circuito. Este tipo de circuito se usa en molienda y es de menor uso en trituración. La alimentación a los circuitos de molienda, normalmente, ya tiene un cierto control del tamaño porque suele proceder de un equipo de trituración`}
              </p>
              <img className="list-img" src={if12} />

              <h4 className='text-img'>Circuito Cerrado Directo</h4>
            </li>
            <li>
              <h3>Circuito Cerrado Inverso</h3>
              <p>
                {`La alimentación va a un equipo de clasificación (Hidrociclón). El rechazo (Underflow) del clasificador, > d95, pasa por el fragmentador (Molino de Bolas) y el pasante del clasificador (Overflow), < d95, es el producto resultante, constituye la salida del circuito, y va directamente a concentración. La salida del fragmentador (Descarga Molino de Bolas) va en su totalidad al clasificador`}
              </p>
              <p>
                El clasificador, en el caso de trituradores, debe estar protegido contra elementos excesivamente grandes en tamaño ya que se pueden dañar las mallas de las cribas. Esta instalación de protección no es necesaria en los circuitos de molienda donde el rango de tamaños está más controlado; son alimentados normalmente desde una etapa de trituración o de molienda anterior.
              </p>
              <img className="list-img" src={if11} />
              <h4 className='text-img'>Circuito Cerrado Inverso</h4>
              <p>
                La comparación de ventajas e inconvenientes entre circuitos abiertos y cerrados se puede resumir en los aspectos fundamentales indicados en la tabla que se adjunta:
              </p>
              <div className='img-table'>
                <img src={if13} />
              </div>
              <h4 className='text-img'>Cuadro comparativo de los tipos de circuitos de molienda</h4>
            </li>
          </ol>

        </div>
        <div className='sd-aside'>
          <div className='sd-aside-step'>
            <ul className='custom-list'>
              <li>Tipos de circuitos</li>
              <li>Circuito cerrado</li>
              <li>Circuito abierto</li>
              <li>Circuito cerrado directo</li>
              <li>Circuito cerrado inverso</li>
              <li>Ventajas e inconvenientes entre circuitos abiertos y cerrados</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Info2