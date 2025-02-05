import { useRef, useEffect } from 'react'
import './styles.css'

const ClickRipple = ({ chatShowed }) => {
  const firstRippleRef = useRef(null)
  const secondRippleRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (chatShowed) {

    } else {
      intervalRef.current = setInterval(() => {
        const firstRipple = firstRippleRef.current
        const secondRipple = secondRippleRef.current

        if (firstRipple && secondRipple) {
          firstRipple.classList.add('ripple__first')
          secondRipple.classList.add('ripple__second')

          setTimeout(() => {
            firstRipple.classList.remove('ripple__first')
            secondRipple.classList.remove('ripple__second')
          }, 2500)
        }
      }, 5000)

      if (chatShowed) {
        clearInterval(intervalRef.current)
      }

      return () => clearInterval(intervalRef.current)
    }
  }, [chatShowed])

  return (
    <div className='clickRipple__container'>
      <div ref={firstRippleRef} />
      <div ref={secondRippleRef} />
    </div>
  )
}

export default ClickRipple
