// styling
import styles from "./Nav.module.scss";

// library imports
import { NavLink } from "react-router-dom";
import { FaHome, FaHeart, FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <NavLink to="/">
                <h1 className={styles.Nav__logo}>SHIBUI</h1>
            </NavLink>
            <div className={styles.Nav__menu_items}>
                <NavLink to="/" className={styles.Nav__link}>
                    <FaHome />
                </NavLink>
                <NavLink to="/login" className={styles.Nav__link}>
                    <BsFillPersonFill />
                </NavLink>
                <NavLink to="/saved-items" className={styles.Nav__link}>
                    <FaHeart />
                </NavLink>
                <NavLink to="/cart" className={styles.Nav__link}>
                    <FaShoppingCart />
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
