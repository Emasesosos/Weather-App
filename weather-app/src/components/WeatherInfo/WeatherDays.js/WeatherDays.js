import React from 'react';
import { WeatherDay } from './WeatherDay';
// import { infoDays } from './../../../helpers/db';

export const WeatherDays = ({ weather }) => {

    return (
        <div className="weatherDays__container">
            {
                weather.consolidated_weather.map((infoDay) => {
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
