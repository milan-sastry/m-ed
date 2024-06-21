
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Root: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignUp = () => {
        navigate('/signup');
    }

    return (
        <div>
            <img src="logo.webp" alt="Logo" style={{ display: 'block', margin: '0 auto' }} />
            <button onClick={handleLogin} style={{ width: '200px', height: '80px', margin: '10px', fontSize: '24px' }}>Login</button>
            <button onClick={handleSignUp} style={{ width: '200px', height: '80px', margin: '10px', fontSize: '24px' }}>Join Now</button>
        </div>
    );
};

export default Root;
