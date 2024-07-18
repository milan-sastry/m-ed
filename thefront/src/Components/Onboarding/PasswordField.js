import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordField({name,value,isValid,handleChange}){

    // false = password is hidden, true = password is visible
    const [passwordView, setPasswordView] = useState(false);

    return (
        <div className="relative flex items-center w-full">
            <input
                id={name}
                className="w-full pr-10" // Add padding to prevent text from being hidden behind the icon
                type={passwordView ? 'text' : 'password'}
                name={name}
                placeholder={name === "password" ? "Password" : "Confirm Password"}
                value={value}
                onChange={handleChange}
            />
            <button
                className="absolute right-2" // Position the button on the far right inside the input
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => {
                    setPasswordView(!passwordView);
                }}
            >
                {!passwordView ? <FaEye /> : <FaEyeSlash />}
            </button>
        </div>
    );
}

export default PasswordField;