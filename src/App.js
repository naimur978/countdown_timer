import "./App.css";
import theme from "./assets/theme.svg";

import React, { Fragment, useEffect, useState } from "react"; //hooks

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

  return (
    <div className="App">
      {start ? (
        <Fragment>
          <img src={theme} alt="theme" />
          <h2>{title}</h2>
          <h3>{details}</h3>
          <h1>
            {Math.floor(time / 60) < 10
              ? `0${Math.floor(time / 60)}`
              : Math.floor(time % 60)}
            :
            {Math.floor(time % 60) < 10
              ? `0${Math.floor(time % 60)}`
              : Math.floor(time % 60)}
          </h1>
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
