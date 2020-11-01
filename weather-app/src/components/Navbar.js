import React from 'react';
import useForm from '../hooks/useForm';
import Clear from './../assets/img/clear.svg';
import Search from './../assets/img/search.svg';
import Arrow from './../assets/img/arrow_right.svg';

export const Navbar = () => {

    const initialForm = {
        searchLocation: '',
    };

    const [ formValues, handleInputChange, reset ] = useForm(initialForm);
    const { searchLocation } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        if(!searchLocation) {
            return;
        }
        console.log(searchLocation);
        reset();
    };

    return (

        <div className="navbar__container">
            <div className="navbar__clear">
                <button><img src={ Clear } alt=""/></button>
            </div>
            <form 
                className="navbar__form"
                onSubmit={ handleSearch }
            >
                <img src={ Search } alt=""/>
                <input 
                    type="text"
                    name="searchLocation"
                    placeholder="search location"
                    autoComplete="off"
                    className="navbar__input"
                    onChange={ handleInputChange }
                    value={ searchLocation }
                />
                <button
                    type="submit"
                    className="navbar__btn"
                >
                    Search
                </button>
            </form>
            <div className="navbar__location">
                <div className="navbar__country">
                    <p>México</p>
                    <img src={ Arrow } alt=""/>
                </div>
                <div className="navbar__country">
                    <p>London</p>
                    <img src={ Arrow } alt=""/>
                </div>
                <div className="navbar__country">
                    <p>Barcelona</p>
                    <img src={ Arrow } alt=""/>
                </div>
                <div className="navbar__country">
                    <p>Long Beach</p>
                    <img src={ Arrow } alt=""/>
                </div>
            </div>
        </div>

    );
};
