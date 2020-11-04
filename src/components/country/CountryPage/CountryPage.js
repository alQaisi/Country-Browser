import React from 'react';
import './CountryPage.css'
import {BsArrowLeft} from 'react-icons/bs';
import {Helmet} from "react-helmet";

const CountryPage=({slideMethod,onBackClick,colorMode,currentCountry,borders,onCountryClick})=>{
    let buttons=[<p key={-1}>Border Countries</p>];
    borders.forEach((border,index)=>{
        buttons.push(
            <button key={index} onClick={onCountryClick.bind(this,border.alpha2Code,'in')} >{border.name}</button>
        )
    })
    const controlScroll=(show)=>{
        show===true?document.body.style.overflowY="scroll":document.body.style.overflowY="hidden";
    }
    return(
        <div onMouseOver={controlScroll} onMouseOut={controlScroll.bind(this,true)} className={" CountryPage "+ colorMode+"-CountryPage "+ slideMethod}>

            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{currentCountry.name}</title>
            </Helmet> */}

            <div className={"button-container "+colorMode+"-button-container"} onClick={onBackClick}>
              <BsArrowLeft className="back-icon"/>
              <button className="back-button">Back</button>
            </div>
            <div className="CountryCont">
                <div className="flag">
                  <img alt={currentCountry.name} src={currentCountry.flag}/>
                </div>
                <div className="CountryInfo">
                    <h1>{currentCountry.name}</h1>
                    <div className="infoCont">
                        <div className="info1">
                            <p>Native Name: <span>{currentCountry.nativeName}</span></p>
                            <p>Population: <span>{currentCountry.population}</span></p>
                            <p>Region: <span>{currentCountry.region}</span></p>
                            <p>Sub Region: <span>{currentCountry.subregion}</span></p>
                            <p>Capital: <span>{currentCountry.capital}</span></p>
                        </div>
                        <div className="info2">
                            <p>Top Level Domain: <span>{currentCountry.topLevelDomain}</span></p>
                            <p>Currencies: <span>{currentCountry.currencies.map(currency=>currency.name+",")}</span></p>
                            <p>Languages: <span>{currentCountry.languages.map(language=>language.name+",")}</span></p>
                        </div>
                    </div>
                    <div className={"borderButton "+colorMode+"-borderButton"}>
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CountryPage;