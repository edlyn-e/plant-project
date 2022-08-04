// styling
import styles from "./ProductPage.module.scss";

// library imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// local
import { getProductByID } from "../../services/server";

const ProductPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    const getItem = async () => {
        const info = await getProductByID(id);
        setItem(info);
    };

    console.log("in product page, trying to get productID", id);
    console.log("in product page, this is item ->", item);

    useEffect(() => {
        getItem();
    }, []);

    return (
        <div className={styles.ProductPage}>
            <h1>{item.name}</h1>
        </div>
    );
};

export default ProductPage;
