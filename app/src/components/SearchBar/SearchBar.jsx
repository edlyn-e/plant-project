// styling
import styles from "./SearchBar.module.scss";

// library imports
import { useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <div className={styles.SearchBar}>
                <input
                    className={styles.SearchBar__input}
                    type="text"
                    placeholder="What are you looking for?"
                    onChange={handleSearch}
                    value={search}
                />
                <input
                    type="submit"
                    value="Go"
                    className={styles.SearchBar__submit}
                />
            </div>
        </>
    );
};

export default SearchBar;
