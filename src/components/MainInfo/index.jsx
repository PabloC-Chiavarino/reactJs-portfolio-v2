import React from 'react'
import { useLangContext } from '../../hooks'
import { mainInfoData } from '../../config/mainInfoData'
import './styles.css'

const MainInfo = React.forwardRef((props, ref) => {
  const { lang } = useLangContext()

  return (
    <section className='mainInfo' id='mainInfo' ref={ref}>

      <div className='mainInfo__title'>
        {mainInfoData[lang].title}
        {mainInfoData[lang].subtitle}
      </div>

      {mainInfoData[lang].greeting}

      <div className='mainInfo__info'>
        {mainInfoData[lang].description}
      </div>

    </section>
  )
})

export default MainInfo
