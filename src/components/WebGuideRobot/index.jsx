import React, { useState, useEffect, useRef } from 'react'
import { useLangContext } from '../../hooks'
import { config, messageResponses } from '../../config/ChatBotCfg'
import { ClickRipple } from '../../components'
import Lottie from 'lottie-react'
import animationData from '../../assets/hiRobot.json'
import './styles.css'

const WebGuideRobot = React.forwardRef(({ predominantSection, handleChatShow, chatShow, chatShowed }, ref) => {
  const { lang } = useLangContext()

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(config[lang].initialMessage)
  
  const [position, setPosition] = useState({
    x: window.innerWidth + 1000,
    y: 0
  })

  const initialPosition = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const calculatePosition = () => {
      if (!predominantSection || !ref.current) return
      
      const robotHeight = ref.current.offsetHeight
      const robotWidth = ref.current.offsetWidth
      
      let x
      let y

      if (predominantSection === 'mainInfo') {
        const targetElement = document.querySelector('.mainInfo__info')
        
        if (!targetElement) return
        
        const rectTarget = targetElement.getBoundingClientRect()

        y = rectTarget.top - robotHeight / 1.5
        x = rectTarget.right
        
        if (!initialPosition.current) {
          initialPosition.current = { x, y }
        }

        setPosition(initialPosition.current)

        return

      } else {
        y = window.innerHeight / 2 - robotHeight / 2
        x = window.innerWidth - robotWidth + 100
      }
      
      setPosition({ x, y })
    }

    const handleResize = () => {
      initialPosition.current = null
      calculatePosition()
    }

    calculatePosition()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [predominantSection])

  const handleAnswer = (question) => {
    const lowerCaseQuestion = question.toLowerCase()

    let maxScore = 0
    let bestMatchKey = null

    Object.keys(messageResponses[lang]).forEach((key) => {
      const words = key.split(' ')

      const score = words.reduce((acc, word) => {
        return lowerCaseQuestion.includes(word)
          ? acc + 1
          : acc
      }, 0)

      if (score > maxScore) {
        maxScore = score
        bestMatchKey = key
      }
    })

    setAnswer(messageResponses[lang][bestMatchKey] || messageResponses[lang].default)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAnswer(question)
      e.target.innerText = ''
    }
  }

  useEffect(() => {
    setAnswer(config[lang].initialMessage)
  }, [lang])

  return (

    <div className={`wgrobot__container`} style={{ transform: `translate(${position.x}px, ${position.y}px)` }} ref={ref}>
      <Lottie className='wgrobot' onClick={handleChatShow} animationData={animationData} />
      <ClickRipple chatShowed={chatShowed} />

      <div
        className={`chat__container ${chatShow ? 'fadeIn' : 'fadeOut'}`}
        onAnimationEnd={(e) => {
          if (!chatShow) {
            e.target.classList.add('hidden')
          }
        }}
      >
        <div className='chat__container--close' onClick={handleChatShow}>
          &times;
        </div>
        {answer &&
          <div key={answer} className='answer__container'>
            <h4 className='answer__header'>Bottie: </h4>
            <p className='answer__text'>{answer}</p>
          </div>}
        <div className='textarea__container'>
          <div
            className='textarea__line'
            contentEditable
            rows='1'
            type='text'
            value={question}
            onInput={(e) => setQuestion(e.target.innerText)}
            onKeyDown={handleKeyDown}
            placeholder='Hazme una pregunta...'
          />
          <button
            onClick={(e) => {
              const contentDiv = e.target.previousElementSibling
              handleAnswer(question)
              contentDiv.innerText = ''
            }}
          >Preguntar
          </button>
        </div>
      </div>
    </div>
  )
})

export default WebGuideRobot
