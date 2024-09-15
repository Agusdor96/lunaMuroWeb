import { useEffect, useState } from "react"
import ForForms from "../components/Forms/ForForms"   
import { validateLogin } from "../helpers/validateLogin"
import styles from "../components/Forms/Forms.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logInUser } from "../redux/reducer"


//Componente Padre
const Login = () => {
//Estados
const [userLogin, setuserLogin] = useState({username:"", password:""})
const [errors, setErrors] = useState({username:"", password:""})


const dispatch = useDispatch();
const navigate = useNavigate()


//hookPara los errores
useEffect(()=>{
    const errors = validateLogin(userLogin)
    setErrors(errors)
}, [userLogin])

//Funciones para manejar los inputs
const handleInputChange = (event) => {
    const {name, value} = event.target;
    setuserLogin({
        ...userLogin,
        [name]:value,
    })
} 

const handleOnSubmit = async (event) => {
    event.preventDefault()

    if(Object.keys(errors).length > 0){
        return alert ("All fields are required")
    } 
    try{
        const response = await axios.post("http://localhost:4000/users/login", userLogin);
        dispatch(logInUser(response.data.user))
        alert("Login Completed")
        navigate("/My Appointments")
       
    } catch(err){
        alert("Invalid credentials")
    }

}

//Lo que se renderiza (formulario)
    return (
            <form className={styles.FormLogin} onSubmit={handleOnSubmit}>
                <h2 className={styles.title}>LOGIN</h2>
                <div >
                <ForForms label ="Username" type="text" value={userLogin.username} name="username" placeholder="Agusdor96" onChange={handleInputChange}
                />
                {errors.username && <p className={styles.errors}>{errors.username}</p>} 

                <ForForms label ="Password" type= "password" value={userLogin.password} name="password" placeholder="*********"  onChange={handleInputChange}
                />
                 {errors.password && <p className={styles.errors}>{errors.password}</p>}

                </div>

                <button className={styles.LoginButton} disabled={Object.keys(errors).length > 0 || !userLogin.password || !userLogin.username} >Submit</button>
            </form>
    )
}

export default Login