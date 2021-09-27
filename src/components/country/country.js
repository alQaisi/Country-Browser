import React,{PureComponent} from 'react';
import './country.css';
class Country extends PureComponent{
    render(){
        const {flag,name,population,continent,capital,colorMode,onCountryClick,alpha2Code}=this.props;
        return(
            <div className={"Country "+colorMode+"-Country"}  onClick={onCountryClick.bind(this,alpha2Code,"out")}>
                <img src={flag} alt={name}/>
                <div className="infoContainer">
                  <p className="countryName">{name}</p>
                  <p className="countryInfo">{"Population:"+population}</p>
                  <p className="countryInfo">{"Continent:"+continent}</p>
                  <p className="countryInfo">{"Capital:"+capital}</p>
                </div>
            </div>
        );
    }
}
export default Country;