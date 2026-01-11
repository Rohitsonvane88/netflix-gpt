export const checkValidation = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);
    if (!isValidEmail) return "Email ID is not valid";
    if (!isValidPassword) return "Password is not valid";

    return null;
}