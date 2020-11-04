import actionsTypes from './constants';
const uiState={
    colorMode:localStorage.getItem('theme'),
    nameFilter:'',
    selectValue:"1",
};
const dataState={
    data:[],
    currentCountry:{},
    borders:[],
    inPage:false,
    slideMethod:'',
    title:'Countries Browser'
}
export const uiReducer=(state=uiState,action={})=>{
    switch(action.type){
        case actionsTypes.CHANGE_SEARCHBOX:
            return Object.assign({},state,{nameFilter:action.payload});
        case actionsTypes.DARKMODE_EVENT:
            return Object.assign({},state,{colorMode:action.payload});
        case actionsTypes.CHANGE_LIST:
            return Object.assign({},state,{selectValue:action.payload});
        default:
            return state;
    }
};
export const dataReducer=(state=dataState,action={})=>{
    switch(action.type){
        case actionsTypes.CLICK_BACK:
            return Object.assign({},state,{slideMethod:action.payload,title:"Countries Browser"});
        case actionsTypes.FETCH_COUNTRIES:
            return Object.assign({},state,{data:action.payload});
        case actionsTypes.FETCH_BORDERS:
            return Object.assign({},state,{borders:action.payload})
        case actionsTypes.FETCH_COUNTRY:
            return Object.assign({},state,action.payload);
        default:
            return state;
    }
}