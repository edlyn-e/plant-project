import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

/*
TO DO: for mobile screens 
- make navbar categories collapsible to a hamburger menu
- make search input collapsible to a search icon 

*/

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <NavLink to="/home">
                <h1 className={styles.Nav__logo}>SHIBUI</h1>
            </NavLink>
            <div className={styles.Nav__cats}>
                <NavLink to="/all" className={styles.Nav__link}>
                    SHOP ALL
                </NavLink>
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

            <SearchBar />
        </div>
    );
};

export default Nav;
