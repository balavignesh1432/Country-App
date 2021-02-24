import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchCountry = () => axios.get(url+'api');
export const nameCountry = (name) => axios.post(url+'api/'+name);