import { useRef, useState } from 'react'
import { useSectionObserver } from './hooks'
import { Background, ResDownBtn, BackgroundOverlay, LangSwitch, WebGuideRobot, MainInfo, Timeline, CallToAction, DataWidget, Projects, Skills, References, Footer } from './components'
import './App.css'

function App () {
  const [chatShow, setChatShow] = useState(false)
  const [chatShowed, setChatShowed] = useState(false)

  const mainInfoRef = useRef()
  const timelineRef = useRef()
  const callToActionRef = useRef()
  const projectsRef = useRef()
  const skillsRef = useRef()
  const referencesRef = useRef()
  const wgrRef = useRef()

  const sections = [mainInfoRef, timelineRef, callToActionRef, projectsRef, skillsRef, referencesRef]

  const predominantSection = useSectionObserver(sections)

  const handleChatShow = () => {
    setChatShow(!chatShow)
    if (!chatShowed) setChatShowed(true)
  }

  return (
    <div className='App'>
      <Background id='tsparticles' />
      <ResDownBtn />
      <BackgroundOverlay overlay={chatShow} handleChatShow={handleChatShow} />
      <DataWidget />
      <WebGuideRobot
        predominantSection={predominantSection}
        ref={wgrRef}
        handleChatShow={handleChatShow}
        chatShow={chatShow}
        chatShowed={chatShowed}
      />
      <LangSwitch />
      <MainInfo ref={mainInfoRef} />
      <Timeline ref={timelineRef} />
      <CallToAction ref={callToActionRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <References ref={referencesRef} />
      <Footer />
    </div>
  )
}

export default App
