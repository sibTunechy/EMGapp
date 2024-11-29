import axios from 'axios';

const API = axios.create({ baseURL: 'https://emg-app.herokuapp.com' });  // https://localhost:5000 was replaced by heroku

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);