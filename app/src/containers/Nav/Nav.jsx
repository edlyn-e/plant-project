import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

/*
TO DO: for mobile screens 
- make navbar categories collapsible to a hamburger menu
- make search input collapsible to a search icon 

*/

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <NavLink to="/">
                <h1 className={styles.Nav__logo}>SHIBUI</h1>
            </NavLink>
            <div className={styles.Nav__menu_items}>
                <NavLink to="/tops" className={styles.Nav__link}>
                    TOPS
                </NavLink>
                <NavLink to="/bottoms" className={styles.Nav__link}>
                    BOTTOMS
                </NavLink>
                <NavLink to="/outerwear" className={styles.Nav__link}>
                    OUTERWEAR
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
