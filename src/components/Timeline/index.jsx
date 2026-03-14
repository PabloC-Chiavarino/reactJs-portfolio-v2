import React from "react";
import { useLangContext } from "../../hooks";
import { timelineData } from "../../config/timelineData";
import "./styles.css";

const Timeline = React.forwardRef((props, ref) => {
  const { lang } = useLangContext();

  return (
    <section id="timeline" className="timeline" ref={ref}>
      <h2>{timelineData[lang].title}</h2>
      <div className="timeline__container">
        <div className="timeline__dot" />
        {timelineData[lang].content.map((item, index) => (
          <div key={index} className="timeline__item">
            <h3>{item.date}</h3>
            <div className="timeline__item--header">
              <h4>{item.company}</h4>-
              <h4 className="text-highlightB">{item.type}</h4>
            </div>
            <div className="timeline__description">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Timeline;
