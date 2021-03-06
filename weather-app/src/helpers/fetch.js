import Swal from 'sweetalert2';

// Obtiene el Id de la Ciudad
export const getCityById = async(city) => {

    // const corsHeroku = 'https://cors-anywhere.herokuapp.com'; // deprecated
    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com'; // Good
    const urlApi = 'https://www.metaweather.com/api/location/search/?query';
    const url = `${corsHeroku}/${urlApi}=${city}`;

    console.log({ url });

    try {

        const resp = await fetch(url);
        console.log(resp);
        if (!resp.ok) throw new Error('No se pudo realizar la petición getCityById');
        const data = await resp.json();
        const cityId = data[0].woeid;
        return cityId;

    } catch (error) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        })

        // throw error;

    }

};

// Obtiene el Clima del país elegido
export const getWeatherCity = async(cityId) => {

    // const corsHeroku = 'https://cors-anywhere.herokuapp.com'; // deprecated
    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com'; // Good
    const urlApi = 'https://www.metaweather.com/api/location';
    const url = `${corsHeroku}/${urlApi}/${cityId}`;

    try {

        const resp = await fetch(url);
        console.log(resp);
        if (!resp.ok) throw new Error('No se pudo realizar la petición getWeatherCity');
        const data = await resp.json();

        return data;

    } catch (error) {
        throw error;
    }

};

// Obtiene el Clima del país por ubicación
export const getGeoWeatherCity = async(latt, long) => {

    // const corsHeroku = 'https://cors-anywhere.herokuapp.com'; // deprecated
    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com'; // Good
    const urlApi = 'https://www.metaweather.com/api/location/search/?lattlong';
    const url = `${corsHeroku}/${urlApi}=${latt},${long}`;

    console.log(url);

    try {

        const resp = await fetch(url);
        console.log(resp);
        if (!resp.ok) throw new Error('No se pudo realizar la petición getGeoWeatherCity');
        const data = await resp.json();
        console.log(data);

        return data[0];

    } catch (error) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        })

        //throw error;
    }

};

// Obtiene una ciudad aleatoria
export const getCity = () => {

    const cities = [
        'Mexico',
        'Helsinki',
        'London',
        'New York',
        'Madrid',
        'Barcelona',
        'Paris',
        'Buenos Aires',
        'Rio de Janeiro',
        'Berlin',
        'Tokyo'
    ];

    const cityRandom = Math.floor(Math.random() * cities.length);

    const cityDefault = cities[cityRandom];

    return cityDefault;

};