import React from 'react';
import Shower from './../../../assets/img/Shower.png';
import HeavyRain from './../../../assets/img/HeavyRain.png';
import Sleet from './../../../assets/img/Sleet.png';
import Snow from './../../../assets/img/Snow.png';
import Hail from './../../../assets/img/Hail.png';

export const WeatherDay = ({ infoDay }) => {

    const { day, img, weather } = infoDay;

    return (
        <div className="weatherDay__container">
            <p>{day}</p>
            <img 
                src={
                    img === 'Shower' ? 
                        Shower : img === 'HeavyRain' ? 
                            HeavyRain : img === 'Sleet' ?
                                    Sleet : img === 'Snow' ?
                                        Snow : img === 'Hail' ?
                                            Hail : ''
                } 
                alt={
                    img === 'Shower' ? 
                        'Shower' : img === 'HeavyRain' ? 
                            'HeavyRain' : img === 'Sleet' ?
                                    'Sleet' : img === 'Snow' ?
                                        'Snow' : img === 'Hail' ?
                                            'Hail' : ''
                }
            />
            <div className="weatherDay__temperature">
                <p>{ weather.ini.degreesC }</p>
                <span>{ weather.final.degreesC }</span>
            </div>
        </div>
    );

};
