// ManagerLogin.js
import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const ManagerLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        AuthService.login(username, password, 'Manager')
            .then(response => {
                console.log('Manager logged in:', response);
            })
            .catch(error => {
                console.error('Login error:', error);
            });
    };

    return (
        <div>
            <h2>Manager Login</h2><br/>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br/><br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br/><br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default ManagerLogin;