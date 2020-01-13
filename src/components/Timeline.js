import React from "react";
import TimelineItem from "./TimelineItem";
import timelineData from "./../data";
const Timeline = () => {
  return (
    timelineData.length > 0 && (
      <div className="timeline-container">
        {timelineData.map((data, index) => (
          <TimelineItem data={data} key={index} />
        ))}
      </div>
    )
  );
};

export default Timeline;
