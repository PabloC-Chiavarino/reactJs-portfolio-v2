import React from 'react'
import { projects } from '../../config/projectsData'
import './styles.css'

const Projects = React.forwardRef((props, ref) => {

    return (
        <div id="projects" className="projects__container" ref={ref}>
            <h2>Proyectos</h2>
            <p>Aquí encontrarás algunos de los proyectos en los que he trabajado, cada uno reflejando mis habilidades, mi enfoque en <span className='text-highlightA'>crear soluciones funcionales y bien estructuradas,</span> y mi compromiso con las <span className='text-highlightB'>buenas prácticas</span> en el desarrollo.</p>
            {projects.map((project) => (
                <div key={project.title} className="projects__row">
                    <div className="projects__info">
                        <h3 className="projects__title">{project.title}</h3>
                        <h4 className="projects__subtitle">{project.subtitle}</h4>
                        <p className='projects__description'>{project.description}</p>
                        <hr />
                    </div>
                    <div className="projects__image">
                        <a href={project.url} target="_blank" className='projects__link'>
                            <img className='projects__img' src={project.image} alt="Proyect Image" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
})

export default Projects