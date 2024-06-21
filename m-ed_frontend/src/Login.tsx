import React, { useState , FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (username === 'vici' && password === '123') {
            navigate('/home');
        }

    };

    const handleRegister = () => {
        // Handle register logic here
    };

    return (
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'scale(1.35)', marginTop: '55px' }} onSubmit={handleLogin}>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" style={{ fontSize: '14px', textAlign: 'center', marginBottom: '10px', width: '200px' }} />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" style={{ fontSize: '14px', textAlign: 'center', marginBottom: '10px', width: '200px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button type="submit" style={{ width: '108px', height: '33.75px', margin: '6.75px', fontSize: '16.2px' }}>Submit</button>
            </div>
        </form>
    );
};

export default LoginPage;