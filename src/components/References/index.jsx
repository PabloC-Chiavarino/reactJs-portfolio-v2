import React from 'react'
import { references } from '../../config/referencesData'
import './styles.css'

const References = () => {

    return (
        <div className="references__container">
            <h2>Referencias</h2>
            <p>Aquí podrás ver algunas referencias de personas que <span className='text-highlightA'>confiaron en mi trabajo</span> y compartieron su <span className='text-highlightB'>experiencia de colaboración.</span></p>
            {references.map(reference => (
                <div className="references__row" key={reference.company}>
                    <h3 className='references__company'>{reference.company}</h3>
                    {reference.content.map((content, index) => (
                        <>
                            <h4 key={index} className='references__name'>{content.name}</h4>
                            <h5 key={index} className='references__position'>{content.position}</h5>
                            <p className='references__content'>{content.reference}</p>
                            <hr />
                        </>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default References