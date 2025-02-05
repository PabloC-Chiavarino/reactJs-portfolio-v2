import { useLangContext } from '../../hooks'
import './styles.css'

const Footer = () => {
  const { lang } = useLangContext()

  return (
    <div className='footer__container'>
      <hr className='footer__line' />
      <div className='footer__subcontainer'>
        <p className='footer__text'>{lang === 'es' ? 'Creado por ' : 'Crafted by '}<span className='text-highlightB'>pdev <span className='footer__text--emoji'>🚀</span></span></p>
      </div>
    </div>
  )
}

export default Footer
