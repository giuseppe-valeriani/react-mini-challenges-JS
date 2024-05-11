import { useState, useEffect } from "react";

const KEY = import.meta.env.VITE_WEATHER_KEY;

const Solution04 = () => {
  const [city, setCity] = useState("London");
  const [requestedCity, setRequestedCity] = useState("");
  const [lat, setLat] = useState(51.5073);
  const [lon, setLon] = useState(-0.1276);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const fetched = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&appid=${KEY}`
      );
      const data = await fetched.json();
      setWeather(data);
    };

    getData();
  }, [lat, lon]);

  useEffect(() => {
    const getPlace = async () => {
      const fetched = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${KEY}`
      );
      const data = await fetched.json();
      setLat(data[0].lat);
      setLon(data[0].lon);
    };

    getPlace();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(requestedCity);
    setRequestedCity("");
  };

  if (!weather) {
    return <main style={{ margin: "16px" }}>Loading</main>;
  }

  return (
    <main
      style={{
        margin: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <section>
        <h1>This is the current Weather in {weather.timezone}:</h1>
        <article>
          <h2 style={{ textTransform: "capitalize" }}>
            {weather.current.weather[0].description}
          </h2>
          <p>Humidity: {weather.current.humidity}</p>
          <p>Pressure: {weather.current.pressure}</p>
          <p>Temperature: {weather.current.temp}</p>
        </article>
      </section>
      <section>
        <h2>Which city would you like to check?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={requestedCity}
            onChange={(e) => setRequestedCity(e.target.value)}
          />
          <button>Check</button>
        </form>
      </section>
    </main>
  );
};

export default Solution04;
