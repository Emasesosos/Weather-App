import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import Clear from './../assets/img/clear.svg';
import Search from './../assets/img/search.svg';
import { NavbarLocation } from './NavbarLocation';

export const Navbar = (
    { 
        classNavbar, 
        handleButtonClear,  
        setSearchLocation 
    }) => {

    const [search, setSearch] = useState('');

    const initialForm = {
        sLocation: '',
    };

    const [ formValues, handleInputChange, reset ] = useForm(initialForm);
    const { sLocation } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('formSearch');
        if(!sLocation) {
            return;
        }
        setSearch(sLocation);
        reset();
    };

    console.log(search);

    return (

        <div className={`navbar__container ${classNavbar}`}>
            <div className="navbar__clear">
                <button
                    onClick= { handleButtonClear }
                >
                    <img src={ Clear } alt=""/>
                </button>
            </div>
            <form 
                className="navbar__form"
                onSubmit={ handleSearch }
            >
                <img src={ Search } alt=""/>
                <input 
                    type="text"
                    name="sLocation"
                    placeholder="search location"
                    autoComplete="off"
                    className="navbar__input"
                    onChange={ handleInputChange }
                    value={ sLocation }
                />
                <button
                    type="submit"
                    className="navbar__btn"
                >
                    Search
                </button>
            </form>
            { 
                search && <NavbarLocation 
                                    search={ search }
                                    handleButtonClear={ handleButtonClear }
                                    setSearchLocation={ setSearchLocation }
                                    /> 
            }
        </div>

    );
};
