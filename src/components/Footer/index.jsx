import './styles.css'

const Footer = () => {
    return (
        <div className="footer__container">
             <hr className="footer__line" />
             <div className="footer__subcontainer">
                <p className="footer__text">Diseño y desarrollo por <span className="text-highlightB">Pdev <span className='footer__text--emoji'>🚀</span></span></p>
             </div>
        </div>
    )
}

export default Footer