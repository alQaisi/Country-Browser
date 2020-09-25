import React from 'react';
import './country.css';
import Country from './country';
const CountriesContainer=({data,colorMode,onCountryClick})=>{
    const countries=[];
    data.forEach((country,index)=> {
        countries.push(
            <Country key={index} index={index} name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital} colorMode={colorMode} alpha2Code={country.alpha2Code} onCountryClick={onCountryClick} />
        )
    });
    return(
        <div className={"CountriesContainer"}>
            {countries}
        </div>
    )
}
export default CountriesContainer;