import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ClickRipple } from "../../components";
import { config, messageResponses } from "../../config/ChatBotCfg";
import Lottie from "lottie-react";
import animationData from "../../assets/hiRobot.json";
import "./styles.css";

const WebGuideRobot = React.forwardRef(({ location, handleChatShow, chatShow, chatShowed }, ref) => {
   const [question, setQuestion] = useState("");
   const [answer, setAnswer] = useState(config.initialMessage);
   const [animationState, setAnimationState] = useState("wgrobot--initialPos");

   const { wgrLocation, scrollDirection, predominantSection } = location;

   //console.log("wgrLocation:", wgrLocation); //debugging
   //console.log("scrollDirection:", scrollDirection); //debugging
   //console.log(predominantSection); //debugging
   //console.log(animationState); //debugging

   const handleAnswer = (question) => {
      
      const lowerCaseQuestion = question.toLowerCase();
      
      let maxScore = 0;
      let bestMatchKey = null;
      
      Object.keys(messageResponses).forEach((key) => {
         
         let words = key.split(" ");
         
         let score = words.reduce((acc, word) => {

               return lowerCaseQuestion.includes(word)
                  ? acc + 1
                  : acc;
            },0)

         if (score > maxScore) {
            maxScore = score;
            bestMatchKey = key;
         }
      })

      setAnswer(messageResponses[bestMatchKey] || messageResponses.default);

   };

   const handleKeyDown = (e) => {
      if (e.key === "Enter") {
         e.preventDefault();
         handleAnswer(question);
         e.target.innerText = "";
      }
   }

   useEffect(() => {
      
      if (wgrLocation === 'mainInfo' && predominantSection === 'timeline') {
         setAnimationState(
            scrollDirection === 'down'
            ? 'wgrobot--goToTimeline'
            : 'wgrobot--initialPos')
            
      } else if (wgrLocation === 'timeline' && predominantSection === 'cta') {
         setAnimationState(
            scrollDirection === 'down'
            ? 'wgrobot--goToCTA'
            : null
         )
            
      } else if (wgrLocation === 'timeline' && predominantSection === 'mainInfo') {
         setAnimationState (
            scrollDirection === 'down'
            ? null
            : 'wgrobot--returnFromTimeline'
         )
            
      } else if (wgrLocation === 'cta' && predominantSection === 'timeline') {
         setAnimationState (
            scrollDirection === 'down'
            ? 'wgrobot--stayEnd'
            : 'wgrobot--returnFromCTA'
         )
      }
      
   }, [predominantSection, wgrLocation, scrollDirection])


   return (

      <div className={`wgrobot__container ${animationState}`} ref={ref}>
         <Lottie className="wgrobot" onClick={handleChatShow} animationData={animationData} />
         <ClickRipple chatShowed={chatShowed}/>

         <div 
            ref={ref}
            className={`chat__container ${chatShow ? "fadeIn" : "fadeOut"}`}
            onAnimationEnd={(e) => {
               if (!chatShow) {
                  e.target.classList.add('hidden');
               }
            }}
         >
            <div className="chat__container--close" onClick={handleChatShow}>
               &times;   
            </div>            
            {answer && 
               <div key={answer} className="answer__container">
                  <h4 className="answer__header">Bottie: </h4>
                  <p className="answer__text">{answer}</p>
               </div>
            }
            <div className="textarea__container">  
               <div className="textarea__line"
                  contentEditable = {true}
                  rows= "1"
                  type="text"
                  value={question}
                  onInput={(e) => setQuestion(e.target.innerText)}
                  onKeyDown={handleKeyDown}
                  placeholder="Hazme una pregunta..."
               />
               <button
                  onClick={(e) => {
                     const contentDiv = e.target.previousElementSibling;
                     handleAnswer(question);
                     contentDiv.innerText = "";
                  }}
               >Preguntar</button>
            </div>
         </div>
      </div>
   );
});

WebGuideRobot.propTypes = {
   location: PropTypes.object,
};

export default WebGuideRobot;