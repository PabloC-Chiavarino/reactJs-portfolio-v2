import React from 'react'
import { useLangContext } from '../../hooks'
import { referencesData } from '../../config/referencesData'
import './styles.css'

const References = React.forwardRef((props, ref) => {
  const { lang } = useLangContext()

  return (
    <section id='references' className='references__container' ref={ref}>
      <h2>{referencesData[lang].title}</h2>
      {referencesData[lang].introduction}

      {referencesData[lang].references.map(reference => (
        <div className='references__row' key={reference.company}>
          <h3 className='references__company'>{reference.company}</h3>
          {reference.content.map((content, index) => (
            <React.Fragment key={`${reference.company}-${index}`}>
              <h4 className='references__name'>{content.name}</h4>
              <h5 className='references__position'>{content.position}</h5>
              <p className='references__content'>{content.reference}</p>
              <hr />
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  )
})

export default References
