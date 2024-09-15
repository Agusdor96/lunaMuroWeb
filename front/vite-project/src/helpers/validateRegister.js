export const validateRegister = (input) =>{
    const registErrors = {}
    
    const nameRegex = /^[A-Za-z\s]+$/
    if(input.name && !nameRegex.test(input.name)){
        registErrors.name = "must be letters"
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(input.email && !emailRegex.test(input.email)){
        registErrors.email = "must be a valid email"
    }
    const birthDateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    if(input.birthdate && !birthDateRegex.test(input.birthdate)){
        registErrors.birthdate = "must be a date"
    }
    const nDniRegex = /^\d{8}$/
    if(input.nDni && !nDniRegex.test(input.nDni)){
        registErrors.nDni = "must be a number of at least 8 caracters"
    }

    const usernameRegex =  /^[a-zA-Z0-9]{6,20}$/;
    if(input.username && !usernameRegex.test(input.username)){
        registErrors.username = "Username must have between 6-20 characters and only accepts letters & numbers";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(input.password && !passwordRegex.test(input.password)){
        registErrors.password = "Password must have at least 8 characters, one number & one uppercase letter";
    }

    if(input.confirmPassword && input.password !== input.confirmPassword){
        registErrors.confirmPassword = "Passwords do not match"
    }

    return registErrors;

    
}