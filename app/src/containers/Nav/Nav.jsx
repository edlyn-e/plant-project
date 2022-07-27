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
            <NavLink to="/home" className={styles.Nav__link}>
                Home
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                SHOP ALL
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                PETITE
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                MID SIZE
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                PLUS
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                SHOES
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                ACCESSORIES
            </NavLink>
            <SearchBar />
        </div>
    );
};

export default Nav;
