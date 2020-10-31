import "./App.css";
import theme from "./assets/theme.svg";

import React, { Fragment, useEffect, useState } from "react"; //hooks

import { CountdownCircleTimer } from "react-countdown-circle-timer";

function App(props) {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (time <= 0 || !start) return;

    const inter = setInterval(() => {
      setTime(Number(time - 1));
    }, 1000);

    return () => clearInterval(inter);
  }, [time, start]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTime(time * 60);
    setStart(true);
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime > 60) {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      return `${hours}:${minutes}:${seconds}`;
    } else if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  return (
    <div className="App">
      {start ? (
        <Fragment>
          <img src={theme} alt="theme" />
          <h2>{title}</h2>
          <h3>{details}</h3>
          <CountdownCircleTimer
            time={time}
            isPlaying
            duration={time}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>

          <h4>Starting soon...</h4>
        </Fragment>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button>Start</button>
        </form>
      )}
    </div>
  );
}

export default App;
