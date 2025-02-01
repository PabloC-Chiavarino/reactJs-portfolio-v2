import React from 'react'
import { mainInfoData } from '../../config/mainInfoData'
import './styles.css'

const MainInfo = React.forwardRef((props, ref) => {
    
    return (
        <section className="mainInfo" id="mainInfo" ref={ref}>
            <div className="mainInfo__title">
                {mainInfoData.es.title} 
                {mainInfoData.es.subtitle}
            </div>
            {mainInfoData.es.greeting}
            <div className="mainInfo__info">
                {mainInfoData.es.description}
            </div>
        </section>           
    )
})

export default MainInfo