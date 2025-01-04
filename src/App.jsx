import { useRef, useState } from 'react';
import { useWgrObserver, useSectionObserver, useScrollDirection } from './hooks';
import { Background, BackgroundOverlay, WebGuideRobot, MainInfo, Timeline, CallToAction, DataWidget } from './components';
import './App.css';

function App() {
    
    const [chatShow, setChatShow] = useState(false);
    const [chatShowed, setChatShowed] = useState(false);

    const initialLoad = useRef(true)

    const mainInfoRef = useRef()
    const timelineRef = useRef()
    const callToActionRef = useRef()
    const wgrRef = useRef()

    const sections = [mainInfoRef, timelineRef, callToActionRef]

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
            <BackgroundOverlay overlay={chatShow} />
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
        </div>
    )
}

export default App
