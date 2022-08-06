// styling
import styles from "./Cart.module.scss";

// library imports
import { useContext, useEffect, useState } from "react";

// local files
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const handleDecrement = () => {
        console.log("dec button clicks");
    };

    const handleIncrement = () => {
        console.log("inc button clicks");
    };

    console.log("cart", cart);

    useEffect(() => {
        const sum = cart.map((item) => {
            return item.qty * item.price;
        });

        const grandTotal = sum.reduce((prev, curr) => prev + curr, 0);

        setTotal(grandTotal);
    });

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
                                        <p>{item.price.toFixed(2)} ea</p>
                                    </section>
                                    <span>
                                        <button
                                            className={styles.Cart__qty_btn}
                                            onClick={handleDecrement}
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
                                            onClick={handleIncrement}
                                        >
                                            +
                                        </button>
                                    </span>
                                    <p>{item.size}</p>
                                </section>
                            );
                        })}
                    {cart.length === 0 && "Nothing here yet"}
                </section>
                <section className={styles.Cart__total}>
                    <p>Subtotal: ${total}</p>
                </section>
            </div>
        </div>
    );
};

export default Cart;
