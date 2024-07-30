import {ReactComponent as Google} from "../assets/google-icon.svg"
import {ReactComponent as Mail} from "../assets/mail.svg"
import {auth,googleProvider} from "../utils/firebase"
import { signInWithPopup } from "firebase/auth"
import { useState } from "react";

const handleGoogleSignUp = async () => {
    try{
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
    }
    catch(error){
        console.error("There was an error signing up with Google", error);
    }

}



const ChooseMethod = () => {
    return (
        <div className="flex flex-col rounded-xl bg-white p-4 w-full max-w-md space-y-3 pt-6">
            <h1 className="text-3xl sm:text-4xl font-semibold pb-4">Join m-ed</h1>
            <button className="flex items-center border border-gray-300 rounded-xl p-1 relative w-full justify-center"
            onClick={handleGoogleSignUp}>
                <Google className="w-4 h-4 absolute left-2"/>
                <p className="whitespace-nowrap truncate">Sign up with Google</p>
            </button>
            <a className="flex items-center border border-gray-300 rounded-xl p-1 relative w-full justify-center"
            href="/email-sign-up">
                <Mail className="w-5 h-5 absolute left-2"/>
                <p className="whitespace-nowrap truncate">Sign up with Email</p>
            </a>
            <a className="flex items-center border border-gray-300 rounded-xl p-1 relative w-full justify-center"
            href="/mentor-sign-up">
                <p className="whitespace-nowrap truncate">Sign up as a mentor</p>
            </a>

            <p className="pt-4">
                Already have an account? <a href="/login" className="text-med-blue font-bold">Login</a>
            </p>
        </div>

    );
}

const AccessCode = ({callback}) => {
    const [code, setCode] = useState("");

    const handleChange = (e) => {
        setCode(e.target.value);
        console.log(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter"){
            handleAccessCode(e);
        }
    }

    const handleAccessCode = () => {
        if (code === "123456") {
            callback(true);
        }
        else{
            alert("Invalid access code");
        }
    
    }

    return (
        <div className="flex flex-col rounded-xl bg-white p-4 w-full max-w-md space-y-3 pt-6">
            <h1 className="text-3xl sm:text-4xl font-semibold pb-2">Join m-ed</h1>
            <input type="text" placeholder="Access Code" className="border border-gray-300 rounded-xl p-2 focus:outline-none"
            onChange={handleChange} onKeyDown={handleKeyDown}/>
            <button className="bg-med-blue text-white rounded-xl p-1 w-full"
            onClick={handleAccessCode}>Next</button>
        </div>
    );
}





function SignUp() {
    const [isCodeValid, setIsCodeValid] = useState(false);
    return (
        <div className="flex bg-med-red fixed w-full h-full justify-center items-center p-1">
            {!isCodeValid ? (<AccessCode callback={setIsCodeValid}/>) : (<ChooseMethod/>)}
        </div>
        
    );
}

export default SignUp;