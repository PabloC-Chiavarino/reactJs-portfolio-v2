import React from 'react'

import './styles.css'

const MainInfo = React.forwardRef((props, ref) => {
    
    return (
        <section className="mainInfo" id="mainInfo" ref={ref}>
            <div className="mainInfo__title">
                <h1>Pablo C. Chiavarino</h1> 
                <h2>Desarrollador <span className='text-highlightB' style={{fontWeight: 400}}>Full Stack</span></h2>
            </div>
            <h3>¡Hola y <span className='text-highlightB'>bienvenido!</span></h3>
            <div className="mainInfo__info">
                <p>Me dedico al desarrollo de soluciones tecnológicas completas, abarcando tanto la <span className='text-highlightA'>creación de interfaces</span> como la <span className='text-highlightA'>implementación de servicios.</span></p><br/><p>En el lado del frontend, utilizo principalmente ReactJS para <span className='text-highlightA'>crear aplicaciones web interactivas y dinámicas</span>, aplicando principios de diseño de interfaces como SOLID, KISS, patrones como pixel-perfect y<span className='text-highlightA'> modularidad en los componentes</span>. Mi enfoque se basa organización eficiente de estilos con CSS puro, sin uso de librerias, a menos que sea requerido. También tengo experiencia en desarrollo con JavaScript "vanilla" para <span className='text-highlightA'>construir soluciones ligeras y eficientes.</span><br/><br/></p><p> En el backend, tengo experiencia en la construcción de APIs y servicios utilizando Spring Boot, así como en JPA e Hibernate para la gestión de datos y persistencia. Utilizo Java como lenguaje principal para <span className='text-highlightA'>desarrollar soluciones robustas y eficientes</span>, empleando técnicas como abstracciones genéricas, mappers y DTOs para mantener un código limpio, escalable y fácilmente mantenible.</p><br/>
                <p>Mi meta se centra en ofrecer software de <span className='text-highlightB'>arquitectura sólida y escalable</span>, priorizando la eficiencia en el rendimiento y la facilidad de mantenimiento en ambos, frontend y backend.</p>
            </div>
        </section>           
    )
})

export default MainInfo