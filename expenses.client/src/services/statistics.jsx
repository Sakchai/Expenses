import axios from 'axios';
import { setExpenseAmountPerCategory } from '../app/statisticsSlice';


const axiosInstance = axios.create({
    baseURL: `https://localhost:5001/statistics`,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        const email = sessionStorage.getItem('email'); 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (email) {
            config.headers.Email = email; // Set the email in the headers
        }
        return config;
    },
    (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            // Implement token refresh logic here
            return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    }
);

export const getExpensesPerCategory = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get();
        dispatch(setExpenseAmountPerCategory(data));
    } catch (error) {
        dispatch(setError('Failed to fetch expenses per category'));
        console.error('Error fetching expenses per category:', error);
    }
}