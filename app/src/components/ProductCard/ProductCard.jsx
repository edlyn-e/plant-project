import React from "react";
import ProductPage from "../../containers/ProductPage/ProductPage";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({
    productName,
    productPrice,
    productDescription,
    productImages,
}) => {
    return (
        <div className={styles.ProductCard}>
            <img
                src={productImages[0]}
                alt="item cover"
                className={styles.ProductCard__image}
            />
            <p className={styles.ProductCard__name}>{productName}</p>
            <p className={styles.ProductCard__price}>${productPrice}</p>
        </div>
    );
};

export default ProductCard;
