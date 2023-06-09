import React from 'react'
import { Link } from 'react-router-dom'

const FooterSection = ({ imgFooter }) => {
    return (
        <>{imgFooter && <article style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.748)), url("${imgFooter}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <aside className='footer-section-info container'>
                <h3>50% DE DESCUENTO EN TU PRIMERA COMPRA </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam modi dolore, ab unde labore totam
                    repudiandae omnis quam nesciunt eveniet, sequi ipsam ad culpa voluptatibus delectus ex voluptas provident?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam modi dolore, ab unde labore totam
                    repudiandae omnis quam nesciunt eveniet, sequi ipsam ad culpa voluptatibus delectus ex voluptas provident?
                </p>
                <Link className="btn" to="/misira/informacion3">Más información</Link>
            </aside >
        </article>}
        </>
    )
}

export default FooterSection