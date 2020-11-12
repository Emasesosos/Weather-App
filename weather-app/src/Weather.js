import React, { useEffect, useState } from 'react';
import { Spinner } from './components/Spinner/Spinner';
import { WeatherBody } from './components/WeatherBody';
import { getCity, getCityById, getGeoWeatherCity, getWeatherCity } from './helpers/fetch';

export const Weather = () => {

    const [classHide, setClassHide] = useState('');
    const [classNavbar, setClassNavbar] = useState('');
    const [clima, setClima] = useState('');
    const [peticionClima, setPeticionClima] = useState(false);
    const [searchLocation, setSearchLocation] = useState('');
    const [geoLocalization, setGeoLocalization] = useState({ latt: '', long: '', status: false });

    const handleButtonSearch = () => {
        setClassHide('hide');
        setClassNavbar('noHide');
    };

    const handleButtonClear = () => {
        setClassHide('');
        setClassNavbar('');
    };
    
    const getGeolocation = () => {
        
        const fetchData = async() => {

            console.log(geoLocalization);

            const { latt, long } = geoLocalization;

            const geoCityWeather = await getGeoWeatherCity(latt, long);

            if(!geoCityWeather) return;

            const cityGeoId = geoCityWeather.woeid;
            // const cityId = await getCityById(cityGeoId);
            const weather = await getWeatherCity(cityGeoId);
            setClima(weather);
            setPeticionClima({
                latt: '',
                long: '',
                status: true
            });
          
        };

        fetchData();
        console.log(geoLocalization);

    };

    useEffect(() => {
        
        const getCoords = (latt, long) => {
            setGeoLocalization({
                latt: latt,
                long: long,
                status: false
            })
        };

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            getCoords(latitude, longitude);
        });

    }, []);

    useEffect(() => {

        const city = getCity();
    
        const fetchData = async() => {

            const cityId = await getCityById(city);
            const weather = await getWeatherCity(cityId);
            setClima(weather);
            setPeticionClima(true);
        };
        fetchData();

    }, []);

    useEffect(() => {

        if (!searchLocation) {
            return;
        }

        const fetchData = async() => {    
            
            const cityId = await getCityById(searchLocation);

            if(!cityId) {
                return;
            } else {
                const weather = await getWeatherCity(cityId);
                setClima(weather);
                setPeticionClima(true);
            }
            
        };
        fetchData();

    }, [searchLocation]);

    return (

        (peticionClima === false) ? <Spinner />
        :   <WeatherBody classHide = { classHide }
                handleButtonSearch = { handleButtonSearch }
                classNavbar = { classNavbar }
                handleButtonClear = { handleButtonClear }
                weather = { clima }
                searchLocation= { searchLocation }
                setSearchLocation= { setSearchLocation }
                getGeolocation= { getGeolocation }
            />

    );
};