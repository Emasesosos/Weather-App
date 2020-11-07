import React from 'react';
import Gps from './../assets/img/gps.svg';
import Shower from './../assets/img/Shower.png';
import Location from './../assets/img/location.svg';

export const WeatherDefault = ({ classHide, handleButtonSearch }) => {

    return (

        <div className={` weatherDefault__container ${classHide}`}>
            <div className="weatherDefault__cloud-back"></div>
            <div className="weatherDefault__search-location">
                <button 
                    className="weatherDefault__search-places"
                    onClick={ handleButtonSearch }
                >
                    <p>Search for places</p>
                </button>
                <div className="weatherDefault__search-gps">
                    <img src={ Gps } alt="Gps"/>
                </div>
            </div>
            <div className="weatherDefault__weather-image">
                <img src={ Shower } alt="Shower"/>
            </div>
            <div className="weatherDefault__temperature">
                <p>15<span>°C</span></p>
                <div className="shower">
                    <span>Shower</span>
                </div>
            </div>
            <div className="weatherDefault__day">
                <p>Today</p>
                <div className="punto"></div>
                <p>Fri, 5 Jun</p>
            </div>
            <div className="weatherDefault__location">
                <img src={ Location } alt="Location"/>
                <p>Helsinki</p>
            </div>
        </div>

    );

};
