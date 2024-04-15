// WeatherPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import './WeatherPage.css';

const WeatherPage = () => {
  const { cityId } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=YOUR_API_KEY&units=metric`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, [cityId]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="WeatherPage">
      <h1>Weather for {weatherData.name}</h1>
      <div>Temperature: {weatherData.main.temp}°C</div>
      <div>Weather: {weatherData.weather[0].description}</div>
      <div>Humidity: {weatherData.main.humidity}%</div>
      <div>Wind Speed: {weatherData.wind.speed} m/s</div>
      <div>Pressure: {weatherData.main.pressure} hPa</div>
    </div>
  );
};

export default WeatherPage;
