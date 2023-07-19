import React, { FC } from "react";
import Wish from "./Wish";

interface CountdownProps {
  countdownData: any;
  name: string;
}

const Countdown: FC<CountdownProps> = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <h1 className="heading">Countdown para romper la distancia</h1>
        <div className="countdown-wrapper">
          <div className="countdown-box">
            {countdownData.days}
            <span className="legend">Days</span>
          </div>
          <div className="countdown-box">
            {countdownData.hours}
            <span className="legend">Hours</span>
          </div>
          <div className="countdown-box">
            {countdownData.minutes}
            <span className="legend">Minutes</span>
          </div>
          <div className="countdown-box">
            {countdownData.seconds}
            <span className="legend">Seconds</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
