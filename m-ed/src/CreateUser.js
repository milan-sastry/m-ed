import React, {useState} from "react";
import { PasswordErrorText } from "./Components/Passwords";
import * as FormValidation from './utils/formChecks';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import axios from 'axios';
// If validations are specific to PasswordErrorText, they can be moved inside it.




function CreateUser({onNextClick}){
    const [formData, setFormData] = useState({
        first_name: "",
        last_name:"",
        email: "",
        password: "",
        confirmPassword: "",
    });

    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const[error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        
        try {
            setError(null);
           // throw new Error("intended test error");
            //const response = await axios.post('http://localhost:8000/register/', formData)
            onNextClick();
            // console.log(response);
        } catch(error){
            console.error("There was an error!", error);
            setError("uh oh");
        }
        
        console.log(formData);
    };


    function ErrorDisplay() {
        if (error) {
            return (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
                    <div className="flex flex-col space-y-4 bg-yellow-300 p-4 w-96 h-64 rounded-lg shadow-lg items-center justify-center">
                        <h1 className="text-black text-3xl font-extrabold">Error: {error}</h1>
                        <button className="bg-med-red text-white rounded-lg pl-2 pr-3 h-8 flex items-center justify-center space-x-2" onClick={() => setError(null)}>
                            <span>Close</span>
                        </button>
                        <button className="bg-med-red text-white rounded-lg pl-2 pr-3 h-8 flex items-center justify-center space-x-2" 
                        onClick={() => {
                            setError(null)
                            window.location.reload();
                        }}>
                            <span>Reload</span>
                        </button>

                    </div>
                </div>
            );
        } else return null;
    }

    const isFieldFilled = (fieldName) => {
        return formData[fieldName] ? true : false;
    };

    function canSubmit(formData) {
        const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');

        return allFieldsFilled 
                && FormValidation.validatePasswords(formData.password,formData.confirmPassword) 
                && FormValidation.isEmailValid(formData.email);
    }

    function PasswordField(name){

        // false = password is hidden, true = password is visible
        const [passwordView, setPasswordView] = useState(false);
    
        return (
        <div className="relative flex items-center">
            <input
                id={name}
                className={`${FormValidation.validatePasswords(formData.password,formData.confirmPassword) ? 'bg-green-100' : 'border-gray-200'} border w-full pr-10`} // Add padding to prevent text from being hidden behind the icon
                type="password"
                name={name}
                placeholder={name === "password" ? "Password" : "Confirm Password"}
                value={name === "password" ? formData.password : formData.confirmPassword}
                onChange={handleChange}
                />
                <button
                    className="absolute right-2" // Position the button on the far right inside the input
                    type="button"
                    aria-label="Toggle password visibility"
                    onClick={() => {
                        const input = document.getElementById(name);
                        const isPassword = input.type === 'password';
                        input.type = isPassword ? 'text' : 'password';
                        setPasswordView(isPassword);
                    }}
                >
                    {!passwordView ? <FaEye /> : <FaEyeSlash />}
                </button>
        </div>);
    }

   

    return (
        <div className="flex flex-col w-full bg-med-red items-center justify-start pt-2">
            <div className={error ? 'absolute w-full h-full top-0 left-0 z-50' : 'hidden'}>
                <ErrorDisplay />
            </div>
            <header className={`flex w-96 justify-center ${error ? 'blur-out' : ''}`}>
                <h1 className="text-5xl font-bold text-white mb-2">Create Account</h1>
            </header>
            <form className={`flex flex-col items-center justify-center space-y-4 form-labels form-inputs bg-white w-96 pt-4 pb-4 rounded-3xl ${error ? 'blur-out' : ''}`} onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                    <h1>First Name</h1>
                    <input
                        className={` ${isFieldFilled("first_name") ? 'bg-green-100' : 'border-gray-200'} border`}
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <h1>Last Name</h1>
                    <input
                        className={`${isFieldFilled("last_name") ? 'bg-green-100' : 'border-gray-200'} border`}
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <h1>Email</h1>
                    <input
                        className={`${FormValidation.isEmailValid(formData.email) ? 'bg-green-100' : 'border-gray-200'} border`}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <h1>Password</h1>
                    {PasswordField("password")}
                </div>
                <div className={FormValidation.isLong(formData.password) && FormValidation.hasSpecial(formData.password) ? 'flex flex-col space-y-2':'hidden'}>
                    <h1>Confirm Password</h1>
                    {PasswordField("confirmPassword")}
                </div>
                <div className="flex flex-col space-y-2">
                    {PasswordErrorText(formData.password,formData.confirmPassword)}
                </div>
                <button
                    className={`${canSubmit(formData) ? 'bg-med-blue' : 'bg-gray-300'} text-white rounded-lg w-80 h-10`}
                    type="submit"
                    //disabled={!FormValidation.canSubmit()}
                    >
                    Next
                </button>
            </form>
        </div>
    );
}


export default CreateUser;