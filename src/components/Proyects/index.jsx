import './styles.css'
import { ProyectImg1 } from '../../assets/Images'

const Proyects = () => {
    return (
        <div className="proyects__container">
            <h2>Proyectos</h2>
            <p>Aquí encontrarás algunos de los proyectos en los que he trabajado, cada uno reflejando mis habilidades, mi enfoque en <span className='text-highlightA'>crear soluciones funcionales y bien estructuradas,</span> y mi compromiso con las <span className='text-highlightB'>buenas prácticas</span> en el desarrollo.</p>
            <div className="proyects__row">
                <div className="proyects__info">
                    <h3 className="proyects__title">BackLab Strategies</h3>
                    <h4 className="proyects__subtitle">Proyecto Front-End</h4>
                    <p className='proyects__description'>Sitio web dinámico desarrollado siguiendo el dieño de un equipo UX/UI, implementando metodología pixel perfect.<br/>Incluye animaciones avanzadas con CSS y JavaScript (Intersection Observer API) para lograr una experiencia visual fiel al diseño original.<br/>Contiene formulario de contacto, solicitud de turnos online y selección de idioma EN/ES.</p>
                </div>
                <div className="proyects__image">
                    <img className='proyects__img' src={ProyectImg1} alt="Proyect Image" />
                </div>
            </div>
            <div className="proyects__row">
                <div className="proyects__info">
                    <h3 className="proyects__title">Proyect Title</h3>
                    <h4 className="proyects__subtitle">Subtitle</h4>
                    <p className='proyects__description'>Description</p>
                </div>
                <div className="proyects__image">
                    <img className='proyects__img' src="" alt="Proyect Image" />
                </div>
            </div>
            <div className="proyects__row">
                <div className="proyects__info">
                    <h3 className="proyects__title">Proyect Title</h3>
                    <h4 className="proyects__subtitle">Subtitle</h4>
                    <p className='proyects__description'>Description</p>
                </div>
                <div className="proyects__image">
                    <img className='proyects__img' src="" alt="Proyect Image" />
                </div>
            </div>
            <div className="proyects__row">
                <div className="proyects__info">
                    <h3 className="proyects__title">Proyect Title</h3>
                    <h4 className="proyects__subtitle">Subtitle</h4>
                    <p className='proyects__description'>Description</p>
                </div>
                <div className="proyects__image">
                    <img className='proyects__img' src="" alt="Proyect Image" />
                </div>
            </div>
        </div>
    )
}

export default Proyects