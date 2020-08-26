import axios from 'axios';

const instance = axios.create({
    baseURL:"https://localhost:44315"
})

export default instance;