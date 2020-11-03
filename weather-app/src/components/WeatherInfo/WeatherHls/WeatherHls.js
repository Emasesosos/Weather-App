import React from 'react';
import { WeatherHl } from './WeatherHl';
import { todayHl } from './../../../helpers/db';

export const WeatherHls = () => {
    return (
        <div className="weatherHls__container">
            <h1>Today´s Hightlights</h1>
            <WeatherHl 
                key={ todayHl.id }
                todayHl={ todayHl }
            />
        </div>
    );
};
