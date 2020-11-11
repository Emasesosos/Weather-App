import React, { useEffect, useState } from 'react';
import { Spinner } from './components/Spinner/Spinner';
import { WeatherBody } from './components/WeatherBody';
import { getCity, getCityById, getWeatherCity } from './helpers/fetch';

export const Weather = () => {

    const [classHide, setClassHide] = useState('');
    const [classNavbar, setClassNavbar] = useState('');
    const [clima, setClima] = useState('');
    const [peticionClima, setPeticionClima] = useState(false);

    const handleButtonSearch = () => {
        setClassHide('hide');
        setClassNavbar('noHide');
    };

    const handleButtonClear = () => {
        setClassHide('');
        setClassNavbar('');
    };

    useEffect(() => {
        const city = getCity();
        // console.log(city);
        const fetchData = async () => {
            const cityId = await getCityById(city);
            // console.log(cityId);
            const weather =  await getWeatherCity(cityId);
            // console.log(weather);
            setClima(weather);
            setPeticionClima(true);
        };
        fetchData();
    }, []);

    // const localization = navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position);
    // });

    // console.log(localization);

    return (

        peticionClima === false ? <Spinner /> 
            : <WeatherBody 
                classHide={ classHide } 
                handleButtonSearch={ handleButtonSearch }
                classNavbar={ classNavbar } 
                handleButtonClear={ handleButtonClear }
                weather= { clima }
            />
        
    );
};
