import * as FormValidation from '../utils/formChecks';

const PasswordErrorText = (password,confirmPassword) => {

    if (FormValidation.validatePasswords(password,confirmPassword)) {
        return null;
    }
    return (
        <div className="flex flex-col">
            <h1>Password must:</h1>
            <ul className="list-disc list-inside">
                {!FormValidation.isLong(password) && <li>Be at least 8 characters long</li>}
                {!FormValidation.hasSpecial(password) && <li>Contain at least one special character</li>}
                {FormValidation.isLong(password) 
                    && FormValidation.hasSpecial(password) 
                    && !FormValidation.isPasswordMatch(password,confirmPassword) 
                    && <li>Match the confirmation password</li>}
            </ul>
        </div>
    );
};

export default PasswordErrorText;