import React from 'react'
import '../assets/css/footer.css'
import Logo from '../assets/img/logo.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-content'>
                <div className="column wider">
                    <h4>Acerca de nosostros</h4>
                    <p>Desarrollar soluciones tecnológicas avanzadas que permiten optimizar y agilizar los procesos</p>
                    <img className="logo-footer" src={Logo} />
                </div>
                <div className="column">
                    <h4>Productos</h4>
                    <p>Automatización</p>
                    <p>Software Web</p>
                    <p>Software Desktop</p>
                    <p>Software Móvil</p>

                </div>
                <div className="column">
                    <h4>Servicios</h4>
                    <p>Capacitación</p>
                    <p>Enseñanza</p>
                    <p>Automatización</p>
                    <p>Implementación</p>
                </div>
                <div className="column wider">
                    <h4>Contacto</h4>
                    <p>misiratech@gmail.com </p>
                    <p>@MisiraTech</p>
                </div>
            </div>
            <div className='footer-end'>
                <p>Perú - Lima -
                    Lima  @Copyright 2023 - Todos los Derechos Reservados</p>
                <div className='svg-footer'>
                    <div className='svg-content'>
                        <a href="https://www.linkedin.com/company/misira/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <svg className='svg-icon' width="30" height="30" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M85.75 6.35662V78.6434C85.75 80.2961 85.0877 81.8812 83.9087 83.0498C82.7297 84.2185 81.1306 84.875 79.4632 84.875H6.53676C4.86941 84.875 3.27035 84.2185 2.09135 83.0498C0.912354 81.8812 0.25 80.2961 0.25 78.6434L0.25 6.35662C0.25 4.70389 0.912354 3.11885 2.09135 1.9502C3.27035 0.781544 4.86941 0.125 6.53676 0.125L79.4632 0.125C81.1306 0.125 82.7297 0.781544 83.9087 1.9502C85.0877 3.11885 85.75 4.70389 85.75 6.35662V6.35662ZM25.3971 32.5294H12.8235V72.4118H25.3971V32.5294ZM26.5287 18.8199C26.5353 17.8771 26.3545 16.9423 25.9967 16.0688C25.6388 15.1953 25.1109 14.4003 24.4431 13.729C23.7752 13.0578 22.9805 12.5235 22.1043 12.1567C21.2282 11.7899 20.2877 11.5977 19.3366 11.5912H19.1103C17.1762 11.5912 15.3213 12.3528 13.9536 13.7084C12.586 15.064 11.8176 16.9027 11.8176 18.8199C11.8176 20.737 12.586 22.5757 13.9536 23.9313C15.3213 25.2869 17.1762 26.0485 19.1103 26.0485V26.0485C20.0614 26.0717 21.0079 25.9089 21.8955 25.5694C22.7832 25.2299 23.5947 24.7204 24.2836 24.0699C24.9725 23.4195 25.5254 22.6408 25.9106 21.7785C26.2958 20.9161 26.5058 19.987 26.5287 19.0442V18.8199ZM73.1765 48.1832C73.1765 36.1936 65.4815 31.5324 57.8368 31.5324C55.3337 31.4081 52.8416 31.9366 50.6089 33.065C48.3762 34.1934 46.481 35.8824 45.1124 37.9634H44.7603V32.5294H32.9412V72.4118H45.5147V51.1993C45.333 49.0268 46.0233 46.871 47.4359 45.2001C48.8485 43.5292 50.8691 42.4783 53.0588 42.2757H53.5366C57.535 42.2757 60.5024 44.7683 60.5024 51.0498V72.4118H73.0759L73.1765 48.1832Z" fill="#F2F2F2" />
                            </svg>
                        </a>
                    </div>
                    <div className='svg-content'>
                        <a href="https://www.facebook.com/Misiratech"
                            target="_blank"
                            rel="noopener noreferrer">
                            <svg className='svg-icon' width="30" height="30" viewBox="0 0 108 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M108 50.3033C108 22.52 83.826 0 54 0C24.174 0 0 22.52 0 50.3033C0 75.4167 19.7424 96.2267 45.5616 100V64.8467H31.8528V50.3H45.5616V39.22C45.5616 26.6133 53.622 19.6467 65.9592 19.6467C71.8632 19.6467 78.048 20.63 78.048 20.63V33.01H71.2332C64.5264 33.01 62.4384 36.89 62.4384 40.87V50.3033H77.4144L75.0204 64.8433H62.4384V100C88.2576 96.2267 108 75.4167 108 50.3033Z" fill="#F2F2F2" />
                            </svg>
                        </a>
                    </div>
                    <div className='svg-content'>
                        <a href="https://www.youtube.com/@Misiratech"
                            target="_blank"
                            rel="noopener noreferrer">
                            <svg className='svg-icon' width="30" height="30" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className='svg-content'>
                        <a href="https://www.instagram.com/misiraoficial/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <svg className='svg-icon' width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#000000" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
