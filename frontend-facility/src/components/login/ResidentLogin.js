
import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const ResidentLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        AuthService.login(username, password, 'Resident')
            .then(response => {
                console.log('Resident logged in:', response);
            })
            .catch(error => {
                console.error('Login error:', error);
            });
    };

    return (
        <div>
            <h2>Resident Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default ResidentLogin;
