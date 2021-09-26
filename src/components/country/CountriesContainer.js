import React from 'react';
import './country.css';
import Country from './country';
const CountriesContainer=({data,colorMode,onCountryClick})=>{
    const countries=[];
    data.forEach((country,index)=> {
        countries.push(
            <Country key={index} index={index} name={country.name.common} cca3={country.cca3} flag={country.flags[1]} subregion={country.subregion} region={country.region} capital={country.capital} colorMode={colorMode} alpha2Code={country.cca2.toLowerCase()} onCountryClick={onCountryClick} />
        )
    });
    return(
        <div className={"CountriesContainer"} id={"CountriesContainer"}>
            {countries}
        </div>
    )
}
export default CountriesContainer;