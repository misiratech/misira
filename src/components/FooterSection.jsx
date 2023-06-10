import React from 'react'
import { Link } from 'react-router-dom'

const FooterSection = ({ imgFooter, title, description }) => {
    return (
        <>{imgFooter && <article style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.748)), url("${imgFooter}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <aside className='footer-section-info container'>
                <h3>{title} </h3>
                <p>
                    {description}
                </p>
                <a className="btn" href="#contact">¡Contacta ya!</a>
            </aside >
        </article>}
        </>
    )
}

export default FooterSection