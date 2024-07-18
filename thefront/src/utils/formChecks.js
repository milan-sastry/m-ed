
const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isLong = (password) => {
    // Ensure password is a string and has a length greater than 8
    return typeof password === 'string' && password.length >= 8;
};

const hasSpecial = (password) => {
    return typeof password === 'string' && /[^A-Za-z0-9]/.test(password)
};

const hasNumber = (password) => {
    return typeof password === 'string' && /[0-9]/.test(password)
}

const isPasswordMatch = (password,confirmPassword) => password === confirmPassword && password !== '';

function validatePasswords(password,confirmPassword){
    return hasNumber(password) && isLong(password) && hasSpecial(password) && isPasswordMatch(password,confirmPassword);
}

const isValidPassword = (password) => {
    return isLong(password) && hasSpecial(password) && hasNumber(password);
};

const isValidName = (name) => {
    return name.length > 0;
};



module.exports = {
    isValidName,
    hasNumber,
    isValidPassword,
    isEmailValid,
    isLong,
    hasSpecial,
    isPasswordMatch,
    validatePasswords,
};