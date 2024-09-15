import React, { useState } from "react";
import NavmoduleStyles from "./NavBar.module.css"
import titleStyle from "../Titles/Titles.module.css"
import NavLink from "./NavLink";
import Titles from "../Titles/Titles"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';




const NavBar = () => {
    const userData = useSelector((state) => state.userData)
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (

        <div className= {NavmoduleStyles.navBar}>
            <img src="/logo.jpg" alt="LogoApp" className={NavmoduleStyles.logo}/>
            <Link to="/" className={titleStyle.title}>"LA LUNA MURO"</Link> 
            {userData.name ? (   
                <div className={NavmoduleStyles.navBarLinks}>
                    <NavLink pathName="/" text="Home"/>
                    <NavLink pathName="/contact" text="Contact"/>
                    <div className={NavmoduleStyles.userMenu}>
                        <FontAwesomeIcon icon={faUser} onClick={handleDropdownToggle} className={NavmoduleStyles.userIcon} />
                        {isDropdownOpen && (
                        <div className={NavmoduleStyles.dropdownMenu}>
                            <NavLink pathName="/profile" text="My Profile"/>
                            <NavLink pathName="/My appointments" text="My appointments" />
                        </div>
                        )}
                    </div>
                </div> 
                ) : ( 
                 
                <div className={NavmoduleStyles.navBarLinks}>
                <NavLink pathName="/" text="Home"/>
                <NavLink pathName="/register" text="Register"/>
                <NavLink pathName="/contact" text="Contact"/>
                </div>)
            }
        </div>
    );
};

export default NavBar