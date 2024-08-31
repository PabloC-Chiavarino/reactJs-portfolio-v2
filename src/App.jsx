import { useRef } from 'react';
import { useWgrObserver, useSectionObserver } from './hooks';
import { Background, WebGuideRobot, MainInfo, Timeline } from './components';
import './App.css';

function App() {

    const initialLoad = useRef(true)

    const timelineRef = useRef()
    const mainInfoRef = useRef()
    const wgrRef = useRef()

    const predominantSection = useSectionObserver([mainInfoRef, timelineRef], initialLoad)
    const location = useWgrObserver(predominantSection, wgrRef)

    return (
        <div className="App">
            <Background id="tsparticles" />
            <MainInfo ref={mainInfoRef} />
            <Timeline ref={timelineRef} />
            <WebGuideRobot location={location} ref={wgrRef} />
        </div>
    )
}

export default App
