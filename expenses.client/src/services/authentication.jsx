import { login } from '../app/authenticationSlice';
import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: `https://localhost:5001/Authentication`,
})


export const SignUp = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signup', credentials);
        dispatch(login(data));
    } catch {
        console.log('Error!');
    }
}

export const SignIn = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signin', credentials);
        dispatch(login(data));       
    } catch {
        console.log('Error!');
    }
}

export const ThirdPartySignIn = async (dispatch, token) => {
    try {
        // api call        
        const { data } = await axiosInstance.post(`/google?token=${token}`);
        dispatch(login(data));
    } catch {
        console.log('Error!')
    }
}