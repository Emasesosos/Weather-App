import React, { useEffect, useState } from 'react';
import { Spinner } from './components/Spinner/Spinner';
import { WeatherBody } from './components/WeatherBody';
import { getCityById, getGeoWeatherCity, getWeatherCity } from './helpers/fetch';

export const Weather = () => {

    const [classHide, setClassHide] = useState('');
    const [classNavbar, setClassNavbar] = useState('');
    const [clima, setClima] = useState('');
    const [peticionClima, setPeticionClima] = useState(false);
    const [formClima, setFormClima] = useState(false);
    const [searchLocation, setSearchLocation] = useState('');

    const handleButtonSearch = () => {
        setClassHide('hide');
        setClassNavbar('noHide');
    };

    const handleButtonClear = () => {
        setClassHide('');
        setClassNavbar('');
    };

    const getGeolocation = () => {
        setFormClima(true);
        const getCoords = async(latt, long) => {
            const geoWeather = await getGeoWeatherCity(latt, long);
            if(!geoWeather) return;
            const { woeid } = geoWeather;
            const weather = await getWeatherCity(woeid);
            console.log({weather});
            setClima(weather);
            setPeticionClima({
                latt: '',
                long: '',
                status: true
            });
            setFormClima(false);
        };

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            getCoords(latitude, longitude);
        });
    };

    useEffect(() => {
        getGeolocation();
    }, []);    

    useEffect(() => {

        if (!searchLocation) {
            return;
        }
        setFormClima(true);
        const fetchData = async() => {    
            const cityId = await getCityById(searchLocation);
            if(!cityId) {
                return;
            } else {
                const weather = await getWeatherCity(cityId);
                setClima(weather);
                setPeticionClima(true);
                setFormClima(false);
            }
        };
        fetchData();

    }, [searchLocation]);

    return (

        (peticionClima === false) ? <Spinner />
        : (formClima === true) ? <Spinner />
        :   <WeatherBody 
                classHide = { classHide }
                handleButtonSearch = { handleButtonSearch }
                classNavbar = { classNavbar }
                handleButtonClear = { handleButtonClear }
                weather = { clima }
                getGeolocation={ getGeolocation }
                setSearchLocation= { setSearchLocation }
            />

    );
};