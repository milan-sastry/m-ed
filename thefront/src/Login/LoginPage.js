import React, {useState} from "react";
import PasswordField  from "../Components/Onboarding/PasswordField";
import ErrorDisplay from "../Components/misc/ErrorDisplay";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function LoginPage(){
    const[loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        });

    };

    const[error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            setError(null);
            const response = await axios.post('http://localhost:8000/login/', loginInfo)
            console.log(response);
            navigate('/search');

        }
        catch(error){
            setError("uh oh");
            console.error("There was an error!", error);
        }
        console.log("Login info: ", loginInfo);
    }

    const callback = () => {
        setError(null);
    }

    const canLogin = () =>{
        return loginInfo.username.trim() !== '' && loginInfo.password.trim() !== '';
    }



    return(
        <div className="relative w-full h-screen bg-med-red flex flex-col items-center space-y-8 px-4 overflow-y-scroll pt-4 pb-4">
            <div className={error ? 'absolute w-full h-full top-0 left-0 z-50' : 'hidden'}>
                <ErrorDisplay callback={callback}/>
            </div>
            <div className="flex flex-col items-center">
                <img src="/med-icon.png" alt="logo" className="w-32 h-32 sm:w-52 sm:h-52"/>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold">Welcome!</h1>
            <div className="w-full max-w-96 h-fit bg-white rounded-3xl px-6 pt-10 pb-10">
                <form className="flex flex-col items-center space-y-4 form-inputs mb-4 form-inputs">
                    <input name="username" type="text" value={loginInfo.username} placeholder="Username" onChange={handleChange}/>
                    <PasswordField name="password" value={loginInfo.password} handleChange={handleChange}/>
                    <a href="/forgotPassword" className="text-med-blue font-bold">Forgot Password?</a>
                    <button
                        className={`${canLogin() ? 'bg-med-blue':'bg-gray-300'} text-white rounded-lg w-full min-h-10 font-bold text-lg`}
                        type="button"
                        onClick={handleLogin}
                        disabled={!canLogin()}
                        >
                        Login
                    </button>
                </form>
                <div className="flex justify-center flex-col items-center">
                    <p>Don't have an account? <a href="/onboarding" className="text-med-blue font-bold">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;