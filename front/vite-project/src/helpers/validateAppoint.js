export const validateAppointSchema = (input) => {
    const appointErrors = {}

    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    
    if(!input.date){
        appointErrors.date = "Date is required"
    }

    if(input.time && !timeRegex.test(input.time)){
        appointErrors.time = "Time is required"
    }
    
    return appointErrors;
}