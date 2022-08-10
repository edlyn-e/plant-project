// styling
import styles from "./Cart.module.scss";

// library imports
import { useContext, useEffect, useState } from "react";

// local files
import { CartContext } from "../../context/CartContext";
import { getStockLevel } from "../../services/server";

const Cart = () => {
    // Refactoring:
    // Check what is actually needed here and cut back on API calls where possible.
    // each time an API call is made, there is the risk of not getting any data back

    // TODO:
    // create a cart collection to collect compare with database so cart data will remain consistent even if the user refreshes their page.
    // You can find resources for this in the browniePoints lesson with Remi (ceres-forte/code-alongs/react/firestore)
    const { cart, setCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const sum = cart.map((item) => {
            return item.qty * item.price;
        });
        const grandTotal = sum.reduce((prev, curr) => prev + curr, 0);
        setTotal(grandTotal);
    }, [cart]);

    const getStock = async (id) => {
        const awaitingStock = await getStockLevel(id);
        console.log("this is awaiting stock", awaitingStock);
        return await awaitingStock;
    };

    const handleDelete = (e) => {
        const name = e.target.getAttribute("name");
        const filteredCart = cart.filter(
            (_, index) => index !== parseInt(name),
        );
        setCart(filteredCart);
    };

    const updateQty = (item, changeQty) => {
        const foundItem = cart.find((itemInCart) => itemInCart === item);
        const anotherCopy = [...cart];
        console.log("I found the item!", foundItem);

        if (!foundItem) return;
        const stock = getStock(foundItem.id).then((stockLevel) => {
            const qtyInCart = (anotherCopy[cart.indexOf(foundItem)].qty +=
                changeQty);

            if (qtyInCart <= 0) return;

            if (qtyInCart > stockLevel) return;

            console.log("this is another copy of the cart", anotherCopy);
            setCart(anotherCopy);
            return stockLevel;
        });
    };

    useEffect(() => {}, []);

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
                                    <div>
                                        <section
                                            className={styles.Cart__header}
                                        >
                                            <p>{item.name}</p>
                                            <p>${item.price.toFixed(2)} ea</p>
                                        </section>
                                        <p>Size: {item.size}</p>
                                        <span>
                                            <button
                                                className={styles.Cart__qty_btn}
                                                onClick={() =>
                                                    updateQty(item, -1)
                                                }
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
                                                onClick={() =>
                                                    updateQty(item, +1)
                                                }
                                            >
                                                +
                                            </button>
                                        </span>
                                        <section
                                            className={styles.Cart__remove}
                                        >
                                            <button
                                                name={index}
                                                onClick={handleDelete}
                                            >
                                                Remove
                                            </button>
                                        </section>
                                    </div>
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
