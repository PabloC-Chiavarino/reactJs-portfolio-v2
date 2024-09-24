import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import animationData from '../../assets/hiRobot.json';
import './styles.css';

const WebGuideRobot = React.forwardRef(({location}, ref) => {
   
    const { wgrLocation, scrollDirection, predominantSection } = location

    console.log("wgrLocation:", wgrLocation)
    console.log("scrollDirection:", scrollDirection)

        let animationState = "wgrobot--initialPos"
            
        if (wgrLocation === 'cta') {
            animationState = (scrollDirection === 'down') 
                ? "wgrobot--goToCTA" 
                : "wgrobot--stayEnd";

        } else if (wgrLocation === 'timeline') {
            animationState = (scrollDirection === 'down') 
                ? "wgrobot--goToTimeline" 
                : "wgrobot--returnFromCTA";

        } else if (wgrLocation === 'mainInfo' && predominantSection === 'mainInfo') {
            animationState = (scrollDirection === 'down')
                ? "wgrobot--goToTimeline"
                : "wgrobot--returnFromTimeline";
        }
        

    return (
        <>
            <div
                className={`wgrobot__container ${animationState}`}
                ref={ref}
            >
                <Lottie className="wgrobot" animationData={animationData} />

            </div>
            <div 
                className="chat__container"
                ref={ref}
                >
                <p>Respuesta: {'answer'}</p>
                <input
                    type="text"
                    value={'question'}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Hazme una pregunta..."
                    />
                <button>Preguntar</button>
            </div>
        </>
    )
})

WebGuideRobot.propTypes = {
    location: PropTypes.object
}

export default WebGuideRobot