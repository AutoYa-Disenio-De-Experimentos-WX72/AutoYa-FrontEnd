import axios from 'axios';

export default axios.create({
    baseURL: 'https://autoyaexperimentos.azurewebsites.net/api/v1',
    headers: { 'Content-type': 'application/json' }
});
