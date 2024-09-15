export const validateLogin = (input) =>{
    const loginErrors = {}
    
  
        const usernameRegex =  /^[a-zA-Z0-9]{6,20}$/;
        if(input.username && !usernameRegex.test(input.username)){
            loginErrors.username = "Invalid username";
        }
        
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(input.password && !passwordRegex.test(input.password)){
            loginErrors.password = "Wrong password";
       
    }

    return loginErrors;
}

