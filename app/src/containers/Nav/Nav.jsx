// styling
import styles from "./Nav.module.scss";

// library imports
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
                <NavLink to="/" className={styles.Nav__link}>
                    HOME
                </NavLink>
                <NavLink to="/login" className={styles.Nav__link}>
                    LOG IN
                </NavLink>
                <NavLink to="/saved-items" className={styles.Nav__link}>
                    WISH LIST
                </NavLink>
                <NavLink to="/cart" className={styles.Nav__link}>
                    CART
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
