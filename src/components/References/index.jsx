import React from 'react'
import { references } from '../../config/referencesData'
import './styles.css'

const References = () => {

    return (
        <div className="references__container">
            <h2>Referencias</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius quis ad, harum quibusdam sequi accusantium saepe tempora id velit ullam soluta deleniti voluptatum aliquid ipsa porro natus cum at?</p>
            {references.map(reference => (
                <div className="references__row">
                    <h3 className='references__company'>{reference.company}</h3>
                    <h4 className='references__position'>{reference.position}</h4>
                    <p className='references__content'>{reference.content}</p>
                </div>
            ))}
        </div>
    )
}

export default References