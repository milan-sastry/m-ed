import React, { useState } from 'react';

const SignUp: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [teamCode, setTeamCode] = useState('');

    const handleSignUp = () => {
        // Handle sign up logic here
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const isPasswordMatch = password === confirmPassword;

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username/Email"
                    style={{ width: '100%', fontSize: '1.5rem', marginBottom: '10px' }}
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{ width: '100%', fontSize: '1.5rem', marginBottom: '10px' }}
                />
                <br />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm Password"
                    style={{ width: '100%', fontSize: '1.5rem', marginBottom: '10px' }}
                />
                {!isPasswordMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
                <br />
                <input
                    type="text"
                    value={teamCode}
                    onChange={(e) => setTeamCode(e.target.value)}
                    placeholder="Team Code"
                    style={{ width: '100%', fontSize: '1.5rem', marginBottom: '10px' }}
                />
                <br />
                <button type="button" onClick={handleSignUp} style={{ fontSize: '1.5rem', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
