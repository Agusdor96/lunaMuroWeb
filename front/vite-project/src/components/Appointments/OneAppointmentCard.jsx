import { useDispatch, useSelector } from "react-redux"
import styles from "./OneCard.module.css"
import axios from "axios"
import { cancelAppointment } from "../../redux/reducer"
import { canCancelAppointment} from "../../helpers/validateCancelation"

const OneAppointmentCard = (props) => {
    const {shifts} = props

    const dispatch = useDispatch()

    const cancelAppoint = async() =>{
        try{
            await axios.put(`http://localhost:4000/appointments/cancel/${shifts.id}`);
            dispatch(cancelAppointment(shifts.id))
        } catch{
            console.log("Error cancelling appointment");
        }
    }

    const isCancellable = canCancelAppointment(shifts.date);

    return (
        <>
        
            <div className={styles.container}>
                <h1 className={styles.title}>Appointment</h1>
                <p>Date: {shifts.date}</p>
                <p>Time: {shifts.time}</p>
                <p>Status: {shifts.status}</p>

                <button className={styles.button} onClick={cancelAppoint} disabled={shifts.status === "cancelled" || !isCancellable}>CANCEL</button>
            </div>
        
        </>
    )
}

export default OneAppointmentCard