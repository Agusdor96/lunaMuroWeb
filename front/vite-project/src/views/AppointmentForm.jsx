import ForForms from "../components/Forms/ForForms"
import styles from "../components/Forms/Forms.module.css"
import {validateAppointSchema} from "../helpers/validateAppoint"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { createAppointment } from "../redux/reducer"
import { validateTimeAndDate } from "../helpers/validateTimeAndDate"

export const AppointmentForm = () => {
//Me traigo al estadoGlobal de user
const dispatch = useDispatch();
const userData = useSelector((state)=> state.userData);

const initialValues = {
    date:"",
    time:""
}    
//estados
const [userInput, setUserInput] = useState(initialValues)
const [error, setError] = useState(initialValues)
const [validationError, setValidationError] = useState("");

useEffect(() =>{
    const error = validateAppointSchema(userInput);
    setError(error)
}, [userInput])


const handleInputChange = (event) => {
    const {name, value} = event.target;

    setUserInput({
        ...userInput,
        [name]:value
    })
}


const handleOnSubmit = async (event) =>{
    event.preventDefault()

    const timeAndDateError = validateTimeAndDate(userInput.date, userInput.time);
    if (timeAndDateError) {
        return setValidationError(timeAndDateError);
    }

    if (Object.values(error).length > 0 || !userInput.date || !userInput.time) {
        return alert("All fields are required")
    }
    try{
        const response = await axios.post("http://localhost:4000/appointments/schedule", {
                ...userInput,
                userId: userData.id
            });
           
        dispatch(createAppointment(response.data));
    
        return alert(`Appointment created for date${userInput.date} at ${userInput.time}`)
    } catch (err){
        alert("No user was found")
    }
}
    return (
        <form onSubmit={handleOnSubmit} className={styles.appointForm}>
            <h2 className={styles.title}>Create your Appointment</h2>
            <div >
            <ForForms label ="DATE" type="date" value={userInput.date} name="date" placeholder="16/07/2024" onChange={handleInputChange}
                /> {error.date && <p className={styles.errors}>{error.date}</p>} 
                
            <ForForms label ="TIME" type="time" value={userInput.time} name="time" placeholder="16pm" onChange={handleInputChange}
                /> {error.time && <p className={styles.errors}>{error.time}</p>} 

            </div>  
            {validationError && <p className={styles.errors}>{validationError}</p>}
            <button className={styles.appointButton} disabled={Object.values(error).length > 0 || !userInput.date || !userInput.time}>Submit</button>   
        </form>
            
    )
    }
    
    