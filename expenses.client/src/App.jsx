import { React, useEffect } from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import StatisticsPage from './components/StatisticsPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { login } from './app/authenticationSlice';
import NotFoundPage from './components/NotFoundPage';
import env from 'process';

const App = () => {
    const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
    const isLoggedIn2 = sessionStorage.getItem('isLoggedIn');
    const dispatch = useDispatch();
    const token2 = sessionStorage.getItem('token');
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token !== undefined && token !== null) {
            dispatch(login(token))
        };
    }, []);

    return <Router>
        <Navbar />
        <div>token2:{token2}</div>
        <div>isLoggedIn:{isLoggedIn}</div>
        <div>isLoggedIn2:{isLoggedIn2}</div>
        <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            {isLoggedIn ? (
                <Route path="/" element={<HomePage />} />
            ) : (
                <Route path="/signin" element={<SignInPage />} />
            )}
            {isLoggedIn ? (
                <Route path="/statistics" element={<StatisticsPage />} />
            ) : (
               <Route path="/signin" element={<SignInPage />} />
            )}
        </Routes>
    </Router>

};

export default App;