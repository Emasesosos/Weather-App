import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { WeatherDefault } from './WeatherDefault';
import { WeatherInfo } from './WeatherInfo/WeatherInfo';

export const WeatherBody = (
    { 
        classHide, 
        handleButtonSearch, 
        classNavbar, 
        handleButtonClear,
        weather,
        searchLocation,
        setSearchLocation
    }) => {

    const [tempScaleDefault, setTempScaleDefault] = useState({
        scaleDefault: ''
    });

    useEffect(() => {
        setTempScaleDefault({
            scaleDefault: 'C'
        });
    }, []);

    return (

        <div className="weather__container">
            <div className="weather__default-navbar">
                <WeatherDefault
                    classHide={ classHide } 
                    handleButtonSearch={ handleButtonSearch }
                    weather={weather}
                    tempScaleDefault={tempScaleDefault}
                /> 
                <Navbar 
                    classNavbar={ classNavbar } 
                    handleButtonClear={ handleButtonClear }
                    searchLocation= { searchLocation }
                    setSearchLocation={ setSearchLocation }
                />
            </div>
            <div className="weather__info">
                <WeatherInfo  
                    classHide={ classHide }
                    weather={weather}
                    setTempScaleDefault={ setTempScaleDefault }
                />
            </div>
        </div>

    );
};
