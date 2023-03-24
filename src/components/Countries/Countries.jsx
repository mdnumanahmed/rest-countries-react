import React from 'react';
import Country from '../Country/Country';

const Countries = ({countries}) => {
    return (
        <div>
            {
                countries.map(country => <Country country={country}/>)
            }
        </div>
    );
};

export default Countries;