import './styles.css'
import { useState, useEffect} from 'react'
import { useScrollDirection } from '../../hooks'
import { downBtn } from '../../assets/Icons'

const ResDownBtn = () => {

    const [toCorner, setToCorner] = useState(false)

    const scrollDirection = useScrollDirection()

    useEffect(() => {

        if (scrollDirection === 'down') {
            setToCorner(true)
        }    
    }, [scrollDirection, toCorner])

    return (
        <div className={toCorner ? 'ResDownBtn__container toCorner' : 'ResDownBtn__container'}>
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