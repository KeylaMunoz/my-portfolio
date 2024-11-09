import React, {  useEffect, useState } from 'react';
import './navBar.css'; 
import { useTranslation } from 'react-i18next';

const NavBar = ({ changeLanguage }) => {
    const { t } =  useTranslation(); 

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('nav-active');
        } else {
            document.body.classList.remove('nav-active');
        }
    }, [isActive]);

    
    const toggleMenu = () => {
      setIsActive(!isActive);
    };
    
    return(
        <nav>
             <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={toggleMenu}> 
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
            </div>

            <div className={`nav ${isActive ? 'nav-active' : ''}`}>
                <div className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__list-item"><a className='linkNav' href="#aboutMe">{t('sobreMi')}</a></li>
                        <li className="nav__list-item"><a className='linkNav' href="#projects">{t('proyectos')}</a></li>
                        <li className="nav__list-item"><a className='linkNav' href="#tools">{t('herramientas')}</a></li>
                        <li className="nav__list-item"><a className='linkNav' href="#contact">{t('contacto')}</a></li>
                    </ul>
                </div>
            </div>
            <div className='languageButtons'>
                <button className='buttonES' onClick={() => changeLanguage('es')}>ES</button>
                <button className='buttonEN' onClick={() => changeLanguage('en')}>EN</button>
            </div>
        </nav>
    )}

export default NavBar



