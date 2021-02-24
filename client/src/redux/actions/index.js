import * as api from "../api/index";

export const getCountry = () => async (dispatch)=> {
    try{
        dispatch({type:"LOADING",payload:1});
        const {data} = await api.fetchCountry();
        dispatch({type:"GET_COUNTRY",payload:data});
        dispatch({type:"LOADING",payload:2});
    }catch(err){
        console.log(err.message);
    }
}

export const searchName = (name) => async (dispatch) => {
    try{
        dispatch({type:"LOADING",payload:1});
        const {data} = await api.nameCountry(name);
        dispatch({type:"GET_COUNTRY",payload:data});
        dispatch({type:"LOADING",payload:2});
    }catch(err){
        console.log(err.message);
    }
}