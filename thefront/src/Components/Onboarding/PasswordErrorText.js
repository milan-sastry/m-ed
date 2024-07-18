import * as FormValidation from '../../utils/formChecks';



const PasswordErrorText = (password,confirmPassword) => {

    if (FormValidation.validatePasswords(password,confirmPassword) 
        || (confirmPassword.length === 0 && FormValidation.isValidPassword(password))
        
    )  {
        return null;
    }
    return (
        <div className="flex flex-col">
            <h1>Password must:</h1>
            <ul className="list-disc list-inside">
                {!FormValidation.isLong(password) && <li>Be at least 8 characters long</li>}
                {!FormValidation.hasNumber(password) && <li>Contain at least one number</li>}
                {!FormValidation.hasSpecial(password) && <li>Contain at least one special character</li>}
                {FormValidation.isValidPassword(password)
                    && !FormValidation.isPasswordMatch(password,confirmPassword) 
                    && confirmPassword.length > 0
                    && <li>Match the confirmation password</li>}
            </ul>
        </div>
    );
};

export default PasswordErrorText;