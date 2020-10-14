import actionsTypes from './constants';
export const setSearchBox=(text)=>({
    type:actionsTypes.CHANGE_SEARCHBOX,
    payload:text
});
export const darkModeEvent=(prevMode)=>{
    switch(prevMode){
        case 'dark':
            localStorage.setItem('theme','light');
            return{
                type:actionsTypes.DARKMODE_EVENT,
                payload:"light"
            };
        default:
            localStorage.setItem('theme','dark');
            return{
                type:actionsTypes.DARKMODE_EVENT,
                payload:"dark"
            }
    }
}
export const onChange=(text)=>({
    type:actionsTypes.CHANGE_LIST,
    payload:text
})
export const onBackClick=()=>{
    if (document.activeElement) {
      document.activeElement.blur();
      const CountriesContainer=document.getElementById("CountriesContainer");
      CountriesContainer.focus();
      document.body.style.overflowY="auto";
    }
    return{
    type:actionsTypes.CLICK_BACK,
    payload:"slide-out"
    }
};
