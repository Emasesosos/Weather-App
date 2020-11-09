import React, { useEffect, useMemo, useState } from 'react';

export const WeatherDay = ({ infoDay }) => {

    const [date, setDate] = useState('');

    const { 
        applicable_date, 
        // created,
        max_temp, 
        min_temp,
        weather_state_name
    } = infoDay;

    const nameImg = weather_state_name.replace(' ', '');
    const max_tempF = max_temp.toFixed(0);
    const min_tempF = min_temp.toFixed(0);

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

    return (
        <div className="weatherDay__container">

            <p>{date}</p>
            <img 
                src={ require(`../../../assets/img/${nameImg}.png`).default }
                alt={nameImg}
            /> 
            <div className="weatherDay__temperature">
                <p>{ max_tempF } °C</p>
                <span>{ min_tempF } °C</span> 
            </div>

        </div>
    );

};
