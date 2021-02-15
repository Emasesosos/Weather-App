import React from 'react';
import Navigation from './../../../assets/img/near_me.svg';

export const WeatherHl = ({ weather }) => {

    console.log({weather});
    
    const { 
        wind_speed, 
        humidity, 
        visibility, 
        air_pressure,
        wind_direction_compass 
    } = weather.consolidated_weather[0];

    const windStatus = wind_speed.toFixed(0);
    const humidityF = humidity.toFixed(0);
    const visibilityF = visibility.toFixed(0);
    const airPressure = air_pressure.toFixed(0);

    const percentageBar = (humidity * 235) / 100;

    return (
        <div className="weatherHl__container">
            <div className="weatherHl__wind-status">
                <div className="title">
                    <p>Wind Status</p>
                </div>
                <div className="data">
                    <p>{windStatus}<span>mph</span></p>
                    {/* <p>7<span>mph</span></p> */}
                </div>
                <div className="navigation">
                    <div className={`nav-icon ${wind_direction_compass}`}>
                    {/* <div className={`nav-icon`}> */}
                        <img src={ Navigation } alt=""/>
                    </div>
                    <p>{wind_direction_compass}</p>
                    {/* <p>WSW</p> */}
                </div>
            </div>
            <div className="weatherHl__humidity">
                <div className="title">
                    <p>Humidity</p>
                </div>
                <div className="data">
                    <p>{humidityF}<span>%</span></p>
                    {/* <p>30<span>%</span></p> */}
                </div>
                <div className="humidity-bar">
                    <div className="digits">
                        <p>0</p>
                        <p>50</p>
                        <p>100</p>
                    </div>
                    <div className="status-bar">
                        <div className="main-bar"></div>
                        <div className="secundary-bar" style={{width: percentageBar + 'px'}}></div>
                    </div>
                    <div className="percentage">
                        <p>%</p>
                    </div>
                </div>
            </div>
            <div className="weatherHl__visibility">
                <div className="title">
                    <p>Visibility</p>
                </div>
                <div className="data">
                    <p>{visibilityF} <span>miles</span></p>
                    {/* <p>10 <span>miles</span></p> */}
                </div>
            </div>
            <div className="weatherHl__air-pressure">
                <div className="title">
                    <p>Air Pressure</p>
                </div>
                <div className="data">
                    <p>{airPressure} <span>mb</span></p>
                    {/* <p>1023 <span>mb</span></p> */}
                </div>
            </div>
        </div>
    );
};
