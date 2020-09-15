import React from 'react';
import s from './Header.module.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.svg";


const Header = (props) => {

    const homeIcon = <FontAwesomeIcon icon={faHome} />
    
    return (
        
        <div className={s.containerWide + ' ' + s.containerHeader}>
        <div className={s.headerTop}>
            <div className={s.headerLogo}><a href="/"><img src={logo} alt="" title="Tetle logo" className={s.imgResponsive}/></a></div>

            <div className={s.headerMenuDesktop}>
            </div>
            <button className={s.buyReport}>Login</button>
        </div>
    </div>
        
    )
}

export default Header;


