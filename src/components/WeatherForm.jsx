import { useState } from "react";
import css from '../css/WeatherForm.module.css'

function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    const data = e.target.value;

    if (data !== "") {
      setCity(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangeCity(city);
  };

  return (
    <form onSubmit={handleSubmit} className={css.container} > 
      <input type="text" onChange={handleChange} className={css.input} />
    </form>
  );
}

export default WeatherForm;
