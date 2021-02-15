import React from 'react';
import Gps from './../assets/img/gps.svg';
import Location from './../assets/img/location.svg';

export const WeatherDefault = (
    { 
        classHide, 
        handleButtonSearch, 
        weather,
        tempScaleDefault,
        getGeolocation
    }) => {

    console.log({weather});

    const { title, consolidated_weather } = weather;
    const todayWeather = consolidated_weather[0];
    const { the_temp , weather_state_name: name, applicable_date } = todayWeather;
    const nameImg = name.replace(' ', '');
    let tempFinal = '';
    let scaleLetter = '';

    const date = new Date(applicable_date).toUTCString().slice(0,11);

    const { scaleDefault } = tempScaleDefault;

    if(scaleDefault === 'C') {
        tempFinal = the_temp.toFixed(0);
        scaleLetter = '°C'
    } else {
        tempFinal = ((the_temp * 1.8) + 32).toFixed(0);
        scaleLetter = '°F'
    }

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
                <div 
                    className="weatherDefault__search-gps"
                    onClick={ getGeolocation }
                >
                    <img src={ Gps } alt="Gps"/>
                </div>
            </div>
            <div className="weatherDefault__weather-image">
                <img 
                    src={ require(`./../assets/img/${nameImg}.png`).default }
                    // src={ require(`./../assets/img/Clear.png`).default }
                    alt={nameImg}
                />
            </div>
            <div className="weatherDefault__temperature">
                <p>{ tempFinal }<span>{ scaleLetter }</span></p>
                {/* <p>15<span>°C</span></p> */}
                <div className="shower">
                    <span>{name}</span>
                    {/* <span>Clear</span> */}
                </div>
            </div>
            <div className="weatherDefault__day">
                <p>Today</p>
                <div className="punto"></div>
                <p>{date}</p>
                {/* <p>Wed, 11 Nov</p> */}
            </div>
            <div className="weatherDefault__location">
                <img src={ Location } alt="Location"/>
                <p>{title}</p>
                {/* <p>México</p> */}
            </div>
        </div>

    );

};
