import React, { useEffect, useState } from 'react';
import { ChangeScale } from './ChangeScale';
import { WeatherDays } from './WeatherDays.js/WeatherDays';
import { WeatherHls } from './WeatherHls/WeatherHls';

export const WeatherInfo = ({ weather, setTempScaleDefault }) => {

    const [temperatureScale, setTemperatureScale] = useState({
        scale: ''
    });

    useEffect(() => {
        setTemperatureScale({
            scale: 'C'
        });
    }, []);
    
    const changeScale = (scale) => {

        setTemperatureScale({
            scale
        });
        setTempScaleDefault({
            scaleDefault: scale
        })
    
    };

    return (

        <div className="weatherInfo__container">
            
            <ChangeScale 
                changeScale={ changeScale }
                temperatureScale={ temperatureScale }
            />
            <WeatherDays 
                weather={ weather }
                temperatureScale={ temperatureScale }
            />
            <WeatherHls 
                weather={ weather }
            />
        </div>

    );

};
