import React from "react";

export default function WeatherDay (props){
function maxTemperature(){
  let temperature = Math.round(props.data.temp.max);
  return `${temperature}°`;
}

function minTemperature(){
  let temperature = Math.round (props.data.temp.min);
  return `${temperature}°`;
}

function weatherIcon(){
  let iconURL = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  return `${iconURL}`;
  
}

function day (){
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  return days[day];
}

  return (
  <div className="card-body">
    <h5>{day()}</h5>
    <p className="card-text weather-emoji"> <img src={weatherIcon()} alt="rain" /> </p>
    <p className="card-text">{maxTemperature()}</p>
    <p className="card-text">{minTemperature()}</p>
  </div>)
}