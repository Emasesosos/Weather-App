import React, { useEffect, useMemo, useState } from 'react';
import Gps from './../assets/img/gps.svg';
import Location from './../assets/img/location.svg';

export const WeatherDefault = (
    { 
        classHide, 
        handleButtonSearch, 
        weather 
    }) => {

    const [date, setDate] = useState('');

    const { title, consolidated_weather } = weather;
    const todayWeather = consolidated_weather[0];
    const { the_temp: temp, weather_state_name: name, applicable_date } = todayWeather;
    const nameImg = name.replace(' ', '');
    const tempF = temp.toFixed(0);

    const event = useMemo(() => new Date(applicable_date), [applicable_date]);

    useEffect(() => {
        setDate(
            event.toLocaleDateString('en-US', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            }),
          );
    }, [event]);

    // const getGeolocation = () => {
    //     console.log('getGeolocation');
    // };

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
