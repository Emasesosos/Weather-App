import React from 'react';
import Arrow from './../assets/img/arrow_right.svg';

export const NavbarLocation = ( { search } ) => {

    const handleSearch = (search) => {
        console.log(search);
    };

    return (
        <div 
            className="navbar__location"
            onClick={ () => handleSearch(search) }    
        >
            <div className="navbar__country">
                <p>{ search }</p>
                <img src={ Arrow } alt=""/>
            </div>
        </div>
    );
};
