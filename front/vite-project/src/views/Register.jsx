// import {Formik, Field, Form, ErrorMessage} from "formik"
import { validateRegister } from "../helpers/validateRegister"
import ForForms from "../components/Forms/ForForms"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../components/Forms/Forms.module.css"
import Login from "./Login"
import { useDispatch } from "react-redux"


//Componente Padre
const Register = ({setBackground}) => {
useEffect(() => {
    setBackground("registerBack") 
}, [])

const initalValues = {
    name: "",
    email: "",
    birthdate: "", 
    nDni: "", 
    username: "", 
    password: "",
    confirmPassword:""
}
   
//Estados
const [userData, setuserData] = useState(initalValues)
const [error, setError] = useState(initalValues)



useEffect(() => {
    const error = validateRegister(userData)
    setError(error)
}, [userData])
//Funciones para manejar los inputs
const handleInput = (event) => {
    const { name, value } = event.target;
    setuserData({
        ...userData,
        [name]: value,
    });
};


const handleSubmit = async (event) =>{
    event.preventDefault();

    if(Object.keys(error).length){
        return alert("Something Missing")
    } try{
       await axios.post("http://localhost:4000/users/register",userData);
          
        return alert("Registration Completed")   
          
    } catch(err){
        alert("Error al crear usuario")
    }
}



//Lo que se renderiza
    return (
        
    <div className={styles.divForms}>
         
        <form className={styles.Form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>REGISTER</h2>
            
        <div className={styles.columnInputs}>
            <div>    
                <ForForms label ="Name" type="text" value={userData.name} name="name" placeholder="Juan Perez" onChange={handleInput}
                />{error.name && <p className={styles.errors}>{error.name}</p>}
                 
                <ForForms label ="Email" type="text" value={userData.email} name="email" placeholder="juanPe@mail.com" onChange={handleInput}
                /> {error.email && <p className={styles.errors}>{error.email}</p>}
               
                <ForForms label ="Birthdate" type="date" value={userData.birthdate} name="birthdate" placeholder="13/07/1996" onChange={handleInput}
                />{error.birthdate && <p className={styles.errors}>{error.birthdate}</p>}
            </div>
            <div>
                <ForForms label ="nDni" type="number" value={userData.nDni} name="nDni" placeholder="37769359" onChange={handleInput}
                />{error.nDni && <p className={styles.errors}>{error.nDni}</p>}
                
                <ForForms label ="Username" type="text" value={userData.username} name="username" placeholder="Agusdor96" onChange={handleInput}
                />{error.username && <p className={styles.errors}>{error.username}</p>}
                 
                <ForForms label ="Password" type="password" value={userData.password} name="password" placeholder="*********" onChange={handleInput}
                />{error.password && <p className={styles.errors}>{error.password}</p>}
            </div>
        </div>
                <ForForms label ="Confirm Password" type="password" value={userData.confirmPassword} name="confirmPassword" placeholder="*********" onChange={handleInput}
                />{error.confirmPassword && <p className={styles.errors}>{error.confirmPassword}</p>}

                <button className={styles.Button} disabled={!userData.confirmPassword} >Submit</button>
        </form>
        <Login/>
    </div>
    )
}

export default Register


