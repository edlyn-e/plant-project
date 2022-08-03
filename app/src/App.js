// styling
import styles from "./App.module.scss";

// library imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// local pages
import SearchBar from "./components/SearchBar";
import Nav from "./containers/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Cart from "./containers/Cart/Cart";
import ProductPage from "./containers/ProductPage/ProductPage";

const App = () => {
    return (
        <div>
            <div className={styles.App}>
                <BrowserRouter>
                    <div className={styles.App__header}>
                        <Nav />
                        <SearchBar />
                    </div>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/login"
                            element={<h1>LOG IN/SIGN UP</h1>}
                        />
                        <Route
                            path="/saved-items"
                            element={<h1>SAVED ITEMS</h1>}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path={`product/:id`} element={<ProductPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
};

export default App;
