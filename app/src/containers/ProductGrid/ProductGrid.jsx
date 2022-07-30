import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ products }) => {
    console.log("in products", products);

    /*
    I want to render the products list from search bar here.
    How to await something that has already been fetched?
    */

    return (
        <div>
            <section className={styles.ProductGrid}>
                {products.length > 0 &&
                    products.map((item) => {
                        const { id, name, price, images } = item;

                        return (
                            <ProductCard
                                key={id}
                                productName={name}
                                productPrice={price}
                                productImages={images}
                            />
                        );
                    })}
                {products.length === 0 && (
                    <p>
                        Sorry! Looks like we don't stock that item. If you'd
                        like to see it in our store, please let us know!
                    </p>
                )}
            </section>
        </div>
    );
};

export default ProductGrid;
