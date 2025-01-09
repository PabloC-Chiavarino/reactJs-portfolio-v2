import React from 'react'
import './styles.css'
import { ProjectImg1 } from '../../assets/Images'

const Projects = React.forwardRef((props, ref) => {
    return (
        <div id="projects" className="projects__container" ref={ref}>
            <h2>Proyectos</h2>
            <p>Aquí encontrarás algunos de los proyectos en los que he trabajado, cada uno reflejando mis habilidades, mi enfoque en <span className='text-highlightA'>crear soluciones funcionales y bien estructuradas,</span> y mi compromiso con las <span className='text-highlightB'>buenas prácticas</span> en el desarrollo.</p>
            <div className="projects__row">
                <div className="projects__info">
                    <h3 className="projects__title">BackLab Strategies</h3>
                    <h4 className="projects__subtitle">Proyecto Front-End</h4>
                    <p className='projects__description'>Sitio web dinámico desarrollado siguiendo el dieño de un equipo UX/UI, implementando metodología pixel perfect.<br/>Incluye animaciones avanzadas con CSS y JavaScript (Intersection Observer API) para lograr una experiencia visual fiel al diseño original.<br/>Contiene formulario de contacto, solicitud de turnos online y selección de idioma EN/ES.</p>
                </div>
                <div className="projects__image">
                    <a href="https://backlab-strategies.vercel.app" target="_blank" className='projects__link'>
                        <img className='projects__img' src={ProjectImg1} alt="Proyect Image" />
                    </a>
                </div>
            </div>
            <div className="projects__row">
                <div className="projects__info">
                    <h3 className="projects__title">Proyect Title</h3>
                    <h4 className="projects__subtitle">Subtitle</h4>
                    <p className='projects__description'>Description</p>
                </div>
                <div className="projects__image">
                    <img className='projects__img' src="" alt="Proyect Image" />
                </div>
            </div>
            <div className="projects__row">
                <div className="projects__info">
                    <h3 className="projects__title">Proyect Title</h3>
                    <h4 className="projects__subtitle">Subtitle</h4>
                    <p className='projects__description'>Description</p>
                </div>
                <div className="projects__image">
                    <img className='projects__img' src="" alt="Proyect Image" />
                </div>
            </div>
            <div className="projects__row">
                <div className="projects__info">
                    <h3 className="projects__title">Proyect Title</h3>
                    <h4 className="projects__subtitle">Subtitle</h4>
                    <p className='projects__description'>Description</p>
                </div>
                <div className="projects__image">
                    <img className='projects__img' src="" alt="Proyect Image" />
                </div>
            </div>
        </div>
    )
})

export default Projects