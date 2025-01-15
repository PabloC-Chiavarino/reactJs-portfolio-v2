import './styles.css'
import { useState, useEffect, useRef } from 'react'
import { downBtn } from '../../assets/Icons'

const ResDownBtn = () => {

    const [toRight, setToRight] = useState(false)
    const downBtnRef = useRef()

    useEffect(() => {
        
        const element = downBtnRef.current

        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]
            
            if (entry.isIntersecting) {
                setToRight(true)
            }
            console.log("isIntersecting", entry.isIntersecting) //debugging
        }, {
            root: null,
            threshold: 0,
            rootMargin: "0px 0px -45% 0px"
        }
    )

        if (element) {
            observer.observe(element)
        }

        return () => observer.disconnect()

    }, [])

    return (
        <div 
            className="ResDownBtn__container" 
            ref={downBtnRef}
            style={{transform: toRight ? 'translateX(100%)' : 'translateX(0)'}}>
            <a 
                href='./Chiavarino CV.pdf'
                download='Chiavarino CV.pdf'
                className="ResDownBtn">
                <img 
                    className='ResDownBtn__img' 
                    src={downBtn} 
                    alt="Download"     
                />
            </a>
        </div>
    )
}

export default ResDownBtn