import { useState } from "react";

const Solution01 = () => {
  const [number, setNumber] = useState(0);

  const subtract = () => {
    setNumber((prev) => prev - 1);
  };

  const add = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <main
      style={{
        display: "flex",
        gap: "24px",
        margin: "16px",
        alignItems: "center",
      }}
    >
      <button onClick={subtract} style={{ padding: "8px" }}>
        -
      </button>
      <div style={{ fontSize: "24px" }}>{number}</div>
      <button onClick={add} style={{ padding: "8px" }}>
        +
      </button>
    </main>
  );
};

export default Solution01;
