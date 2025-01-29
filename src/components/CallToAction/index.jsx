import React from 'react'
import './styles.css'

const CallToAction = React.forwardRef((props, ref) => {
  
    return (
        <div id='cta' className="callToAction" ref={ref}>
            <h2>¿Tienes un proyecto en mente?</h2>
            <p>
                Estoy listo para <span className='text-highlightA'>contribuir a tu equipo o proyecto.</span> Ya sea colaborando con un equipo para alcanzar objetivos comunes, o trabajando de manera independiente en un desafío específico, me enfoco en <span className='text-highlightB'>aportar soluciones prácticas y efectivas."</span>
            </p>
                <br/>
                <p> Elige una opción de contacto que prefieras y te responderé a la brevedad posible para comenzar a trabajar juntos.    
            </p>
            <div className="callToAction__options">
                <a 
                    className="callToAction__button"
                    href="mailto=pchiavarino89@gmail.com" 
                    target="_blank"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("mailto:pchiavarino89@gmail.com", "_blank");
                    }}>
                        Email
                </a>
                <a className="callToAction__button" href="https://wa.me/5492216545052" target="_blank">
                        Whatsapp
                </a>
            </div>
        </div>
    )
})

export default CallToAction