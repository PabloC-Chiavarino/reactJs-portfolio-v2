import React, { useRef } from 'react'
import { useLangContext } from '../../hooks'
import { skillsData } from '../../config/skillsData'
import { prevNextArrow } from '../../assets/Icons'
import './styles.css'

const Skills = React.forwardRef((props, ref) => {
  const currentIndex = useRef(0)
  const circlesRef = useRef()

  const { lang } = useLangContext()

  const handleNext = () => {
    currentIndex.current = (currentIndex.current + 1) % skillsData.content.length
    circlesRef.current.style.transform = `translateX(-${currentIndex.current * 100}%)`
  }

  const handlePrev = () => {
    currentIndex.current = (currentIndex.current - 1 + skillsData.content.length) % skillsData.content.length
    circlesRef.current.style.transform = `translateX(-${currentIndex.current * 100}%)`
  }

  return (
    <div id='skills' className='skills__circles--container' ref={ref}>
      <h2>Skills</h2>
      {skillsData[lang].introduction}

      <div className='skills__circles--subcontainer'>
        <div className='skills__circles--wrapper' ref={circlesRef}>
          {skillsData.content.map(category => (
            <div key={category.category} className={`skills__circles--${category.category}`}>
              <div className={`skills__circles--logos${category.category}`}>
                <h3>{category.category}</h3>
                {category.items.map(item => (
                  <div data-name={item.name} key={item.id} className='skills__circles--logo'>
                    <img src={item.logo} alt={item.name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='skills__circles--buttons'>
          <img src={prevNextArrow} onClick={handlePrev} />
          <img src={prevNextArrow} onClick={handleNext} />
        </div>
      </div>
    </div>
  )
})

export default Skills
