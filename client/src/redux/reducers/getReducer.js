const countryReducer = (state=[],action) => {
    switch(action.type){
        case "GET_COUNTRY": return action.payload;
        default: return state;
    }
};
const loadingReducer =(state=0,action) => {
    switch(action.type){
        case "LOADING": return action.payload;
        default : return state;
    }
};
export {countryReducer, loadingReducer};