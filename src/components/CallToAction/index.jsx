import React from 'react'
import { useLangContext } from '../../hooks'
import { callToActionData } from '../../config/callToActionData'
import './styles.css'

const CallToAction = React.forwardRef((props, ref) => {
  const { lang } = useLangContext()

  return (
    <div id='cta' className='callToAction' ref={ref}>
      <h2>{callToActionData[lang].title}</h2>
      {callToActionData[lang].introduction}
      <br />
      <p>{callToActionData[lang].content}</p>
      <div className='callToAction__options'>
        <a
          className='callToAction__button'
          href='mailto=pchiavarino89@gmail.com'
          target='_blank'
          onClick={(e) => {
            e.preventDefault()
            window.open('mailto:pchiavarino89@gmail.com', '_blank')
          }}
        >
          Email
        </a>
        <a className='callToAction__button' href='https://wa.me/5492216545052' target='_blank' rel='noreferrer'>
          Whatsapp
        </a>
      </div>
    </div>
  )
})

export default CallToAction
