import React, { useState } from 'react';
import { WeatherDefault } from './components/WeatherDefault';
import { Navbar } from './components/Navbar';

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
            <div className="weather__default-component">
                <WeatherDefault 
                    classHide={ classHide } 
                    handleButtonSearch={ handleButtonSearch }
                /> 
            </div>
            <div className="weather__navbar-component">
                <Navbar 
                    classNavbar={ classNavbar } 
                    handleButtonClear={ handleButtonClear }
                />
            </div>
        </div>
    );
};
