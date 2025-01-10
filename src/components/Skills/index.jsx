import './styles.css'
import { skillsData } from '../../config/skillsData'

const Skills = () => {
    return (
        <div id='skills' className='skills__container'>
            <h2>Skills</h2>
            <p>Estas son las tecnologías y herramientas que utilizo en mis proyectos.</p>
            <div className="skills__grid--container">
                {
                    skillsData.map((item) => {
                        return (
                            <div key={item.id} className="skills__grid--item">
                                <h4 className='skills__grid--title'>
                                {item.name}
                                </h4>
                                <img className='skills__grid--icon' src={item.logo} alt="HTML" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills