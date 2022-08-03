// styling
import styles from "./SearchBar.module.scss";

// library imports
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

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
                <button className={styles.SearchBar__submit}>
                    <FaSearch />
                </button>
            </div>
        </>
    );
};

export default SearchBar;
