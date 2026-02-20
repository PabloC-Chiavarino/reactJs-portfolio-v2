import './styles.css'
import { useLangContext } from '../../hooks'
import { downBtn } from '../../assets/Icons'

const ResDownBtn = () => {
  const { lang } = useLangContext()

  return (
    <div data-tooltip={lang === 'es' ? 'Descargar CV' : 'Donwload Res.'} className='ResDownBtn__container'>
      <a
        href='./Chiavarino CV.pdf'
        download='Chiavarino CV.pdf'
        className='ResDownBtn'
      >
        <img
          className='ResDownBtn__img'
          src={downBtn}
          alt='Download'
        />
      </a>
    </div>
  )
}

export default ResDownBtn
