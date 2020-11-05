import React from 'react';
import Navigation from './../../../assets/img/near_me.svg';

export const WeatherHl = ({ todayHl }) => {

    const { windStatus, humidity, visibility, airPressure } = todayHl;

    const percentageBar = (humidity * 235) / 100;

    return (
        <div className="weatherHl__container">
            <div className="weatherHl__wind-status">
                <div className="title">
                    <p>Wind Status</p>
                </div>
                <div className="data">
                    <p>{windStatus}<span>mph</span></p>
                </div>
                <div className="navigation">
                    <div className="nav-icon">
                        <img src={ Navigation } alt=""/>
                    </div>
                    <p>WSW</p>
                </div>
            </div>
            <div className="weatherHl__humidity">
                <div className="title">
                    <p>Humidity</p>
                </div>
                <div className="data">
                    <p>{humidity}<span>%</span></p>
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
                    <p>{visibility} <span>miles</span></p>
                </div>
            </div>
            <div className="weatherHl__air-pressure">
                <div className="title">
                    <p>Air Pressure</p>
                </div>
                <div className="data">
                    <p>{airPressure} <span>mb</span></p>
                </div>
            </div>
        </div>
    );
};
