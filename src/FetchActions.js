import actionsTypes from './constants';
export const fetchCountries=()=>(dispatch)=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response=>response.json())
    .then(APIdata=>dispatch({
        type:actionsTypes.FETCH_COUNTRIES,
        payload:APIdata
    })).catch(error=>alert('Somthing Wrong,check your internet connection or please come later'));
};
export const onCountryClick=(alpha2Code,position)=>(dispatch)=>{
    if(position==='out'){
        dispatch({
            type:actionsTypes.FETCH_COUNTRY,
            payload:{inPage:false,currentCountry:{}}
        });
    }
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`)
    .then(response=>response.json())
    .then(APIdata=>{
        const borders=APIdata.borders.map(border=>`https://restcountries.eu/rest/v2/alpha/${border}`)
        Promise.all(borders.map(border=>fetch(border).then(response=>response.json())))
        .then(data=>dispatch({type:actionsTypes.FETCH_BORDERS,payload:data})).catch(error=>dispatch({type:actionsTypes.FETCH_BORDERS,payload:[]}));
      dispatch(
          {type:actionsTypes.FETCH_COUNTRY,payload:{
            currentCountry:APIdata,inPage:true,slideMethod:'',title:APIdata.name
          }
        })}).catch(error=>dispatch({type:actionsTypes.FETCH_COUNTRY,payload:{}}));
}