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
    const { id } = useParams();
    const [sizeButton, setSizeButton] = useState([]);
    const [size, setSize] = useState("select");
    const [stock, setStock] = useState([]);
    const [qty, setQty] = useState(0);
    const { cart, setCart } = useContext(CartContext);

    const getSizeButton = async () => {
        const info = await getProductByID(id);
        const sizes = info.size;
        setSizeButton(sizes);
    };

    const getStockLevel = async () => {
        const info = await getProductByID(id);
        const stockLevel = info.stock;
        console.log("the stock level of this item is: ", stockLevel);
        setStock(stockLevel);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setSize(e.target.value);

        console.log(e.target.value, "button clicks");
    };

    const add = () => {
        setQty((qty) => qty + 1);
        if (qty > stock) {
            alert(
                "Oops! Sorry, we don't have that much at the moment. For bulk orders, please contact us directly.",
            );
        }
        return;
    };

    const take = () => {
        if (qty <= 0) return;

        setQty((qty) => qty - 1);
    };

    const addToCart = () => {
        console.log("I have added " + qty + " " + size + " of " + product.name);

        const name = product.name;
        const price = product.price;
        setCart([qty, size, name, price]);
    };

    useEffect(() => {
        getSizeButton();
        getStockLevel();
    }, []);

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
                <button onClick={take}> - </button>
                <input type="text" value={qty} />
                <button onClick={add}> + </button>
            </section>

            <section section className={styles.ProductInput__item_shop}>
                <button onClick={addToCart}>Add to cart</button>
                <button>Add to wishlist</button>
                <button>Find in store</button>
            </section>

            <section className={styles.Note}>
                {cart}
                <p>Available stock: {stock}</p>
                <p>
                    Customer has selected: {size} size and {qty} qty.
                </p>
            </section>
        </div>
    );
};

export default ProductInput;
