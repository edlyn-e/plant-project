// styling
import styles from "./Cart.module.scss";

// library imports
import { useContext, useEffect, useState } from "react";

// local files
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    console.log("cart", cart);

    useEffect(() => {
        const sum = cart.map((item) => {
            return item.qty * item.price;
        });
        const grandTotal = sum.reduce((prev, curr) => prev + curr, 0);
        setTotal(grandTotal);
    }, [cart]);

    const handleDelete = (e) => {
        console.log("handle delete clicks");
        const name = e.target.getAttribute("name");
        console.log("this is name", name);

        const filteredCart = cart.filter((item) => item.name !== name);
        setCart(filteredCart);
        console.log("delete", cart);
    };

    return (
        <div className={styles.Cart}>
            <div className={styles.Cart__basket}>
                <h2>Cart Summary</h2>
                <section>
                    {cart.length > 0 &&
                        cart.map((item, index) => {
                            return (
                                <section
                                    className={styles.Cart__item}
                                    key={index}
                                >
                                    <section className={styles.Cart__header}>
                                        <p>{item.name}</p>
                                        <p>${item.price.toFixed(2)} ea</p>
                                    </section>
                                    <p>Size: {item.size}</p>
                                    <span>
                                        <button
                                            className={styles.Cart__qty_btn}
                                            onClick={() => item.qty - 1}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            value={item.qty}
                                            readOnly
                                            className={styles.Cart__qty}
                                        />
                                        <button
                                            className={styles.Cart__qty_btn}
                                        >
                                            +
                                        </button>
                                    </span>
                                    <section className={styles.Cart__remove}>
                                        <button
                                            name={item.name}
                                            onClick={handleDelete}
                                        >
                                            Remove
                                        </button>
                                    </section>
                                </section>
                            );
                        })}
                    {cart.length === 0 && "Nothing here yet"}
                </section>
                <section className={styles.Cart__total}>
                    <p>Subtotal: ${total.toFixed(2)}</p>
                </section>
            </div>
        </div>
    );
};

export default Cart;
