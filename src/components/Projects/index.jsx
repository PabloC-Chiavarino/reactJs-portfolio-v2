import React from 'react'
import { useLangContext } from '../../hooks'
import { projectsData } from '../../config/projectsData'
import './styles.css'

const Projects = React.forwardRef((props, ref) => {
  const { lang } = useLangContext()

  return (
    <div id='projects' className='projects__container' ref={ref}>
      <h2>{projectsData[lang].title}</h2>
      {projectsData[lang].introduction}
      {projectsData[lang].projects.map((project) => (
        <div key={project.title} className='projects__row'>
          <div className='projects__info'>
            <h3 className='projects__title'>{project.title}</h3>
            <h4 className='projects__subtitle'>{project.subtitle}</h4>
            <p className='projects__description'>{project.description}</p>
            <hr />
          </div>
          <div className='projects__image' data-name={lang === 'es' ? 'Click para visitar' : 'Click to visit'}>
            <a href={project.url} target='_blank' className='projects__link' rel='noreferrer'>
              <img className='projects__img' src={project.image} alt='Proyect Image' />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
})

export default Projects
