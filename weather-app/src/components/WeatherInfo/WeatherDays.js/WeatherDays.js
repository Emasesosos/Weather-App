import React from 'react';
import { WeatherDay } from './WeatherDay';
// import { infoDays } from './../../../helpers/db';

export const WeatherDays = ({ weather }) => {

    const consolidatedWeatherF = [ 
        weather.consolidated_weather[1],   
        weather.consolidated_weather[2], 
        weather.consolidated_weather[3], 
        weather.consolidated_weather[4],
        weather.consolidated_weather[5], 
    ];

    weather.consolidated_weather[1].applicable_date = 'Tomorrow'; 

    return (
        <div className="weatherDays__container">
            {
                consolidatedWeatherF.map((infoDay) => {
                    return <WeatherDay 
                                key={ infoDay.id }
                                infoDay={ infoDay }
                                weather={ weather }
                            />;
                })
            }
        </div>
    );
};
