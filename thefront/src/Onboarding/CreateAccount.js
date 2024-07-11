import React, {useState} from "react";
import { PasswordErrorText } from "../Components";
import * as FormValidation from '../utils/formChecks';
import PasswordField  from "../Components/PasswordField";
import Field from "../Components/Field";
import ErrorDisplay from "../Components/ErrorDisplay";
import axios from 'axios';


function CreateAccount({onNextClick}){
    const [formData, setFormData] = useState({
        first_name: "",
        last_name:"",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setError(null);
            //throw new Error("intended test error");
            const response = await axios.post('http://localhost:8000/register/', formData)
            onNextClick();
            console.log(response);
        } catch(error){
            console.error("There was an error!", error);
            setError("uh oh");
        }
    console.log(formData);
    };

    const[error, setError] = useState(null);

    function isFormFilled() {
        const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');

        return allFieldsFilled 
                && FormValidation.validatePasswords(formData.password,formData.confirmPassword) 
                && FormValidation.isEmailValid(formData.email);
    }

    const callback = () => {
        console.log("callback");
        setError(null);
    }
   
    return (
        <div className="flex flex-col w-full bg-med-red items-center justify-start pt-2">
            <div className={error ? 'absolute w-full h-full top-0 left-0 z-50' : 'hidden'}>
                <ErrorDisplay callback={callback}/>
            </div>
            <header className={`flex w-96 justify-center ${error ? 'blur-out' : ''}`}>
                <h1 className="text-5xl font-bold text-white mb-2">Create Account</h1>
            </header>
            <form className={`flex flex-col items-center justify-center space-y-4 form-labels form-inputs bg-white w-96 pt-4 pb-4 rounded-3xl ${error ? 'blur-out' : ''}`}>
                <Field name="first_name" value={formData.first_name} placeholder="First Name"  isValid={FormValidation.isValidName(formData.first_name)} handleChange={handleChange}/>
                <Field name="last_name" value={formData.last_name} placeholder="Last Name" isValid={FormValidation.isValidName(formData.last_name)} handleChange={handleChange}/>
                <Field name="email" value={formData.email} placeholder="Email" isValid={FormValidation.isEmailValid(formData.email)} handleChange={handleChange}/>
                <div className="flex flex-col space-y-2">
                    <h1>Password</h1>
                    <PasswordField name="password" value={formData.password} isValid={FormValidation.isValidPassword(formData.password)} handleChange={handleChange}/>
                </div>
                <div className={FormValidation.isValidPassword(formData.password) ? 'flex flex-col space-y-2':'hidden'}>
                    <h1>Confirm Password</h1>
                    <PasswordField name="confirmPassword" value={formData.confirmPassword} isValid={FormValidation.validatePasswords(formData.password,formData.confirmPassword)} handleChange={handleChange}/>

                </div>
                <div className="flex flex-col space-y-2">
                    {PasswordErrorText(formData.password,formData.confirmPassword)}
                </div>
                <button
                    className={`${isFormFilled() ? 'bg-med-blue' : 'bg-gray-300'} text-white rounded-lg w-80 h-10`}
                    //onClick={handleSubmit}
                    onClick={onNextClick}
                    type="button"
                    //disabled={!FormValidation.isFormFilled()}
                    >
                    Submit
                </button>
            </form>
        </div>
    );
}


export default CreateAccount;