import React from 'react'
import { useLangContext } from '../../hooks'
import { projectsData } from '../../config/projectsData'
import './styles.css'

const Projects = React.forwardRef((props, ref) => {
  const { lang } = useLangContext()

  return (
    <section id='projects' className='projects__container' ref={ref}>
      <h2>{projectsData[lang].title}</h2>
      {projectsData[lang].introduction}
      {projectsData[lang].projects.map((project) => (
        <div key={project.title} className='projects__row'>
          <div>
            <div className='projects__row--header'>
              <h3 className='projects__title'>{project.title}</h3>-
              <h4 className='text-highlightB projects__subtitle'>
                {project.subtitle}
              </h4>
            </div>
            <a
              href={project.url}
              target='_blank'
              className='projects__link'
              rel='noreferrer'
            >
              <div
                className='projects__image--container'
                data-name={
                  lang === 'es' ? 'Click para visitar' : 'Click to visit'
                }
              >
                <img
                  className='projects__img'
                  src={project.image}
                  alt='Proyect Image'
                />
              </div>
            </a>
            <p className='projects__description'>{project.description}</p>
            {project.url2 && (
              <a
                href={project.url2}
                target='_blank'
                rel='noreferrer'
                className='projects__url2 text-highlightA'
              >
                {lang === 'es'
                  ? 'Ver documentación Swagger'
                  : 'View Swagger documentation'}
              </a>
            )}
            <hr />
          </div>
        </div>
      ))}
    </section>
  )
})

export default Projects
