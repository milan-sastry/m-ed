import React, {useState} from "react";
import PasswordErrorText from "../Components/Onboarding/PasswordErrorText";
import * as FormValidation from '../utils/formChecks';
import PasswordField  from "../Components/Onboarding/PasswordField";
import ErrorDisplay from "../Components/misc/ErrorDisplay";
import axios from 'axios';


function CreateAccount({onNextClick}){
    const [formData, setFormData] = useState({
        first_name: "",
        last_name:"",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        e.target.checkValidity()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setError(null);
            if (!isValidUsername(formData.username)){
                setError("Username is already taken");
                return;

            }
        } catch(error){
            console.error("There was an error!", error);
            setError("uh oh");
        }

        
        try {
            setError(null);
            //throw new Error("intended test error");
            // const response = await axios.post('http://localhost:8000/register/', formData)
            onNextClick();
            //console.log(response);
        } catch(error){
            console.error("There was an error!", error);
            setError("uh oh");
        }

    };

    const[error, setError] = useState(null);

    function isFormFilled() {
        const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');

        return allFieldsFilled 
                && FormValidation.validatePasswords(formData.password,formData.confirmPassword) 
                && FormValidation.isEmailValid(formData.email);
    }

    const callback = () => {
        setError(null);
    }

    const isValidUsername = async (username) => {
        try{
            setError(null);
            const response = await axios.post('http://localhost:8000/check_user_exists/',username);
            console.log(response);
            return response.data.exists;
        }
        catch{
            console.error("There was an error!", error);
            setError("uh oh");
        }
        
    };
   
    return (
        <div className="onboarding-container">
            <div className={error ? 'absolute w-full h-full top-0 left-0 z-50' : 'hidden'}>
                <ErrorDisplay callback={callback}/>
            </div>
            <header className={`flex justify-center ${error ? 'blur-out' : ''}`}>
                <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Create Account</h1>
            </header>
            <form className={`onboarding-form form-inputs ${error ? 'blur-out' : ''}`}>
                <h1>First Name</h1>
                <input name="first_name" type="text" value={formData.first_name} placeholder="First Name" onChange={handleChange}/>
                <h1>Last Name</h1>
                <input name="last_name" type='text' value={formData.last_name} placeholder="Last Name" onChange={handleChange}/>
                <h1>Username</h1>
                <input name="username" type='text' value={formData.username} placeholder="Username" onChange={handleChange}/>
                <h1>Email</h1>
                <input name="email" type='email' value={formData.email} placeholder="Email" onChange={handleChange} />
                <div className="flex flex-col space-y-2 w-full">
                    <h1>Password</h1>
                    <PasswordField name="password" value={formData.password} handleChange={handleChange}/>
                </div>
                <div className={FormValidation.isValidPassword(formData.password) ? 'flex flex-col space-y-2 w-full':'hidden'}>
                    <h1>Confirm Password</h1>
                    <PasswordField name="confirmPassword" value={formData.confirmPassword} handleChange={handleChange}/>
                </div>
                <div className="flex flex-col space-y-2 w-full items-center">
                    {PasswordErrorText(formData.password,formData.confirmPassword)}
                </div>
                <button
                    className={`${isFormFilled() ? 'bg-med-blue' : 'bg-gray-300'} text-white rounded-lg w-full min-h-10`}
                    onClick={handleSubmit}
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