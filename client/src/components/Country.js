
import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCountry,searchName} from '../redux/actions/index';
import Loader from 'react-loader-spinner';

function Country(){
    const dispatch=useDispatch();
    const [name,setName]=useState('');
    const country = useSelector((state) => state.countryReducer);
    const loading = useSelector((state) => state.loadingReducer);    

    if(loading === 0){
        dispatch(getCountry());        
    }
    function handleChange(event){
        setName(event.target.value);
    }
    function handleClick(){
        if(name !== ''){
            dispatch(searchName(name));
        }else{
            dispatch(getCountry());        
        }
    }
    return (
    <div>
        {/* <h1 onClick={handleClick}>Hello</h1> */}
        <div className="brand"><h1>Country List</h1></div>
        <form className="search">
            <div className="form-group">
                <input type="text" className="form-control" value={name} onChange={handleChange} placeholder="Search by name" />
            </div>
            <button type="button" className="col-sm-12 col-md-3 btn btn-primary" onClick={handleClick}>Submit</button>
        </form>
        {loading === 2 || <Loader className="loader" type="TailSpin" color="#00BFFF" height={30} width={30}/>}
        <table className="col-sm-12 table table-bordered countryTable">
        <thead>
         <tr>
            <th scope="col">S. No.</th>
            <th scope="col">Country</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
            <th scope="col">Population</th>
            <th scope="col">Flag</th>
         </tr>
        </thead>
        <tbody>
        {loading !== 2 || country.map((list)=>{
            return (<tr key={list.number}>
            <th scope="row">{list.number}</th>
                <td>{list.name}</td>
                <td>{list.capital}</td>
                <td>{list.region}</td>
                <td>{list.population}</td>
                <td><img className="flag" src={list.flag} alt={list.name}></img></td>
            </tr>)
          })
        }
        </tbody>
        </table>
    </div>
    );
}

export default Country;

