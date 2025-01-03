import { useRef } from 'react';
import { useWgrObserver, useSectionObserver, useScrollDirection } from './hooks';
import { Background, BackgroundOverlay, WebGuideRobot, MainInfo, Timeline, CallToAction, DataWidget } from './components';
import './App.css';

function App() {

    const initialLoad = useRef(true)

    const mainInfoRef = useRef()
    const timelineRef = useRef()
    const callToActionRef = useRef()
    const wgrRef = useRef()

    const sections = [mainInfoRef, timelineRef, callToActionRef]

    const predominantSection = useSectionObserver(sections, initialLoad)
    const scrollDirection = useScrollDirection()
    const location = useWgrObserver(predominantSection, scrollDirection, wgrRef)

    return (
        <div className="App">
            <Background id="tsparticles" />
            <BackgroundOverlay />
            <DataWidget />
            <WebGuideRobot location={location} ref={wgrRef} />
            <MainInfo ref={mainInfoRef} />
            <Timeline ref={timelineRef} />
            <CallToAction ref={callToActionRef} />
        </div>
    )
}

export default App
