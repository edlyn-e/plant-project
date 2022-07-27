import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Nav from "./containers/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <div>
                    <Nav />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
