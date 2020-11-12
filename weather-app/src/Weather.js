import React, { useEffect, useState } from 'react';
import { Spinner } from './components/Spinner/Spinner';
import { WeatherBody } from './components/WeatherBody';
import { getCity, getCityById, getGeoWeatherCity, getWeatherCity } from './helpers/fetch';

export const Weather = () => {

    const [classHide, setClassHide] = useState('');
    const [classNavbar, setClassNavbar] = useState('');
    const [clima, setClima] = useState('');
    const [peticionClima, setPeticionClima] = useState(false);
    const [geoLocalization, setGeoLocalization] = useState({
        latt: '',
        long: ''
    });

    const handleButtonSearch = () => {
        setClassHide('hide');
        setClassNavbar('noHide');
    };

    const handleButtonClear = () => {
        setClassHide('');
        setClassNavbar('');
    };

    

    useEffect(() => {

        const getCoords = (latt, long) => {
            setGeoLocalization({
                latt: latt,
                long: long 
            })
        };

        console.log('useEffect 1st');
        return navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position);
            const { latitude, longitude } = position.coords;
            getCoords(latitude, longitude);

        });

    }, [])

    useEffect(() => {

        const { latt, long } = geoLocalization;
        console.log('useeffect 2nd', geoLocalization);
        // const city = getCity();
        // console.log(city);
        // const fetchData = async() => {

        //     const geoCityWeather = await getGeoWeatherCity(latt, long);
        //     console.log(geoCityWeather[0].woeid);
        //     const cityGeoId = geoCityWeather[0].woeid;
        //     console.log(cityGeoId);
        //     // const cityId = await getCityById(city);
        //     // console.log(cityId);
        //     const weather = await getWeatherCity(cityGeoId);
        //     // console.log(weather);
        //     setClima(weather);
        //     setPeticionClima(true);
        // };
        // fetchData();
    }, []);



    return (

        peticionClima === false ? <Spinner />
        :   <WeatherBody classHide = { classHide }
                handleButtonSearch = { handleButtonSearch }
                classNavbar = { classNavbar }
                handleButtonClear = { handleButtonClear }
                weather = { clima }
            />

    );
};