import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"
const NavLink = ({pathName ,text})=> {
return (

    <label >
        <ul className={styles.navLinks}>
            <li>
                <Link to={pathName}>{text}</Link>
            </li>
        </ul>    
    </label>
)
}

export default NavLink