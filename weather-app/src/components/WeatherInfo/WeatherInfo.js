import React from 'react';
import { WeatherDays } from './WeatherDays.js/WeatherDays';
import { WeatherHls } from './WeatherHls/WeatherHls';

export const WeatherInfo = () => {
    return (
        <div className="weatherInfo__container">
            <WeatherDays />
            <WeatherHls />
        </div>
    );
};
