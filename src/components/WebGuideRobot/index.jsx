import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import animationData from '../../assets/hiRobot.json';
import './styles.css';

const WebGuideRobot = React.forwardRef(({location}, ref) => {

    console.log("Wgr location:", location)

    return (
        <div
            className={`wgrobot__container 
                ${location === 'timeline' ? "wgrobot--goToTimeline" : ''}
                ${location === 'mainInfo' ? "wgrobot--returnFromTimeline" : ''}
            `}
            ref={ref}
        >
            <Lottie className="wgrobot" animationData={animationData} />
        </div>
    )
})

WebGuideRobot.propTypes = {
    location: PropTypes.string
}

export default WebGuideRobot;