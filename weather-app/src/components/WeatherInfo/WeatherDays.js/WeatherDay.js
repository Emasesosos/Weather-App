import React  from 'react';

export const WeatherDay = ({ infoDay, temperatureScale }) => {

    const { 
        applicable_date,
        max_temp, 
        min_temp,
        weather_state_name
    } = infoDay;

    const date = new Date(applicable_date).toUTCString().slice(0,11);
    let max_tempF = '';
    let min_tempF = '';
    let scaleLetter = '';
    const nameImg = weather_state_name.replace(' ', '');
    const { scale } = temperatureScale;
        
    if(scale === 'C') {
        max_tempF = max_temp.toFixed(0);
        min_tempF = min_temp.toFixed(0);
        scaleLetter = '°C'
    } else {
        max_tempF = ((max_temp * 1.8) + 32).toFixed(0);
        min_tempF = ((min_temp * 1.8) + 32).toFixed(0);
        scaleLetter = '°F'
    }

    return (
        <div className="weatherDay__container">

            <p>{ applicable_date === 'Tomorrow' ? applicable_date : date }</p>
            {/* <p>Day</p> */}
            <img 
                src={ require(`../../../assets/img/${nameImg}.png`).default }
                // src={ require(`../../../assets/img/Clear.png`).default }
                alt={ nameImg }
            /> 
            <div className="weatherDay__temperature">
                {/* <p>{ infoDay.weather.ini.degreesC } °C</p>
                <span>{ infoDay.weather.final.degreesF } °C</span>  */}
                <p>{ max_tempF } {scaleLetter}</p>
                <span>{ min_tempF } {scaleLetter}</span> 
            </div>

        </div>
    );

};
