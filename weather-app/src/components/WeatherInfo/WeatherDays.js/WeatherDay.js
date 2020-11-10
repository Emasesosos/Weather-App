import React  from 'react';

export const WeatherDay = ({ infoDay }) => {

    const { 
        applicable_date,
        max_temp, 
        min_temp,
        weather_state_name
    } = infoDay;

    const nameImg = weather_state_name.replace(' ', '');
    const max_tempF = max_temp.toFixed(0);
    const min_tempF = min_temp.toFixed(0);

    const date = new Date(applicable_date).toUTCString().slice(0,11);

    return (
        <div className="weatherDay__container">

            <p>{ applicable_date === 'Tomorrow' ? applicable_date : date }</p>
            <img 
                src={ require(`../../../assets/img/${nameImg}.png`).default }
                alt={ nameImg }
            /> 
            <div className="weatherDay__temperature">
                <p>{ max_tempF } °C</p>
                <span>{ min_tempF } °C</span> 
            </div>

        </div>
    );

};
