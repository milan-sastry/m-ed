

const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


const isLong = (password) => {
    // Ensure password is a string and has a length greater than 8
    return typeof password === 'string' && password.length > 8;
};

const hasSpecial = (password) => {
    return typeof password === 'string' && /[^A-Za-z0-9]/.test(password)
};

const isPasswordMatch = (password,confirmPassword) => password === confirmPassword && password !== '';

function validatePasswords(password,confirmPassword){
    return isLong(password) && hasSpecial(password) && isPasswordMatch(password,confirmPassword);
}



module.exports = {
    isEmailValid,
    isLong,
    hasSpecial,
    isPasswordMatch,
    validatePasswords,
};