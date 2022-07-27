import React from "react";
import { Carousel } from "../Carousel/Carousel";
import ProductGrid from "../ProductGrid/ProductGrid";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.Home}>
            <h1>home page</h1>
            <Carousel />
            <ProductGrid />
        </div>
    );
};

export default Home;
