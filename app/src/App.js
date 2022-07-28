import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Nav from "./containers/Nav";
import Footer from "./components/Footer/Footer";
import { getProducts, seedProducts, updateProduct } from "./services/server";
import ProductGrid from "./containers/ProductGrid/ProductGrid";

const App = () => {
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
        <div className={styles.App}>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/all"
                        element={<ProductGrid products={products} />}
                    />
                    <Route path="/tops" element={<h1>Tops</h1>} />
                    <Route path="/bottoms" element={<h1>Bottoms</h1>} />
                    <Route path="/outerwear" element={<h1>Outerwear</h1>} />
                </Routes>

                {/* <button onClick={seedProducts}>SEED</button> */}
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
