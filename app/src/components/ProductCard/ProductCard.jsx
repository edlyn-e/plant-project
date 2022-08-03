// styling
import styles from "./ProductCard.module.scss";

// library imports
import { Link } from "react-router-dom";

const ProductCard = ({
    productName,
    productPrice,
    productDescription,
    productImages,
}) => {
    return (
        <div className={styles.ProductCard}>
            <Link to=" ">
                <img
                    src={productImages[0]}
                    alt="item cover"
                    className={styles.ProductCard__image}
                />
                <p className={styles.ProductCard__name}>{productName}</p>
                <p className={styles.ProductCard__price}>${productPrice}</p>
            </Link>
        </div>
    );
};

export default ProductCard;
