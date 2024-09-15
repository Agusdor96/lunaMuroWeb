import { useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import OneAppointmentCard from "../components/Appointments/OneAppointmentCard"
import styles from "../components/Appointments/viewAppointments.module.css"
import { AppointmentForm } from "./AppointmentForm"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import titleStyle from "../components/Titles/Titles.module.css"
import { getUserAppoint } from "../redux/reducer"


const MisTurnos = ({setBackground}) => {
    useEffect(() => {
        setBackground("misTurnosBack")
    }, [])

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const userData = useSelector((state) => state.userData)
    const appointArray = useSelector((state) => state.userAppointment)
   

 useEffect( () => {

    const fetchData = async() => {
        try{
            const response = await axios.get(`http://localhost:4000/users/${userData.id}`)
            dispatch(getUserAppoint(response.data.appointment))
           
        } catch (err) {
            console.log("Error getting appointments");
        } 
    }
    !userData.name ? navigate("/") : fetchData()

}, [])

// 

    return (
        <div className={styles.container}>
            <p className={titleStyle.title}>User Loged is: {userData.name}</p>

            <AppointmentForm />
            <div className={styles.appointments}>
            {
            appointArray.length ? (
            appointArray.map((shift) => {
               return <OneAppointmentCard key={shift.id} shifts={shift}/>
                }))
            : (<div>No Appointments yet</div>)
            }
            </div>
        </div>

    )
}

export default MisTurnos

