import React from 'react';

export const ChangeScale = ({ changeScale, temperatureScale }) => {

    const { scale } = temperatureScale;

    let classCelsius = '';
    let classFahrenheit = '';

    if(scale === 'C') {
        classCelsius = 'celsius';
        classFahrenheit = '';
    } else {
        classCelsius = '';
        classFahrenheit = 'fahrenheit';
    }

    return (

        <div className="weatherInfo__scale">
            <div className={`weatherInfo__celcius ${classCelsius}`}
                onClick={ () => changeScale('C') }
            >
                <p>°C</p>
            </div>
            <div className={`weatherInfo__fahrenheit ${classFahrenheit}`}
                onClick={ () => changeScale('F') }
            >
                <p>°F</p>
            </div>
        </div>
        
    );

};
