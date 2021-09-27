import React,{Component, Suspense} from 'react';
import './App.css';
import Helmet from "react-helmet";
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';
import {setSearchBox,darkModeEvent,onChange,onBackClick} from './actions';
import {fetchCountries,onCountryClick} from './FetchActions';
import {connect} from 'react-redux';
const CountriesContainer=React.lazy(()=>import('./components/country/CountriesContainer'));
const CountryPage=React.lazy(()=>import('./components/country/CountryPage/CountryPage'));
const mapStateToProps=state=>{
  return{
    nameFilter:state.uiReducer.nameFilter,
    colorMode:state.uiReducer.colorMode,
    selectValue:state.uiReducer.selectValue,
    slideMethod:state.dataReducer.slideMethod,
    data:state.dataReducer.data,
    currentCountry:state.dataReducer.currentCountry,
    inPage:state.dataReducer.inPage,
    borders:state.dataReducer.borders,
    title:state.dataReducer.title
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    onInputChange:(event)=>dispatch(setSearchBox(event.target.value)),
    darkModeEvent:(colorMode)=>dispatch(darkModeEvent(colorMode)),
    onChange:(event)=>dispatch(onChange(event.target.value)),
    onBackClick:()=>dispatch(onBackClick()),
    fetchCountries:()=>dispatch(fetchCountries()),
    onCountryClick:(alpha2Code,position)=>dispatch(onCountryClick(alpha2Code,position))
  }
}
class App extends Component{
  componentDidMount(){
    this.props.fetchCountries();
  }
  render(){
    const {title,nameFilter,onInputChange,colorMode,darkModeEvent,selectValue,onChange,slideMethod,onBackClick,data,borders,inPage,currentCountry,onCountryClick}=this.props;
    let filterdCountries=data.filter(country=>{
      if(selectValue==="1"){
        return (country.name.toLowerCase().includes(nameFilter.toLowerCase()));
      }else{
        return (country.name.toLowerCase().includes(nameFilter.toLowerCase()) && country.continent===selectValue);
      }
    });
    return (
      <div className={"App " +colorMode+"-App"}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
        </Helmet>
        <Header colorMode={colorMode} darkModeEvent={darkModeEvent}/>
        <Filter colorMode={colorMode} onInputChange={onInputChange} selectValue={selectValue} onChange={onChange}/>
        <Suspense fallback={<h1>Loading Countries</h1>}>
        <CountriesContainer data={filterdCountries} colorMode={colorMode} onCountryClick={onCountryClick} allCountries={data}/>
        </Suspense>
          
        {inPage===true
          ?(
            <Suspense fallback={<>Loading...</>}>
              <CountryPage slideMethod={slideMethod} onCountryClick={onCountryClick} borders={borders} onBackClick={onBackClick} colorMode={colorMode} currentCountry={currentCountry}/>
            </Suspense>
          )
        :null
        }
        <ScrollArrow colorMode={colorMode}/>
      </div>
    );
  } 
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
