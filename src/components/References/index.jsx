import React from 'react'
import { references } from '../../config/referencesData'
import './styles.css'

const References = React.forwardRef((props, ref) => {

    return (
        <div id='references' className="references__container" ref={ref}>
            <h2>Referencias</h2>
            <p>Aquí podrás ver algunas referencias de personas que <span className='text-highlightA'>confiaron en mi trabajo</span> y compartieron su <span className='text-highlightB'>experiencia de colaboración.</span></p>
            {references.map(reference => (
                <div className="references__row" key={reference.company}>
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
        </div>
    )
})

export default References