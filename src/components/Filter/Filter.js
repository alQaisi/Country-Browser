import React,{PureComponent} from 'react';
import './Filter.css';
import {BiSearch} from 'react-icons/bi';
class Filter extends PureComponent{
    render(){
        const {colorMode,onInputChange,selectValue,onChange}=this.props;
        return (
            <div className={"FilterContainer"}>
                <div className={"searchBar " +colorMode+"-searchBar"}>
                <BiSearch className={"searchIcon "+colorMode+'-searchIcon'}/>
                <input type="text" className="SearchField" placeholder="Search for a country" onChange={onInputChange}/>
                </div>
                <select className={"selectRegion "+colorMode+"-selectRegion"} value={selectValue}  onChange={onChange}>
                        <option value="1">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
            </div>
          );
    }
}
export default Filter;