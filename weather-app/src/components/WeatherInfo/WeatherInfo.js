import React from 'react';
import { WeatherDays } from './WeatherDays.js/WeatherDays';
import { WeatherHls } from './WeatherHls/WeatherHls';

export const WeatherInfo = ({ weather }) => {
    return (
        <div className="weatherInfo__container">
            <div className="weatherInfo__scale">
                <div className="weatherInfo__celcius">
                    <p>°C</p>
                </div>
                <div className="weatherInfo__fahrenheit">
                    <p>°F</p>
                </div>
            </div>
            <WeatherDays 
                weather={ weather }
            />
            <WeatherHls 
                weather={ weather }
            />
        </div>
    );
};
