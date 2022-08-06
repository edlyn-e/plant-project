import { createContext, useState, useRef, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const data = { cart, setCart };

    // const cartData = useRef([]);

    // useEffect(() => {
    //     cartData.current = cart;
    // }, [cart]);

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
