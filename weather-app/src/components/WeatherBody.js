import React from 'react';
import { Navbar } from './Navbar';
import { WeatherDefault } from './WeatherDefault';
import { WeatherInfo } from './WeatherInfo/WeatherInfo';

export const WeatherBody = (
    { 
        classHide, 
        handleButtonSearch, 
        classNavbar, 
        handleButtonClear,
        weather
    }) => {

    return (

        <div className="weather__container">
            <div className="weather__default-navbar">
                <WeatherDefault
                    classHide={ classHide } 
                    handleButtonSearch={ handleButtonSearch }
                    weather={weather}
                /> 
                <Navbar 
                    classNavbar={ classNavbar } 
                    handleButtonClear={ handleButtonClear }
                />
            </div>
            <div className="weather__info">
                <WeatherInfo  
                    classHide={ classHide }
                    weather={weather}
                />
            </div>
        </div>

    );
};
