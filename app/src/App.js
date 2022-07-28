import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Nav from "./containers/Nav";
import Footer from "./components/Footer/Footer";
import { getProducts, seedProducts, updateProduct } from "./services/server";
import Product from "./components/Product/Product";
import ProductGrid from "./containers/ProductGrid/ProductGrid";

const App = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <div>
                    <Nav />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/all-products"
                            element={<ProductGrid products={products} />}
                        />
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
