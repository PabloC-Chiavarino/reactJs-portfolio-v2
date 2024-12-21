import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { config, messageResponses } from "../../config/ChatBotCfg";
import Lottie from "lottie-react";
import animationData from "../../assets/hiRobot.json";
import "./styles.css";

const WebGuideRobot = React.forwardRef(({ location }, ref) => {
   const [question, setQuestion] = useState("");
   const [answer, setAnswer] = useState(config.initialMessage);
   const [animationState, setAnimationState] = useState("wgrobot--initialPos");

   const { wgrLocation, scrollDirection, predominantSection } = location;

   console.log("wgrLocation:", wgrLocation);
   console.log("scrollDirection:", scrollDirection);
   console.log(predominantSection);
   console.log(animationState);


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
         <Lottie className="wgrobot" animationData={animationData} />

         <div className="chat__container" ref={ref}>
            
            {answer && 
               <div className="answer__container">
                  <h4 style={{ fontSize: "1rem", fontWeight: "600", paddingLeft: "3.25rem", margin: "0", letterSpacing: ".5px", marginTop: "1rem"}}>Bottie: </h4>
                  <p style={{ maxHeight: "200px", fontSize: ".9rem", fontWeight: "400", paddingLeft: "3.25rem", marginTop: ".5rem", letterSpacing: ".35px", overflowY: "scroll"}}>{answer}</p>
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
                  onClick={() => {
                     handleAnswer(question);
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