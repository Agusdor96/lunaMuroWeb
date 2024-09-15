import {Routes, Route} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../../views/Home";
import Register from "../../views/Register";
import Contact from "../../views/Contact";
import MisTurnos from "../../views/MisTurnos";
import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "../../views/Login";
import MyProfile from "../../views/MyProfile";


function App() {

  
  //Estado para renderizar el background segun la vista
  const [ backImage, setBackImage] = useState("homeBack")
  const appStyles = [backImage, "appDiv"]
  

  return (
    <div className={appStyles.join(" ")}>
      <NavBar />
      <Routes>
        <Route path="/My Appointments" element={<MisTurnos setBackground={setBackImage}/>}/>
        <Route path="/" element={<Home setBackground={setBackImage}/>}/>
        <Route path="/register" element={<Register setBackground={setBackImage}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<MyProfile/>}/>

      </Routes> 
    </div>
  );
}

export default App



  // const isRegister = false;
  {/* <AllCharacters /> */}
    
  
  {/* <Login/> */}
  {/* {isRegister ? <Login/> : <Register/>} */}