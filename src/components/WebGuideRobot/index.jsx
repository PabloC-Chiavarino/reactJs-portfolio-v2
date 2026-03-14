import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import { useLangContext } from "../../hooks";
import { config, messageResponses } from "../../config/ChatBotCfg";
import { ClickRipple } from "../../components";
import Lottie from "lottie-react";
import robotAnimation from "../../assets/animations/hiRobot.json";
import blobAnimation from "../../assets/animations/blob.json";
import "./styles.css";

const WebGuideRobot = React.forwardRef(
  ({ predominantSection, handleChatShow, chatShow, chatShowed }, ref) => {
    const { lang } = useLangContext();

    const [scale, setScale] = useState(1);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState(config[lang].initialMessage);

    const [position, setPosition] = useState({
      x: window.innerWidth + 1000,
      y: 0,
    });

    const textareaRef = useRef(null);

    const initialPosition = useRef(null);

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    useLayoutEffect(() => {
      const calculatePosition = () => {
        const isDesktop = window.innerWidth >= 1024;

        if (!predominantSection || !ref.current) return;

        const robotHeight = ref.current.offsetHeight;
        const robotWidth = ref.current.offsetWidth;

        let x;
        let y;

        if (predominantSection === "mainInfo") {
          const targetElement = document.querySelector(".mainInfo__info");

          if (!targetElement) return;
          setScale(1);

          const rectTarget = targetElement.getBoundingClientRect();
          const freeSpaceRight = window.innerWidth - rectTarget.right;

          const baseX = isDesktop
            ? rectTarget.right + freeSpaceRight
            : rectTarget.right + freeSpaceRight * 0.5;

          const baseY = isDesktop
            ? rectTarget.top - robotHeight * 0.6
            : rectTarget.top - robotHeight * 1.2;

          const visibleRatio = isDesktop ? 0.9 : 0.7;

          const maxX = window.innerWidth - robotWidth * visibleRatio;

          const maxY = window.innerHeight - robotHeight * visibleRatio;
          const minY = isDesktop ? -robotHeight * 0.5 : 0;

          y = Math.max(minY, Math.min(baseY, maxY));
          x = Math.max(0, Math.min(baseX, maxX));

          if (!initialPosition.current) {
            initialPosition.current = { x, y };
          }

          setPosition(initialPosition.current);

          return;
        } else {
          setScale(0.8);

          const offSets = isDesktop
            ? { x: 0.715, y: 0.85 }
            : { x: 0.625, y: 0.95 };

          y = window.innerHeight - robotHeight * offSets.y;
          x = window.innerWidth - robotWidth * offSets.x;
        }

        setPosition({ x, y });
      };

      const handleResize = () => {
        initialPosition.current = null;
        calculatePosition();
      };

      calculatePosition();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [predominantSection]);

    const handleAnswer = (question) => {
      const lowerCaseQuestion = question.toLowerCase();

      let maxScore = 0;
      let bestMatchKey = null;

      Object.keys(messageResponses[lang]).forEach((key) => {
        const words = key.split(" ");

        const score = words.reduce((acc, word) => {
          return lowerCaseQuestion.includes(word) ? acc + 1 : acc;
        }, 0);

        if (score > maxScore) {
          maxScore = score;
          bestMatchKey = key;
        }
      });

      setAnswer(
        messageResponses[lang][bestMatchKey] || messageResponses[lang].default,
      );
    };

    const handleChange = (e) => {
      const el = textareaRef.current;
      setQuestion(e.target.value);

      el.style.height = "auto";

      if (el.scrollHeight > el.clientHeight) {
        el.style.height = el.scrollHeight + "px";
      }

      if (el.scrollHeight > 40) {
        el.classList.add("textarea--expanded");
      } else {
        el.classList.remove("textarea--expanded");
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAnswer(question);
        setQuestion("");
      }
    };

    useEffect(() => {
      setAnswer(config[lang].initialMessage);
    }, [lang]);

    return (
      <div
        className={`wgrobot__container`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
        ref={ref}
      >
        <Lottie
          className="wgrobot"
          onClick={handleChatShow}
          animationData={robotAnimation}
        />
        <ClickRipple chatShowed={chatShowed} />

        <div
          className={`chat__container ${chatShow ? "fadeIn" : "fadeOut"}`}
          onAnimationEnd={(e) => {
            if (!chatShow) {
              e.target.classList.add("hidden");
            }
          }}
        >
          <div className="chat__container--close" onClick={handleChatShow}>
            &times;
          </div>
          {answer && (
            <div className="answer__container">
              <Lottie className="answer__blob" animationData={blobAnimation} />
              <p className="answer__text">{answer}</p>
            </div>
          )}
          <div className="textarea__container">
            <textarea
              ref={textareaRef}
              className="textarea__input"
              rows="1"
              value={question}
              placeholder="Pregunta algo..."
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={() => {
                handleAnswer(question);
                setQuestion("");
              }}
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    );
  },
);

export default WebGuideRobot;
