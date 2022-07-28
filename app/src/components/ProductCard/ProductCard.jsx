import React from "react";

const ProductCard = ({
    productName,
    productPrice,
    productDescription,
    productImages,
}) => {
    return (
        <div>
            <h3>{productName}</h3>
            <img src={productImages[0]} />
        </div>
    );
};

export default ProductCard;
