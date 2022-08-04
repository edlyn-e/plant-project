// styling
import styles from "./ProductGrid.module.scss";

// library imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// local pages
import ProductCard from "../../components/ProductCard/ProductCard";
import Sorting from "../../components/Sorting/Sorting";
import { getProducts } from "./../../services/server";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);

    // Accessing products from "app\src\services\products.js"
    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {/* TODO: set a loading state so that the user doesn't see the error message right away whilst waiting for the products to load */}
            <section className={styles.ProductGrid__options}></section>
            <Sorting />

            <section className={styles.ProductGrid}>
                {products.length > 0 &&
                    products.map((item) => {
                        const { id, name, price, images } = item;

                        return (
                            <Link to={`product/${id}`} key={id}>
                                <ProductCard
                                    productName={name}
                                    productPrice={price}
                                    productImages={images}
                                />
                            </Link>
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
