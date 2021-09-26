import React,{PureComponent} from 'react';
import './country.css';
class Country extends PureComponent{
    render(){
        const {flag,name,subregion,region,capital,colorMode,onCountryClick,alpha2Code,cca3}=this.props;
        return(
            <div className={"Country "+colorMode+"-Country"}  onClick={onCountryClick.bind(this,alpha2Code,"out")}>
                {/* <img src={flag} alt={name}/> */}
                <img src={`https://restcountries.com/data/png/${cca3.toLowerCase()}.png`} alt={name}/>
                {/* <img src={`https://restcountries.com/data/${cca3.toLowerCase()}.svg`} alt={name}/> */}
                <div className="infoContainer">
                  <p className="countryName">{name}</p>
                  <p className="countryInfo">{"Subregion:"+subregion}</p>
                  <p className="countryInfo">{"Region:"+region}</p>
                  <p className="countryInfo">{"Capital:"+capital}</p>
                </div>
            </div>
        );
    }
}
export default Country;