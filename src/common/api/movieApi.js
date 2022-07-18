import axios from 'axios';

export default axios.create({
    baseUrl : "http://www.omdbapi.com"
})
