import { useRef, useEffect } from "react";
import { useLangContext } from "../../hooks";
import "./styles.css";

const ClickRipple = ({ chatShowed }) => {
  const { lang } = useLangContext();
  const firstRippleRef = useRef(null);
  const secondRippleRef = useRef(null);
  const askmeRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (chatShowed) {
      const askme = askmeRef.current;
      const firstRipple = firstRippleRef.current;
      const secondRipple = secondRippleRef.current;

      if (askme) askme.classList.remove("askme--visible");

      if (firstRipple) firstRipple.classList.remove("ripple__first");

      if (secondRipple) secondRipple.classList.remove("ripple__second");
    } else {
      intervalRef.current = setInterval(() => {
        const firstRipple = firstRippleRef.current;
        const secondRipple = secondRippleRef.current;
        const askme = askmeRef.current;

        if (firstRipple && secondRipple && askme) {
          firstRipple.classList.add("ripple__first");
          secondRipple.classList.add("ripple__second");
          askme.classList.add("askme--visible");

          setTimeout(() => {
            firstRipple.classList.remove("ripple__first");
            secondRipple.classList.remove("ripple__second");
          }, 2500);
        }
      }, 4000);

      return () => clearInterval(intervalRef.current);
    }
  }, [chatShowed]);

  return (
    <div className="clickRipple__container">
      <svg
        className="askme"
        viewBox="0 0 400 200"
        width="300"
        height="150"
        ref={askmeRef}
      >
        <defs>
          <path id="curve" d="M 50 150 Q 200 40 350 150" />
        </defs>
        <text fill="white" textAnchor="middle">
          <textPath xlinkHref="#curve" startOffset="50%">
            {lang === "en" ? "Ask Me" : "Pregúntame"}
          </textPath>
        </text>
      </svg>
      <div ref={firstRippleRef} />
      <div ref={secondRippleRef} />
    </div>
  );
};

export default ClickRipple;
