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
                <div className={styles.App__header}>
                    <Nav />
                    <SearchBar />
                </div>

                <section>
                    <Carousel />
                </section>

                <Routes>
                    <Route
                        path="/"
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
