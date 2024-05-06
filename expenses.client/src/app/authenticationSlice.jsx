import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: sessionStorage.getItem('token') || null,
        email: sessionStorage.getItem('email') || null,
        isLoggedIn: sessionStorage.getItem('isLoggedIn') || false,
    },
    reducers: {
        login(state, action) {
            state.token = action.payload;
            state.isLoggedIn = true;
            console.log(action.payload);
            console.log('password:' + action.payload.password);
            console.log('email:' + action.payload.email);
            sessionStorage.setItem('token', action.payload.password);
            sessionStorage.setItem('isLoggedIn', true);
            sessionStorage.setItem('email', action.payload.email);
            console.log('isLoggedIn:' + sessionStorage.getItem('isLoggedIn'))
        },
        logout(state) {
            state.token = null;
            state.isLoggedIn = false;
            sessionStorage.removeItem('token'); 
            sessionStorage.removeItem('isLoggedIn'); 
            sessionStorage.removeItem('email'); 
        }
    }
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;