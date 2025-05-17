import linkedin from '../../assets/Icons/linkedin.svg'
import github from '../../assets/Icons/github.svg'

import './styles.css'

const DataWidget = () => {
  return (
    <div className='dataWidget'>
      <div className='dataWidget__container'>
        <a className='dataWidget__button' href='https://github.com/PabloC-Chiavarino' target='_blank' rel='noreferrer'>
          <img src={github} alt='Github' />
        </a>
        <a className='dataWidget__button' href='https://linkedin.com/in/pabloc-chiavarino/' target='_blank' rel='noreferrer'>
          <img src={linkedin} alt='Linkedin' />
        </a>
      </div>
    </div>
  )
}

export default DataWidget
