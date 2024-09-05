import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import animationData from '../../assets/hiRobot.json';
import './styles.css';

const WebGuideRobot = React.forwardRef(({location}, ref) => {

    const { wgrLocation, scrollDirection } = location

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

        } else if (wgrLocation === 'mainInfo') {
            animationState = (scrollDirection === 'down')
                ? "wgrobot--goToTimeline"
                : "wgrobot--returnFromTimeline";
        }
        

    return (
        <div
            className={`wgrobot__container ${animationState}`}
            ref={ref}
        >
            <Lottie className="wgrobot" animationData={animationData} />
        </div>
    )
})

WebGuideRobot.propTypes = {
    location: PropTypes.object
}

export default WebGuideRobot