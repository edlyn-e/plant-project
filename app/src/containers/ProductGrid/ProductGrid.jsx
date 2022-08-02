// styling
import styles from "./ProductGrid.module.scss";

// library imports
import { useEffect, useState } from "react";

// local pages
import ProductCard from "../../components/ProductCard/ProductCard";
import Sorting from "../../components/Sorting/Sorting";
import {
    getProducts,
    seedProducts,
    updateProduct,
} from "./../../services/server";

const ProductGrid = () => {
    // Accessing products from "app\src\services\products.js"
    const [products, setProducts] = useState([]);
    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <section className={styles.ProductGrid__options}></section>
            <Sorting />
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
            {/* "Seeding" the products from json file to firestore */}
            {/* <button onClick={seedProducts}>SEED</button> */}
        </div>
    );
};

export default ProductGrid;
