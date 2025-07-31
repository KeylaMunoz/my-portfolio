import "./contact.css"
import { useState } from 'react';

    const Contact = () => {
        
    return (
        <section>
            <div className="containerContact">
                <div className="icon-container">
                    <div className="icon-front">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" className="icon linkedin" />
                    </div>
                    <div className="icon-back">
                        <a href="https://www.linkedin.com/in/keyla-abigail-mu%C3%B1oz-1b1755287/  https://wa.me/5493811234567?text=Hola%2C%20estoy%20interesado%20en%20tus%20productos" target="_blank">
                            <p>Keyla Muñoz</p>
                        </a>
                    </div>
                </div>

                <div className="icon-container">
                    <div className="icon-front">
                        <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="GitHub Icon" className="icon" />
                    </div>
                    <div className="icon-back">
                        <a href="https://github.com/KeylaMunoz" target="_blank">
                            <p>Keyla Muñoz</p>
                        </a>
                    </div>
                </div>
                <div className="icon-container">
                    <div className="icon-front">
                        <img src="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png" alt="Gmail Icon" className="icon" />
                    </div>
                    <div className="icon-back">
                        <p>keyla.keyla.munoz@gmail.com</p>
                    </div>
                </div>


                <div className="icon-container">
                    <div className="icon-front">
                        <img src="https://cdn-icons-png.freepik.com/256/3536/3536445.png?uid=R170152393&ga=GA1.1.233634873.1729727867&semt=ais_hybrid" alt="WhatsApp Icon" className="icon" />
                    </div>
                    <div className="icon-back">
                        <a href=" https://wa.me/5493813644789?text=Hola%20Keyla%20Muñoz2C%20estoy%20interesado%20en%20tu%20perfil" target="_blank">
                            <p>+54 9 3813644789</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact