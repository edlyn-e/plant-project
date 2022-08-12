// styling
import styles from "./ProductInput.module.scss";

// library imports
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

// local
import { getProductByID } from "../../services/server";
import { CartContext } from "../../context/CartContext";

const ProductInput = ({ product }) => {
    // see what the component has access to, to save time/processing on API calls.
    const { id } = useParams();
    const { cart, setCart } = useContext(CartContext);
    const [stock, setStock] = useState(0);
    const [qty, setQty] = useState(1);

    const [sizeButton, setSizeButton] = useState([]);
    const [size, setSize] = useState("select");

    const [wishlist, setWishlist] = useState(false);

    const getSizeButton = async () => {
        const info = await getProductByID(id);
        const sizes = info.size;
        setSizeButton(sizes);
    };

    const handleClick = (e) => {
        setSize(e.target.value);
    };

    const handleIncrement = () => {
        setQty((qty) => qty + 1);
        if (qty > stock) {
            alert(
                "Oops! Sorry, we don't have that much at the moment. For bulk orders, please contact us directly.",
            );
        }
    };

    const handleDecrement = () => {
        if (qty <= 0) return;

        setQty((qty) => qty - 1);
    };

    // adding things to cart
    const addToCart = () => {
        if (qty > stock) {
            alert(
                "Oops! Sorry, we don't have that much at the moment. For bulk orders, please contact us directly.",
            );
            return;
        }

        if (size === "select") {
            alert("please select a size");
            return;
        }

        const name = product.name;
        const price = product.price;

        // copy of the existing cart array
        const copyOf = [...cart];
        const newItem = { name, price, qty, size, id };

        const exists = cart.some((item) => {
            if (item.name === newItem.name && item.size === newItem.size) {
                return true;
            }
            return false;
        });

        const index = cart.map((item) => item.size).indexOf(newItem.size);

        if (exists) {
            copyOf[index].qty += qty;
        } else copyOf.push(newItem);

        console.log("copy of", copyOf);
        setCart(copyOf);
    };

    const toggleWishlist = () => {
        setWishlist((wishlist) => !wishlist);
    };

    useEffect(() => {
        getSizeButton();
    }, []);

    useEffect(() => {}, [wishlist]);

    return (
        <div>
            <p>Select size:</p>
            {sizeButton.map((btn) => {
                return (
                    <button
                        key={btn}
                        value={btn}
                        onClick={handleClick}
                        className={styles.ProductInput__sizes}
                    >
                        {btn}
                    </button>
                );
            })}
            <div>Size Guide</div>

            <section className={styles.ProductInput__item_incDec}>
                <button onClick={handleDecrement}> - </button>
                <input type="text" value={qty} readOnly />
                <button onClick={handleIncrement}> + </button>
            </section>

            <section className={styles.ProductInput__item_shop}>
                <button onClick={addToCart}>Add to cart</button>
                <button onClick={toggleWishlist}>Add to wishlist</button>
                <button>Find in store</button>
            </section>

            <section>
                {wishlist ? (
                    <p>This item has been added to the wishlist! </p>
                ) : null}
            </section>
        </div>
    );
};

export default ProductInput;
