import './styles.css'

const CallToAction = () => {
    return (
        <div className="callToAction">
            <h2>¿Tienes un proyecto en mente?</h2>
            <p>
                Estoy listo para <span className='text-highlightA'>llevar tu proyecto al siguiente nivel.</span> Ya sea que tengas una idea en mente o necesites discutir oportunidades de colaboración, me pondré a trabajar para <span className='text-highlightB'>ofrecerte la mejor solución.</span>
            </p>
                <br/>
                <p> Elige una opción de contacto que prefieras y te responderé a la brevedad posible para comenzar a trabajar juntos.    
            </p>
            <div className="callToAction__options">
                <button className="callToAction__button">
                        Email
                </button>
                <a className="callToAction__button" href="https://wa.me/5492216545052" target="_blank">
                        Whatsapp
                </a>
            </div>
        </div>
    )
}

export default CallToAction