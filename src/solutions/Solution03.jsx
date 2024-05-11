import { useState } from "react";

const rates = [
  { currency: "GBP", EUR: 1.16, USD: 1.25 },
  { currency: "EUR", GBP: 0.86, USD: 1.08 },
  { currency: "USD", EUR: 0.93, GBP: 0.8 },
];

const Solution03 = () => {
  const [currentCurrency, setCurrentCurrency] = useState("GBP");
  const [convertCurrency, setConvertCurrency] = useState("EUR");
  const [valueProvided, setValueProvided] = useState(0);
  const [result, setResult] = useState(0);

  const conversion = () => {
    const toConvertIn = rates.find((cur) => cur.currency === currentCurrency);
    const result = Number(valueProvided) * toConvertIn[convertCurrency];
    setResult(result);
    setValueProvided(0);
  };

  return (
    <main style={{ margin: "16px" }}>
      <section style={{ display: "flex", gap: "24px" }}>
        <article>
          <select
            name="currentCurrency"
            id="currentCurrency"
            value={currentCurrency}
            onChange={(e) => setCurrentCurrency(e.target.value)}
          >
            {rates.map((value) => (
              <option key={value.currency} value={value.currency}>
                {value.currency}
              </option>
            ))}
          </select>
          <input
            name="valueProvided"
            type="number"
            value={valueProvided}
            onChange={(e) => setValueProvided(e.target.value)}
          />
        </article>
        <article>
          <label>convert in</label>
          <select
            name="convertCurrency"
            id="convertCurrency"
            value={convertCurrency}
            onChange={(e) => setConvertCurrency(e.target.value)}
          >
            {rates
              .filter((value) => value.currency !== currentCurrency)
              .map((val) => (
                <option key={val.currency} value={val.currency}>
                  {val.currency}
                </option>
              ))}
          </select>
        </article>
        <article style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <button onClick={conversion}>Convert</button>
          <div>{result}</div>
        </article>
      </section>
    </main>
  );
};

export default Solution03;
