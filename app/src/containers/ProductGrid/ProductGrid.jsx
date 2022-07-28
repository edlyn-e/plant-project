import React from "react";
import Product from "../../components/Product/Product";

const ProductGrid = ({ products }) => {
    return (
        <div>
            Product Grid: render products
            <Product />
        </div>
    );
};

export default ProductGrid;
