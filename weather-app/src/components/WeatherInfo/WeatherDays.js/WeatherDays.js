import React from 'react';
import { WeatherDay } from './WeatherDay';
import { infoDays } from './../../../helpers/db';

export const WeatherDays = () => {
    return (
        <div className="weatherDays__container">
            {
                infoDays.map((infoDay) => {
                    return <WeatherDay 
                                key={ infoDay.id }
                                infoDay={ infoDay }
                            />;
                })
            }
        </div>
    );
};
