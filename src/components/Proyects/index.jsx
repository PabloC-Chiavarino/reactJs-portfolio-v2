import './styles.css'
import { ProyectImg1 } from '../../assets/Images'

const Proyects = () => {
    return (
        <div className="proyects__container">
            <h2>Proyectos</h2>
            <p>Aquí encontrarás algunos de los proyectos en los que he trabajado, cada uno reflejando mis habilidades, mi enfoque en <span className='text-highlightA'>crear soluciones funcionales y bien estructuradas,</span> y mi compromiso con las <span className='text-highlightB'>buenas prácticas</span> en el desarrollo.</p>
            <div className="proyects__row">
                <div className="proyects__info">
                    <h3 className="proyects__title">Proyect Title</h3>
                    <h4 className="proyects__subtitle">Subtitle</h4>
                    <p className='proyects__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo unde adipisci corporis officia laboriosam et debitis voluptates voluptate optio qui magnam odio voluptatem suscipit libero id, in vel soluta.</p>
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
                    <img src="" alt="Proyect Image" />
                </div>
            </div>
            <div className="proyects__row">
                <div className="proyects__info">
                    <h3 className="proyects__title">Proyect Title</h3>
                    <h4 className="proyects__subtitle">Subtitle</h4>
                    <p className='proyects__description'>Description</p>
                </div>
                <div className="proyects__image">
                    <img src="" alt="Proyect Image" />
                </div>
            </div>
            <div className="proyects__row">
                <div className="proyects__info">
                    <h3 className="proyects__title">Proyect Title</h3>
                    <h4 className="proyects__subtitle">Subtitle</h4>
                    <p className='proyects__description'>Description</p>
                </div>
                <div className="proyects__image">
                    <img src="" alt="Proyect Image" />
                </div>
            </div>
        </div>
    )
}

export default Proyects