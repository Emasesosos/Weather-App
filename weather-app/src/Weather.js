import React, { useState } from 'react';
import { WeatherDefault } from './components/WeatherDefault';
import { Navbar } from './components/Navbar';
import { WeatherInfo } from './components/WeatherInfo/WeatherInfo';

export const Weather = () => {

    const [classHide, setClassHide] = useState('');
    const [classNavbar, setClassNavbar] = useState('');

    const handleButtonSearch = () => {
        setClassHide('hide');
        setClassNavbar('noHide');
    };

    const handleButtonClear = () => {
        setClassHide('');
        setClassNavbar('');
    };

    return (

        <div className="weather__container">

            <div className="weather__default-navbar">
                <WeatherDefault 
                    classHide={ classHide } 
                    handleButtonSearch={ handleButtonSearch }
                /> 
                <Navbar 
                    classNavbar={ classNavbar } 
                    handleButtonClear={ handleButtonClear }
                />
            </div>
            <div className="weather__info">
                <WeatherInfo  
                    classHide={ classHide }
                />
            </div>

        </div>
        
    );
};
