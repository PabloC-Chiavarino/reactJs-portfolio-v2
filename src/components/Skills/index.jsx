import './styles.css'
import { skillsData } from '../../config/skillsData'
import { forwardRef } from 'react'

const Skills = forwardRef((props, ref) => {
    return (
        <div id='skills' className='skills__circles--container' ref={ref}>
            <h2>Skills</h2>
            <p>
                Estas son las tecnologías y herramientas que utilizo para desarrollar mis proyectos, organizarlos y documentarlos en el día a día.
            </p>

                <div className="skills__circles--subcontainer">
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
        </div>
    )
})

export default Skills