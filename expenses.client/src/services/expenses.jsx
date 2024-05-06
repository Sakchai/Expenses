import { setExpenses, newExpense, editExpense, deleteExpense } from '../app/expensesSlice';
import { setDeleteExpenseError, setExpensesError, setNewExpenseError, setEditExpenseError } from '../app/errorExpensesSlice';
import axios from 'axios';

const axiosInstance = axios.create({    
    baseURL: `https://localhost:5001/expenses`,
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

export const GetExpenses = async (dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        dispatch(setExpenses(data));
    } catch (error) {
        dispatch(setExpensesError(error));
    }
}

export const NewExpense = async (dispatch, expense) => {
    try {
        // api call
        const { data } = await axiosInstance.post('', expense);
        dispatch(newExpense(data));
    } catch (error) {
        dispatch(setNewExpenseError(error));
    }
}

export const EditExpense = async (dispatch, expense) => {
    try {
        // api call
        await axiosInstance.put('', expense);
        dispatch(editExpense(expense));
    } catch (error) {
        dispatch(setEditExpenseError(error));
    }
}

export const DeleteExpense = async (dispatch, expense) => {
    try {
        // api call
        await axiosInstance.delete('', { data: { ...expense } });
        dispatch(setDeleteExpenseError(expense));
    } catch (error) {
        dispatch(setDeleteExpenseError(error));
    }
}