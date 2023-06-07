import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import if11 from '../assets/img/if11.png'
import if12 from '../assets/img/if12.png'
import if13 from '../assets/img/granulometria1.png'
import if14 from '../assets/img/granulometria2.png'
import if15 from '../assets/img/granulometria3.png'
import if16 from '../assets/img/if16.png'
import { EffectCoverflow, Autoplay, Navigation } from "swiper";
import { MathJax } from 'better-react-mathjax';
const Info1 = () => {
  return (
    <section class="section-details">
      <div class="sd-header-content">
        <div className='sd-header container'>
          <div class="sd-text-header">
            <h2>Análisis de Tamaño de Particula</h2>
            <p>El análisis de tamaño de partícula es un procedimiento utilizado para determinar las dimensiones de las partículas presentes en una muestra sólida, líquida o gaseosa. Es una técnica comúnmente utilizada en diversas industrias, como la farmacéutica, alimentaria, química, minera, entre otras, donde el tamaño de las partículas puede influir en las propiedades y características del material.</p>
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
                <img src={if13} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={if14} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={if15} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={if16} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={if13} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={if14} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={if15} />
              </SwiperSlide>
              <SwiperSlide className='sd-content-swiper'>
                <img src={if16} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='sd-content container'>
        <div className="sd-text-content">
          <p>Existen diferentes métodos y técnicas para el análisis de tamaño de partícula, que varían en su principio de funcionamiento y rango de tamaño de partícula que pueden medir. Algunos de los métodos más utilizados son:</p>
          <p><strong>Microscopía óptica:</strong> Se utiliza un microscopio para observar y medir visualmente
            el tamaño de las partículas en una muestra. Este método es adecuado para partículas en el rango de
            micrómetros o mayores.</p>
          <p><strong>Tamizado:</strong> Consiste en pasar la muestra a través de una serie de tamices de diferentes
            aberturas de malla y recopilar las partículas retenidas en cada tamiz. El tamaño de las partículas se
            clasifica según el tamiz en el que quedan retenidas.</p>
          <p><strong>Sedimentación:</strong> Se basa en la velocidad de sedimentación de las partículas en un fluido.
            Se mide el tiempo que tarda una partícula en sedimentar bajo la influencia de la gravedad, y se relaciona
            con su tamaño mediante ecuaciones específicas.</p>
          <p><strong>Técnicas de dispersión de luz:</strong> Estas técnicas, como la difracción láser y la
            dispersión dinámica de luz, se basan en la interacción de la luz con las partículas dispersas. Se mide
            la dispersión o el patrón de difracción de la luz para obtener información sobre el tamaño de las partículas.</p>
          <p><strong>Análisis de imagen:</strong> Se utilizan técnicas de procesamiento de imágenes para analizar
            fotografías o imágenes microscópicas de las partículas y medir su tamaño y forma.</p>

          <h2>Funciones de Distribución</h2>
          <p>En metalurgia, las funciones de distribución de partículas son herramientas utilizadas para describir y
            analizar la distribución de tamaños de partículas presentes en una muestra o en un sistema metalúrgico.
            Estas funciones proporcionan información cuantitativa sobre la proporción de partículas en diferentes rangos
            de tamaño, lo que es crucial para comprender y controlar los procesos metalúrgicos. A continuación, se
            describen algunas de las funciones de distribución de partículas más comunes en metalurgia:</p>
          <ol className='sd-list'>
            <li>
              <h3>1. Función de distribución de Gates-Gaudin-Schumann (G-G-S)</h3>
              <p>Esta función se obtiene de comparar o relacionar los valores del porcentaje acumulado pasante F(xi) con el tamaño de partícula
                o abertura de malla de la serie utilizada. El modelo matemático propuesto es:</p>
              <MathJax>
                <div className='mat-container'>
                  <span className='mat-content'>
                    {"\\(F(x) = 100\\left(\\frac{x}{x_0}\\right)^a\\)"}</span>
                </div>
              </MathJax>
              <p>Donde:</p>
              <ul className='sd-list'>
                <li>F(x) = % en peso acumulado pasante por cada malla.</li>
                <li>x = Tamaño de partícula en micrones.</li>
                <li>xo = Módulo de tamaño el cual indica el tamaño teórico máximo de partículas en la muestra.</li>
                <li>a = Módulo de distribución (Pendiente de la recta)</li>
              </ul>
              <img className="list-img" src={if11} />
              <h4 className='text-img'>Función de distribución de Gates-Gaudin-Schumann (G-G-S).</h4>
            </li>
            <li>
              <h3>2. Función de distribución de Rosin-Rammler (R-R).</h3>
              <p>Al efectuar un análisis granulométrico de algún producto de reducción de tamaño de partícula mineral, se obtiene un conjunto
                de datos experimentales de tamaño de partícula o abertura de malla y su respectivo porcentaje acumulado fino o pasante, los cuales se ajustarán a una distribución de Rossin-Rammler, si cumplen la siguiente expresión:</p>
              <MathJax>
                <div className='mat-container'>
                  <span className='mat-content'>
                    {"\\(f(x) = 100 \\cdot (1 - e^{-\\left(\\frac{x}{x_r}\\right)^m})\\)"}</span>
                </div>
              </MathJax>
              <p>Donde:</p>
              <ol className='sd-list'>
                <li>F(x) = Porcentaje acumulado pasante.</li>
                <li>Xr = Es el módulo de tamaño.</li>
                <li>m = Es el módulo de distribución.</li>
              </ol>
              <img className="list-img" src={if12} />
              <h4 className='text-img'>Función de distribución de Rosin-Rammler (R-R).</h4>
            </li>
          </ol>

        </div>
        <div className='sd-aside'>
          <div className='sd-aside-step'>
            <ul className='custom-list'>
              <li>Métodos y técnicas para el análisis de tamaño</li>
              <li>Funciones de Distribución</li>
              <li>Función de distribución de Gates-Gaudin-Schumann (G-G-S)</li>
              <li>Función de distribución de Rosin-Rammler</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Info1