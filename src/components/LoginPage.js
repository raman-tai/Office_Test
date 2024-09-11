import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest, clearState } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, userType, error } = useSelector((state) => state.auth);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(authRequest({ username, password }));
    };


    if (isAuthenticated) {
        if (userType === 'admin') {
            navigate('/admin');
        } else if (userType === 'user') {
            navigate('/user');
        }
    }

    useEffect(() => {
        dispatch(clearState());
    }, [dispatch]);


    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
