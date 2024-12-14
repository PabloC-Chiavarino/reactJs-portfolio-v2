import React, { useState } from "react";
import PropTypes from "prop-types";
import { config, messageResponses } from "../../config/ChatBotCfg";
import Lottie from "lottie-react";
import animationData from "../../assets/hiRobot.json";
import "./styles.css";

const WebGuideRobot = React.forwardRef(({ location }, ref) => {
   const [question, setQuestion] = useState("");
   const [answer, setAnswer] = useState(config.initialMessage);

   const { wgrLocation, scrollDirection, predominantSection } = location;

   console.log("wgrLocation:", wgrLocation);
   console.log("scrollDirection:", scrollDirection);

   let animationState = "wgrobot--initialPos";

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
         handleAnswer(question);
      }
   }


   if (wgrLocation === "cta") {
      animationState =
         scrollDirection === "down" ? "wgrobot--goToCTA" : "wgrobot--stayEnd";
   } else if (wgrLocation === "timeline") {
      animationState =
         scrollDirection === "down"
            ? "wgrobot--goToTimeline"
            : "wgrobot--returnFromCTA";
   } else if (wgrLocation === "mainInfo" && predominantSection === "mainInfo") {
      animationState =
         scrollDirection === "down"
            ? "wgrobot--goToTimeline"
            : "wgrobot--returnFromTimeline";
   }

   return (
      <div className={`wgrobot__container ${animationState}`} ref={ref}>
         <Lottie className="wgrobot" animationData={animationData} />

         <div className="chat__container" ref={ref}>
            <p>Respuesta: {answer}</p>

            <div className="input__container">
               <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
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