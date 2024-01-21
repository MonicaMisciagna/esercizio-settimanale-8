import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

export default function CarouselComponent({ city }) {
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const cardsPerSlide = 6;

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=e3f77f7f1f494cd3a8cbdac6c44e54ef`)
        .then(response => response.json())
        .then(data => setForecastData(data))
        .catch(error => console.error('Error in API call:', error))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, [city]);

  console.log(forecastData);

  return (
    <div>
      {isLoading ? (
       <Spinner animation="grow" variant="light" />
      ) : (
        forecastData ? (
          <Carousel controls={true} interval={null} indicators={false}>
            {[...Array(Math.ceil(forecastData.list.length / cardsPerSlide))].map((_, index) => (
              <Carousel.Item key={index}>
                <Row className='d-flex'>
                  {forecastData.list.slice(index * cardsPerSlide, (index + 1) * cardsPerSlide).map((forecast) => (
                    <Col key={forecast.dt} md={2}>
                      <Card className='cardcar'>
                        <Card.Body>
                          <p>{forecast.dt_txt}</p>
                          <p>{forecast.main.temp}°C</p>
                          <p>{forecast.main.feels_like}</p>
                          <div><img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="Weather Icon" /></div>
                          <p>{forecast.weather[0].description}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          null
        )
      )}
    </div>
  );
}
