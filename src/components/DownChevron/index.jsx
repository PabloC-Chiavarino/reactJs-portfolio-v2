import { useState, useEffect, useRef } from "react";
import downChevron from "../../assets/Icons/down-chevron.png";
import './styles.css'

const DownChevron = () => {

    const [display, setDisplay] = useState(true)
    const chevronRef = useRef()

    useEffect(() => {
        
        const element = chevronRef.current

        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]
            
            if (entry.isIntersecting) {
                setDisplay(false)
                observer.disconnect()
            } else {
                setDisplay(true)
            }
            //console.log("isIntersecting", entry.isIntersecting) //debugging
        }, {
            root: null,
            threshold: 0,
            rootMargin: "0px 0px -33% 0px"
        }
    )

        if (element) {
            observer.observe(element)
        }

        return () => observer.disconnect()

    }, [])

    if(!display) return null

    return (
        <div className={display ? "downChevron__container" : "downChevron__container chevron--hidden"}>
            <img 
                className="downChevron"
                src={downChevron} 
                alt="downChevron" 
                ref={chevronRef}
            />
        </div>
    )
}

export default DownChevron