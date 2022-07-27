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
                HOME
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                SHOP ALL
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                CATEGORY 1
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                CATEGORY 2
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                CATEGORY 3
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                CATEGORY 4
            </NavLink>
            <NavLink to="/" className={styles.Nav__link}>
                CATEGORY 5
            </NavLink>

            <SearchBar />
        </div>
    );
};

export default Nav;
