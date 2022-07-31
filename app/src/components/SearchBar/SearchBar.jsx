import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductGrid from "../../containers/ProductGrid/ProductGrid";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ productList }) => {
    const [search, setSearch] = useState("");
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        setDisplayProducts(productList);
    }, [productList]);

    useEffect(() => {
        const updatedDisplayProducts = productList.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase());
        });

        setDisplayProducts(updatedDisplayProducts);
    }, [search]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    console.log("in searchbar", displayProducts);

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

            <div className={styles.SearchBar__product_grid} hidden>
                <ProductGrid products={displayProducts} />
            </div>
        </>
    );
};

export default SearchBar;
