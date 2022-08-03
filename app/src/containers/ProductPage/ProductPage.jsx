// styling
import styles from "./ProductPage.module.scss";

// library imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// local
import { getProducts } from "../../services/server";

const ProductPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    const getItem = async (id) => {
        const info = await getProducts();

        console.log("info", info);

        setItem(info);
    };

    console.log("in product page, trying to get productID", id);
    console.log("in product page, this is item ->", item);

    useEffect(() => {
        getItem();
    }, []);

    return (
        <div className={styles.ProductPage}>
            <h1>Item Name</h1>
            <h1>{item.name}</h1>
        </div>
    );
};

export default ProductPage;
