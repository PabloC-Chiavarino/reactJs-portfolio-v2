import { useState, useEffect } from 'react'
import downChevron from '../../assets/Icons/down-chevron.png'
import './styles.css'

const DownChevron = () => {
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setDisplay(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`downChevron__container ${display ? 'fadeIn' : 'fadeOut'}`}
      onAnimationEnd={(e) => {
        if (!display) {
          e.target.classList.add('hidden')
        }
      }}
    >
      <img
        className='downChevron'
        src={downChevron}
        alt='downChevron'
      />
    </div>
  )
}

export default DownChevron
