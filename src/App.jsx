import { useRef } from 'react';
import { useWgrObserver, useSectionObserver } from './hooks';
import { Background, WebGuideRobot, MainInfo, Timeline, CallToAction, DataWidget } from './components';
import './App.css';

function App() {

    const initialLoad = useRef(true)

    const mainInfoRef = useRef()
    const timelineRef = useRef()
    const callToActionRef = useRef()
    const wgrRef = useRef()

    const sections = [mainInfoRef, timelineRef, callToActionRef]

    const predominantSection = useSectionObserver(sections, initialLoad)
    const location = useWgrObserver(predominantSection, wgrRef)

    return (
        <div className="App">
            <Background id="tsparticles" />
            <DataWidget />
            <MainInfo ref={mainInfoRef} />
            <Timeline ref={timelineRef} />
            <CallToAction ref={callToActionRef} />
            <WebGuideRobot location={location} ref={wgrRef} />
        </div>
    )
}

export default App
