import React from 'react';
import Arrow from './../assets/img/arrow_right.svg';

export const NavbarLocation = ( { search, handleButtonClear, setSearchLocation } ) => {

    const handleSearch = () => {
        setSearchLocation(search);
    };

    return (
        <div 
            className="navbar__location"
            onClick={ handleButtonClear }    
        >
            <div className="navbar__country"
                onClick={ handleSearch }
            >
                <p>{ search }</p>
                <img src={ Arrow } alt=""/>
            </div>
        </div>
    );
};
