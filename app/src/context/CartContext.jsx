import { createContext, useState, useRef, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartData = useRef([]);
    const [cart, setCart] = useState(cartData.current);

    const data = { cart, setCart };

    useEffect(() => {
        cartData.current = cart;
    }, [cart]);

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
