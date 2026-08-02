import { useLangContext } from '../../hooks'
import './styles.css'

const Footer = () => {
  const { lang } = useLangContext()

  return (
    <section className='footer__container'>
      <hr className='footer__line' />
      <div className='footer__subcontainer'>
        <p className='footer__text'>
          {lang === 'es' ? 'Gracias por visitar ' : 'Thanks for visiting '}
          <span className='footer__text--emoji'>🚀</span>
        </p>
      </div>
    </section>
  )
}

export default Footer
