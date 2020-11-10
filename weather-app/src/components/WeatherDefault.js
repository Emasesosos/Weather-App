import React from 'react';
import Gps from './../assets/img/gps.svg';
import Location from './../assets/img/location.svg';

export const WeatherDefault = (
    { 
        classHide, 
        handleButtonSearch, 
        weather 
    }) => {

    const { title, consolidated_weather } = weather;
    const todayWeather = consolidated_weather[0];
    console.log({todayWeather});
    const { the_temp: temp, weather_state_name: name, applicable_date } = todayWeather;
    const nameImg = name.replace(' ', '');
    const tempF = temp.toFixed(0);

    const date = new Date(applicable_date).toUTCString().slice(0,11);

    return (

        <div className={` weatherDefault__container ${classHide}`}>
            <div className="weatherDefault__cloud-back"></div>
            <div className="weatherDefault__search-location">
                <button 
                    className="weatherDefault__search-places"
                    onClick={ handleButtonSearch }
                >
                    <p>Search for places</p>
                </button>
                <div className="weatherDefault__search-gps"
                    // onClick={ getGeolocation }
                >
                    <img src={ Gps } alt="Gps"/>
                </div>
            </div>
            <div className="weatherDefault__weather-image">
                <img 
                    src={ require(`./../assets/img/${nameImg}.png`).default }
                    alt={nameImg}
                />
            </div>
            <div className="weatherDefault__temperature">
                <p>{tempF}<span>°C</span></p>
                <div className="shower">
                    <span>{name}</span>
                </div>
            </div>
            <div className="weatherDefault__day">
                <p>Today</p>
                <div className="punto"></div>
                <p>{date}</p>
            </div>
            <div className="weatherDefault__location">
                <img src={ Location } alt="Location"/>
                <p>{title}</p>
            </div>
        </div>

    );

};
