// styling
import styles from "./Cart.module.scss";

// library imports
import { useContext } from "react";

// local files
import CartForm from "../../components/CartForm/CartForm";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <div className={styles.Cart}>
            <CartForm />
            <div className={styles.Cart__basket}>
                <h2>Cart Summary</h2>
                <p>Trying to get cart: {cart}</p>
                <section>
                    <span>
                        <h4>1x item name</h4>
                        <h4>$0.00</h4>
                    </span>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </section>
                <section>
                    <span>
                        <h4>1x item name</h4>
                        <h4>$0.00</h4>
                    </span>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </section>
                <section>
                    <span>
                        <h4>1x item name</h4>
                        <h4>$0.00</h4>
                    </span>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </section>
                <main>
                    <h4>Sub total: $0.00</h4>
                </main>
            </div>
        </div>
    );
};

export default Cart;
