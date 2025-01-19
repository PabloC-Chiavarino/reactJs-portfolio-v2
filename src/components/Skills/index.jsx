import { useRef } from 'react'
import { forwardRef } from 'react'
import { skillsData } from '../../config/skillsData'
import { prevNextArrow } from '../../assets/Icons'
import './styles.css'

const Skills = forwardRef((props, ref) => {

    const currentIndex = useRef(0);
    const circlesRef = useRef();

    const handleNext = () => {
        currentIndex.current = (currentIndex.current + 1) % skillsData.length;
        circlesRef.current.style.transform = `translateX(-${currentIndex.current * 100}%)`;
    }

    const handlePrev = () => {
        currentIndex.current = (currentIndex.current - 1 + skillsData.length) % skillsData.length;
        circlesRef.current.style.transform = `translateX(-${currentIndex.current * 100}%)`;
    }

    return (
        <div id='skills' className='skills__circles--container' ref={ref}>
            <h2>Skills</h2>
            <p>
                Estas son las <span className='text-highlightA'>tecnologías y herramientas</span> que utilizo para <span className='text-highlightB'>desarrollar, organizar y documentar</span> mis proyectos en el día a día.
            </p>
                
                <div className="skills__circles--subcontainer">
                    <div className="skills__circles--wrapper" ref={circlesRef}>
                        {skillsData.map(categoryData => (
                            <div key={categoryData.category} className={`skills__circles--${categoryData.category}`}>
                                <div className={`skills__circles--logos${categoryData.category}`}>
                                    <h3>{categoryData.category}</h3>
                                    {categoryData.items.map(item => (
                                        <img key={item.id} src={item.logo} alt={item.name} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="skills__circles--buttons">
                        <img src={prevNextArrow} onClick={handlePrev}/>
                        <img src={prevNextArrow} onClick={handleNext}/>
                    </div>
                </div>
        </div>
    )
})

export default Skills