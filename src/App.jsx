import { useRef, useState } from 'react';
import { useWgrObserver, useSectionObserver, useScrollDirection } from './hooks';
import { Background, ResDownBtn, BackgroundOverlay, WebGuideRobot, MainInfo, Timeline, CallToAction, DataWidget, Projects, Skills, References } from './components';
import './App.css';

function App() {
    
    const [chatShow, setChatShow] = useState(false);
    const [chatShowed, setChatShowed] = useState(false);

    const initialLoad = useRef(true)

    const mainInfoRef = useRef()
    const timelineRef = useRef()
    const callToActionRef = useRef()
    const projectsRef = useRef()
    const skillsRef = useRef()
    const referencesRef = useRef()
    const wgrRef = useRef()

    const sections = [ mainInfoRef, timelineRef, callToActionRef, projectsRef, skillsRef ]

    const predominantSection = useSectionObserver(sections, initialLoad)
    const scrollDirection = useScrollDirection()
    const location = useWgrObserver(predominantSection, scrollDirection, wgrRef)

    const handleChatShow = () => {
        setChatShow(!chatShow);
        if (!chatShowed) setChatShowed(true);
     }

    return (
        <div className="App">
            <Background id="tsparticles" />
            <ResDownBtn />
            <BackgroundOverlay overlay={chatShow} handleChatShow={handleChatShow} />
            <DataWidget />
            <WebGuideRobot
                location={location}
                ref={wgrRef}
                handleChatShow={handleChatShow}
                chatShow={chatShow}
                chatShowed={chatShowed}
            />
            <MainInfo ref={mainInfoRef} />
            <Timeline ref={timelineRef} />
            <CallToAction ref={callToActionRef} />
            <Projects ref={projectsRef} />
            <Skills ref={skillsRef} />
            <References ref={referencesRef} />
        </div>
    )
}

export default App