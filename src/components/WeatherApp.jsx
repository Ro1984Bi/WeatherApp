import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import css from '../css/WeatherApp.module.css'
import Loading from "./Loading";

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  
  

  useEffect(() => {
    document.title =  `Weather | ${weather?.location.name ?? ""} `
  }, [weather])
  const loadInfo = async (city) => {
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=154b8202cf014e679e8142707223112&q=${city}`
      );

      const json = await request.json()
      setWeather(json)
      console.log(json)
    } catch (error) {
      console.error(error)
    }
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city)
  };

  return (
    <div className={css.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {
        weather ? <WeatherMainInfo weather={weather} /> : <Loading /> 
      }
   
    </div>
  );
}

export default WeatherApp;
