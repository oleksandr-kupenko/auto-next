import React from 'react';
import s from './Header.module.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.svg";


const Header = (props) => {
  debugger  
    const homeIcon = <FontAwesomeIcon icon={faHome} />
    
    return (
        
        <div className={s.containerWide + ' ' + s.containerHeader}>
        <div className={s.headerTop}>
            <div className={s.headerLogo}><a href="/"><img src={logo} alt="" title="Tetle logo" className={s.imgResponsive}/></a></div>

            <div className={s.headerMenuDesktop}>
                    <nav>
                        <ul>
                            
                           {/* <li className="first"><NavLink to="/">{homeIcon}</NavLink></li>
                            
                            
                             <li><NavLink to="/">Пример отчета</NavLink></li>
                            <li><NavLink to="/">Как проверить авто?</NavLink></li>
                            <li><NavLink to="/">Страница 3</NavLink></li>
                            <li><NavLink to="/">Страница 4</NavLink></li>
                            <li className={s.last}><NavLink to="/">Справка</NavLink></li> */}
                        </ul>
                </nav>
            </div>
            <button className={s.buyReport}>Login</button>
        </div>
    </div>
        
    )
}

export default Header;


