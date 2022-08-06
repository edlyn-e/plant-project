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
        const cartData = [];
        const cartCost = [];

        const quantity = cart[0];
        const size = cart[1];
        const name = cart[2];
        const cost = cart[3];
        const id = cart[4];

        cartData.push({
            qty: quantity ? quantity : "",
            size: size ? size : "",
            name: name ? name : "",
            price: cost ? cost : "",
            id: id ? id : "",
        });

        const totalSum = (quantity ? quantity : 0) * (cost ? cost : 0);

        cartCost.push(totalSum);

        setCartItem(cartData);
        setTotalPrice(cartCost);
    }, []);

    console.log("cart", cart);
    console.log("cart item ", cartItem);
    console.log("totalPrice", totalPrice);

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
                                    <p>{`${item.qty} ${item.size}`}</p>
                                </section>
                            );
                        })}
                    {cartItem.lengtth === 0 && "Nothing here yet"}
                </section>
                <section className={styles.Cart__total}>
                    <p>Subtotal: ${totalPrice}</p>
                </section>
            </div>
        </div>
    );
};

export default Cart;
