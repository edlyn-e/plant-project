import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ products }) => {
    return (
        <div>
            <section className={styles.ProductGrid}>
                {products.map((item) => {
                    const { id, name, price, description, images } = item;

                    return (
                        <ProductCard
                            key={id}
                            productName={name}
                            productPrice={price}
                            productDescription={description}
                            productImages={images}
                        />
                    );
                })}
            </section>
        </div>
    );
};

export default ProductGrid;
