import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductGrid = ({ products }) => {
    console.log("in product grid, trying to access products", products);
    return (
        <div>
            <h1>All Items</h1>

            {products.map((item) => {
                const { id, name, price, description, images } = item;

                return (
                    <ProductCard
                        key={id}
                        productName={name}
                        productPrice={price}
                        productDescription={description}
                        productImages={images}
                    />
                );
            })}
        </div>
    );
};

export default ProductGrid;
