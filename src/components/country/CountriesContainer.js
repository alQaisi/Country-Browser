import React from 'react';
import './country.css';
import Country from './country';
const CountriesContainer=({data,colorMode,onCountryClick})=>{
    const countries=[];
    data.forEach((country,index)=> {
        countries.push(
            <Country key={index} index={index} name={country.name} flag={country.flags[1]} population={country.population} continent={country.continent} capital={country.capital} colorMode={colorMode} alpha2Code={country.alpha2Code} onCountryClick={onCountryClick} />        )
    });
    return(
        <div className={"CountriesContainer"} id={"CountriesContainer"}>
            {countries}
        </div>
    )
}
export default CountriesContainer;