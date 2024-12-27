import React from 'react'

import './styles.css'

const Timeline = React.forwardRef((props, ref) => {
    
    return (
        <section id="timeline" className="timeline" ref={ref}>
            <h2>Experiencia</h2>
            <div className="timeline__container">
                <div className="timeline__dot"></div>
                <div className="timeline__item">
                    <div className="timeline-content">
                        <h3>Dic 2023 - Mar 2024</h3>
                        <h4>Líder de Desarrollo Front-End</h4>
                        <h5>BackLab Strategies (Startup)</h5>
                        <p>Lideré el desarrollo del front-end del sitio web para BackLab Strategies, una startup en su fase de lanzamiento.</p><br/><p>La interfaz de usuario fue construida con ReactJS, logrando un diseño eficiente y fiel al concepto original, con una arquitectura modular que facilita el mantenimiento y el crecimiento del proyecto.<br/>Además, se integraron librerías como Calendly para la gestión de citas y Toastify para las notificaciones, mejorando la funcionalidad y experiencia del usuario.</p><br/><p>Para más detalles, visita la sección de proyectos para verlo en acción. También puedes consultar el apartado de feedbacks para conocer las opiniones y experiencias de quienes confiaron en mí.</p>

                    </div>
                </div>
            </div>
        </section>
    )
})

export default Timeline