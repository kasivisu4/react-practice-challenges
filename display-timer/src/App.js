import React, { useState, useEffect } from "react";

let interval;

function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    if (timerStarted) {
      interval = setInterval(() => {
        setTotalSeconds((totalSeconds) => totalSeconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }

    // else {
    //   clearInterval(interval);
    // }

    // counter += 1;
  }, [timerStarted]);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        {hours}:{minutes}:{seconds}
      </div>
      <div>
        <button onClick={() => setTimerStarted((prev) => !prev)}>
          {timerStarted ? "Pause" : totalSeconds === 0 ? "Start" : "Resume"}
        </button>

        <button
          onClick={() => {
            setTotalSeconds(0);
            setTimerStarted(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
