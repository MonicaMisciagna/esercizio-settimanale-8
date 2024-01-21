import React, { useState, useEffect } from 'react';
import CarouselPrev from './CarouselPrev';
import { Spinner } from 'react-bootstrap';

const CardResults = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=e3f77f7f1f494cd3a8cbdac6c44e54ef`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
        })
        .catch(error => console.error('Errore nella chiamata API:', error))
        .finally(() => setIsLoading(false));

      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=e3f77f7f1f494cd3a8cbdac6c44e54ef`)
        .then(response => response.json())
        .then(data => {
          setGeoData(data);
        })
        .catch(error => console.error('Errore nella chiamata API:', error))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, [city]);

  return (
    <>
      <div className='text-white testo my-4 py-4 cardin'>
        {isLoading ? (
          <Spinner animation="grow" variant="light" />
        ) : (
          <>
            {weatherData && (
              <div>
                <div><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" /></div>
                <p>Temperatura: {weatherData.main.temp}°C</p>
                <p>Tempo: {weatherData.weather[0].description}</p>
              </div>
            )}
            {geoData && (
              <div>
                <p>Latitudine: {geoData[0].lat}</p>
                <p>Longitudine: {geoData[0].lon}</p>
              </div>
            )}
          </>
        )}
      </div>
      <CarouselPrev city={city} />
    </>
  );
};

export default CardResults;
