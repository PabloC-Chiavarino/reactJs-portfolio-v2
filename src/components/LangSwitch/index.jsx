import { globeLang, spainFlag, englishFlag } from '../../assets/Icons'
import './styles.css'

const LangSwitch = () => {
    return (
        <div className="langSwitch__container">
            <div className="langSwitch__option">
                <div className="langSwitch__globe--container">
                    <img className='langSwitch__globe' src={globeLang} alt="" />
                </div>
                <span className='langSwitch__current'>ES</span>
                <div className="langSwitch__dropDown">
                    <img className="langSwitch__lang" src={englishFlag}/>
                </div> 
            </div>
        </div>
    )
}

export default LangSwitch