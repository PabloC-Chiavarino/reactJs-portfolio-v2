import { useLangContext } from '../../hooks'
import { globeLang, spainFlag, englishFlag } from '../../assets/Icons'
import './styles.css'

const LangSwitch = () => {

    const { lang, handleLangChange } = useLangContext()

    return (
        <div className="langSwitch__container">
            <div className="langSwitch__option">
                <div className="langSwitch__globe--container">
                    <img className='langSwitch__globe' src={globeLang} alt="" />
                </div>
                <span className='langSwitch__current'>{lang.toUpperCase()}</span>
                <div className="langSwitch__dropDown">
                    <img 
                        className="langSwitch__lang" 
                        src={ lang === 'es' ? englishFlag : spainFlag } 
                        alt=""
                        onClick={handleLangChange}
                    />
                </div> 
            </div>
        </div>
    )
}

export default LangSwitch