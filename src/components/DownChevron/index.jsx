import { useState, useEffect } from "react";
import { useScrollDirection } from "../../hooks";
import downChevron from "../../assets/Icons/down-chevron.png";
import './styles.css'

const DownChevron = () => {

    const [display, setDisplay] = useState(true)
    const scrollDirection = useScrollDirection()

    useEffect(() => {

        if (scrollDirection === 'down') {
            setDisplay(false)
        }
        
    }, [scrollDirection])

    return (
        <div 
            className={`downChevron__container ${display ? 'fadeIn' : 'fadeOut'}`}
            onAnimationEnd={(e) => {
                if (!display) {
                    e.target.classList.add('hidden');
                }
            }}
            >
            <img 
                className="downChevron"
                src={downChevron} 
                alt="downChevron" 
            />
        </div>
    )
}

export default DownChevron