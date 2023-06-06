import { useState } from 'react';
import '../assets/css/navMenu.css'
import Chatbot from './Chatbot';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.png'
const NavMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const [isActiveChat, setIsActiveChat] = useState(false)

    return (

        <header className="header">
            <section className="container">
                <div className="logo">
                    <Link className='logo-text' to="/">
                        <img className="logo-letter" src={Logo} alt="Logo" />isira
                    </Link>
                </div>
                <nav className={`menu ${isActive ? 'is-active' : ''}`}>
                    <NavLink to="/misira">Inicio</NavLink>
                    <NavLink to="/misira/nosotros">Nosotros</NavLink>
                    <NavLink to="/misira/contacto">Contacto</NavLink>
                </nav>
                <div>
                    <button className="menu-btn" onClick={() => setIsActive(!isActive)}>
                        {isActive ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
                            </svg>}
                    </button>
                    <button className="menu-btn2" onClick={() => setIsActiveChat(!isActiveChat)}>
                        {isActiveChat ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Communication / Chat_Circle_Close">
                                    <path id="Vector" d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M11.9996 21C10.3645 21 8.83126 20.5639 7.50977 19.8018L7.50563 19.7994C7.37783 19.7257 7.31368 19.6887 7.25293 19.6719C7.19578 19.6561 7.14475 19.6507 7.08559 19.6548C7.02214 19.6591 6.95537 19.6813 6.82405 19.7251L4.51758 20.4939L4.51155 20.4962C4.02705 20.6577 3.78482 20.7384 3.62305 20.6807C3.48169 20.6303 3.36979 20.5187 3.31938 20.3774C3.26157 20.2152 3.34268 19.9719 3.50489 19.4853L3.50586 19.4823L4.27468 17.1758C4.3186 17.044 4.34003 16.9781 4.34437 16.9146C4.34842 16.8554 4.34401 16.804 4.32821 16.7469C4.31146 16.6863 4.27448 16.6221 4.20114 16.495L4.19819 16.4899C3.43604 15.1684 3 13.6351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9702 21 11.9996 21Z" stroke="#000000" stroke-width="0.69" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg> :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Communication / Chat_Conversation_Circle">
                                    <path id="Vector" d="M9.33814 15.9905C12.4946 15.8151 15 13.2003 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.1807 3.34094 12.2817 3.92989 13.21L3.50586 14.482L3.50518 14.4839C3.34278 14.9711 3.26154 15.2149 3.31938 15.3771C3.36979 15.5184 3.48169 15.6299 3.62305 15.6803C3.78472 15.7379 4.02675 15.6573 4.51069 15.4959L4.51758 15.4939L5.79004 15.0698C6.7183 15.6588 7.81935 15.9998 9.00006 15.9998C9.11352 15.9998 9.22624 15.9967 9.33814 15.9905ZM9.33814 15.9905C9.33822 15.9907 9.33806 15.9902 9.33814 15.9905ZM9.33814 15.9905C10.1591 18.3259 12.3841 20.0002 15.0001 20.0002C16.1808 20.0002 17.2817 19.6588 18.2099 19.0698L19.482 19.4939L19.4845 19.4944C19.9717 19.6567 20.2158 19.7381 20.378 19.6803C20.5194 19.6299 20.6299 19.5184 20.6803 19.3771C20.7382 19.2146 20.6572 18.9706 20.4943 18.4821L20.0703 17.21L20.2123 16.9746C20.7138 16.0979 20.9995 15.0823 20.9995 14C20.9995 10.6863 18.3137 8 15 8L14.7754 8.00414L14.6621 8.00967" stroke="#000000" stroke-width="0.69" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>}
                    </button>
                </div>
                {isActiveChat && <Chatbot />}
            </section>
        </header>

    )
}

export default NavMenu