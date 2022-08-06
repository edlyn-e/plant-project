// styling
import styles from "./Cart.module.scss";

// library imports
import { useContext, useEffect, useState } from "react";

// local files
import CartForm from "../../components/CartForm/CartForm";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const [cartItem, setCartItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const cartData = [...cartItem];
        const cartCost = totalPrice;

        const quantity = cart[0];
        const size = cart[1];
        const name = cart[2];
        const cost = cart[3];
        const id = cart[4];

        cartData.push({
            qty: quantity ? quantity : "no qty",
            size: size ? size : "no size selected",
            name: name ? name : "no item select",
            price: cost ? cost : "nothing yet",
            id: id ? id : "",
        });

        const totalSum = (quantity ? quantity : 0) * (cost ? cost : 0);

        setCartItem(cartData);
        setTotalPrice(cartCost + totalSum);
    }, []);

    const handleDecrement = () => {
        console.log("dec button clicks");
    };

    const handleIncrement = () => {
        console.log("inc button clicks");
    };

    const updateQty = (event) => {
        console.log(event.target.value);
    };

    console.log("cart", cart);
    console.log("cart item ", cartItem);
    console.log("totalPrice", totalPrice);
    console.log("qty", cart.quantity);

    return (
        <div className={styles.Cart}>
            <CartForm />
            <div className={styles.Cart__basket}>
                <h2>Cart Summary</h2>
                <section>
                    {cartItem.length > 0 &&
                        cartItem.map((item) => {
                            return (
                                <section
                                    className={styles.Cart__item}
                                    key={item.id}
                                >
                                    <section className={styles.Cart__header}>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
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
                                            onChange={updateQty}
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
                    {cartItem.length === 0 && "Nothing here yet"}
                </section>
                <section className={styles.Cart__total}>
                    <p>Subtotal: ${totalPrice.toFixed(2)}</p>
                </section>
            </div>
        </div>
    );
};

export default Cart;
