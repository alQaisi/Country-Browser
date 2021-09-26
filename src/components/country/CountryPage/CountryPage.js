import React from 'react';
import './CountryPage.css'
import {BsArrowLeft} from 'react-icons/bs';
const CountryPage=({slideMethod,onBackClick,colorMode,currentCountry,borders,onCountryClick})=>{
    let buttons=[<p key={-1}>Border Countries</p>];
    borders.forEach((border,index)=>{
        buttons.push(
            <button key={index} onClick={onCountryClick.bind(this,border[0].cca2,'in')} >{border[0].name.common}</button>
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
                  {/* <img alt={currentCountry.name.common} src={currentCountry.flags[1]}/> */}
                  {/* <img alt={currentCountry.name.common} src={`https://restcountries.com/data/png/${currentCountry.cca3.toLowerCase()}.png`}/> */}
                  <img alt={currentCountry.name.common} src={`https://restcountries.com/data/${currentCountry.cca3.toLowerCase()}.svg`}/>
                </div>
                <div className="CountryInfo">
                    <h1>{currentCountry.name.common}</h1>
                    <div className="infoCont">
                        <div className="info1">
                            <p>Official Name: <span>{currentCountry.name.official}</span></p>
                            <p>Region: <span>{currentCountry.region}</span></p>
                            <p>Sub Region: <span>{currentCountry.subregion}</span></p>
                            <p>Capital: <span>{currentCountry.capital}</span></p>
                        </div>
                        <div className="info2">
                            {
                                currentCountry.tld!==undefined?
                                (<p>Top Level Domain: <span>{currentCountry.tld[0]}</span></p>)
                                :<></>
                            }
                            
                            <p>Currencies: <span>{Object.values(currentCountry.currencies).map(currency=>currency.name+",")}</span></p>
                            <p>Languages: <span>{Object.values(currentCountry.languages).map(language=>language+",")}</span></p>
                        </div>
                    </div>
                    {
                        buttons.length>1?
                        (<div className={"borderButton "+colorMode+"-borderButton"}>
                        {buttons}
                        </div>)
                        :<></>
                    }
                    {/* <div className={"borderButton "+colorMode+"-borderButton"}>
                        {buttons}
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default CountryPage;