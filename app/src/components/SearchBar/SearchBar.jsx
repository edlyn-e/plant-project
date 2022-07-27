import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
    return (
        <div className={styles.SearchBar}>
            <input type="text" className={styles.SearchBar__input} />
            <input
                placeholder="What are you looking for?"
                type="submit"
                value="Go"
                className={styles.SearchBar__submit}
            />
        </div>
    );
};

export default SearchBar;
