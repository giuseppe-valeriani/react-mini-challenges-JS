import { useState, useEffect } from "react";

const Solution05 = () => {
  const [timer, setTimer] = useState(0);
  const [started, setStarted] = useState(false);

  const startStop = () => {
    setStarted(!started);
  };

  const reset = () => {
    setStarted(false);
    setTimer(0);
  };

  const hours = Math.floor(timer / 360000);

  const minutes = Math.floor((timer % 360000) / 6000);

  const seconds = Math.floor((timer % 6000) / 100);

  const milliseconds = timer % 100;

  useEffect(() => {
    let time;
    if (started) {
      time = setInterval(() => setTimer(timer + 1), 10);
    }
    return () => clearInterval(time);
  }, [timer, started]);

  return (
    <main
      style={{
        margin: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          border: "1px solid black",
          padding: "8px",
          width: "150px",
        }}
      >
        <span>{hours}</span>
        <span>{minutes.toString().padStart(2, "0")}</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
        <span>{milliseconds.toString().padStart(2, "0")}</span>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          width: "150px",
        }}
      >
        <button style={{ padding: "4px" }} onClick={startStop}>
          {started ? "stop" : "start"}
        </button>
        <button style={{ padding: "4px" }} onClick={reset}>
          reset
        </button>
      </section>
    </main>
  );
};

export default Solution05;
