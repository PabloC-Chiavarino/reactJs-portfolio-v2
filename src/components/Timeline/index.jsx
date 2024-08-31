import React from 'react'

import './styles.css'

const Timeline = React.forwardRef((props, ref) => {
    
    return (
        <section id="timeline" className="timeline" ref={ref}>
            <h2>Experiencia</h2>
            <div className="timeline__container">
                <div className="timeline__item">
                    <div className="timeline-content">
                        <h3>Dic 2023 - Mar 2024</h3>
                        <h4>Líder de Desarrollo Front-End</h4>
                        <h5>BackLab Strategies (Startup)</h5>
                        <p>Lideré el desarrollo del front-end de la plataforma para BackLab Strategies, una startup en su fase de lanzamiento. La interfaz de usuario fue construida con ReactJS, logrando un diseño eficiente, fiel al concepto original, y escalable para futuras expansiones.</p>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Timeline