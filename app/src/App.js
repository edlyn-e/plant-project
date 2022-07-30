import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Nav from "./containers/Nav";
import Footer from "./components/Footer/Footer";
import { getProducts, seedProducts, updateProduct } from "./services/server";
import ProductGrid from "./containers/ProductGrid/ProductGrid";
import { Carousel } from "./containers/Carousel/Carousel";

const App = () => {
    // Accessing products from "app\src\services\products.js"
    const [products, setProducts] = useState([]);
    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };
    console.log("in Apps", products);
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className={styles.App}>
                <BrowserRouter>
                    <div className={styles.App__header}>
                        <Nav />
                        <SearchBar productList={products} />
                    </div>

                    <section>
                        <Carousel />
                    </section>

                    <Routes>
                        <Route
                            path="/"
                            element={<ProductGrid products={products} />}
                        />
                        <Route path="/login" element={<h1>LOG IN</h1>} />
                        <Route
                            path="/saved-items"
                            element={<h1>SAVED ITEMS</h1>}
                        />
                        <Route path="/cart" element={<h1>CART</h1>} />
                    </Routes>
                </BrowserRouter>
            </div>
            {/* "Seeding" the products from json file to firestore */}
            {/* <button onClick={seedProducts}>SEED</button> */}
            <Footer />
        </div>
    );
};

export default App;
